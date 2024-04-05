using Orders.Solution.Core.BaseRepository;
using Orders.Solution.Core.Data;
using Orders.Solution.Core.Models;
using Orders.Solution.Core.ObjectRepository.Interface;

namespace Orders.Solution.Core.ObjectRepository.Implementation
{
    public class OrderHeaderRepository : Repository<OrderHeaderDTO>, IOrderHeaderRepository
    {
        private readonly AppDbContext _dbcontext;

        public OrderHeaderRepository(AppDbContext dbcontext) : base(dbcontext)
        {
            _dbcontext = dbcontext;
        }
    }
}
