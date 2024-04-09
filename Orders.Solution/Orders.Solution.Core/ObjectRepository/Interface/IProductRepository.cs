using Orders.Solution.Core.BaseRepository;
using Orders.Solution.Core.Models;

namespace Orders.Solution.Core.ObjectRepository.Interface
{
    public interface IProductRepository : IRepository<ProductDTO>
    {
        Task<PagedList<ProductDTO>> GetProductsByCategoryId(int categoryId, int page = 1, int sizePage = 10, string sorting = "");
        Task<List<ProductDTO>> GetProductsByCategoryId(int categoryId);
    }
}
