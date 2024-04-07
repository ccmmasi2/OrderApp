using Microsoft.EntityFrameworkCore;
using Orders.Solution.Core.BaseRepository;
using Orders.Solution.Core.Data;
using Orders.Solution.Core.Models;
using Orders.Solution.Core.ObjectRepository.Interface;

namespace Orders.Solution.Core.ObjectRepository.Implementation
{
    public class ProductRepository : Repository<ProductDTO>, IProductRepository
    {
        private readonly AppDbContext _dbcontext;

        public ProductRepository(AppDbContext dbcontext) : base(dbcontext)
        {
            _dbcontext = dbcontext;
        }

        public async Task<PagedList<ProductDTO>> GetProductsByCategoryId(int categoryId, int page = 1, int sizePage = 10, string sorting = "")
        {
            IQueryable<ProductDTO> query = _dbcontext.Products;

            if (categoryId != 0)
            {
                query = query.Where(p => p.CategoryId == categoryId);
            }

            if (!string.IsNullOrEmpty(sorting))
            {
                switch (sorting)
                {
                    case "name_asc":
                        query = query.OrderBy(p => p.Name);
                        break;
                    case "name_desc":
                        query = query.OrderByDescending(p => p.Name);
                        break;
                    default:
                        query = query.OrderBy(p => p.Name);
                        break;
                }
            }

            var totalRecords = await query.CountAsync();

            var products = await query.Skip((page - 1) * sizePage)
                            .Take(sizePage)
                            .ToListAsync();

            return new PagedList<ProductDTO>(products, totalRecords, page, sizePage);
        }
    }
}
