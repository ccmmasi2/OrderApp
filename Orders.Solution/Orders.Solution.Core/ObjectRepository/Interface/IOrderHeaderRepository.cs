using Orders.Solution.Core.BaseRepository;
using Orders.Solution.Core.Models;

namespace Orders.Solution.Core.ObjectRepository.Interface
{
    public interface IOrderHdrRepository : IRepository<OrderHdrDTO>
    {
        Task<bool> CreateOrder(OrderRequest orderRequest);
    }
}
