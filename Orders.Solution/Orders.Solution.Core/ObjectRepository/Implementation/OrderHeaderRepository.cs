using Azure;
using Microsoft.EntityFrameworkCore;
using Orders.Solution.Core.BaseRepository;
using Orders.Solution.Core.Data;
using Orders.Solution.Core.Models;
using Orders.Solution.Core.ObjectRepository.Interface;

namespace Orders.Solution.Core.ObjectRepository.Implementation
{
    public class OrderHdrRepository : Repository<OrderHdrDTO>, IOrderHdrRepository
    {
        private readonly AppDbContext _dbcontext;

        public OrderHdrRepository(AppDbContext dbcontext) : base(dbcontext)
        {
            _dbcontext = dbcontext;
        }

        public async Task<bool> CreateOrder(OrderRequest orderRequest)
        {
            CustomerDTO customer = orderRequest.Customer;

            await _dbcontext.Customers.AddAsync(customer);
            await _dbcontext.SaveChangesAsync();
            int customerId = customer.ID;

            OrderHdrDTO orderHdr = new OrderHdrDTO();
            orderHdr.OrderDate = DateTime.Now;
            orderHdr.ShippingAddress = orderRequest.ShippingAddress;
            orderHdr.CustomerId = customerId;

            await _dbcontext.OrderHdrs.AddAsync(orderHdr);
            await _dbcontext.SaveChangesAsync();
            int orderHdrId = orderHdr.ID;

            foreach(ProductDTO item in orderRequest.Products)
            {
                OrderDtlDTO orderDtl = new OrderDtlDTO();   
                orderDtl.OrderHdrId = orderHdrId;
                orderDtl.ProductId = item.ID;
                orderDtl.Price = item.Price;
                orderDtl.Qty = item.OrderQty;

                await _dbcontext.OrderDtls.AddAsync(orderDtl);
                await _dbcontext.SaveChangesAsync();

                StockDTO stock = new StockDTO();
                stock.ProductId = item.ID;
                stock.Qty = item.OrderQty * -1;

                await _dbcontext.Stock.AddAsync(stock);
                await _dbcontext.SaveChangesAsync();
            }

            return true;
        }
         
        public async Task<IEnumerable<OrderInformation>> GetOrdersInformation()
        {
            var ordersHdr = await _dbcontext.OrderHdrs
                                    .Join(_dbcontext.Customers,
                                        o => o.CustomerId, 
                                        c => c.ID, 
                                        (o, c) => new { order = o, Customer = c })

                            .Select(p => new OrderInformation
                            {
                                ID = p.order.ID,
                                OrderDate = p.order.OrderDate,
                                ShippingAddress = p.order.ShippingAddress,
                                CompleteName = $"{p.Customer.Name} {p.Customer.LastName}",
                                IdentificationType = _dbcontext.IdentificationTypes
                                                        .Where(i => i.ID == p.Customer.IdentificationTypeId)
                                                        .Select(i => i.Name)
                                                        .FirstOrDefault(),
                                Identification = p.Customer.Identification,
                                Email = p.Customer.Email,
                                PhoneNumber = p.Customer.PhoneNumber,
                                TotalPrice = _dbcontext.OrderDtls
                                                .Where(d => d.OrderHdrId == p.order.ID)
                                                .Sum(d => d.Price),
                                TotalQty = _dbcontext.OrderDtls
                                                .Where(d => d.OrderHdrId == p.order.ID)
                                                .Sum(d => d.Qty)
                            })
                            .ToListAsync();

            return ordersHdr;
        }
    }
}
