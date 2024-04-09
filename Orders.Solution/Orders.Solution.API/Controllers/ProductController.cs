using Microsoft.AspNetCore.Mvc;
using Orders.Solution.Core.ObjectRepository.Interface;

namespace Orders.Solution.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly IProductRepository _productRepository;
        private readonly ILogger<ProductController> _logger;

        public ProductController(IProductRepository productRepository, ILogger<ProductController> logger)
        {
            _productRepository = productRepository;
            _logger = logger;   
        } 

        // GET: api/<ValuesController>
        [HttpGet("GetProductsByCategoryId")]
        public async Task<IActionResult> GetProductsByCategoryId(int categoryId, int page = 1, int sizePage = 10, string sorting = "")
        {
            var products = await _productRepository.GetProductsByCategoryId(categoryId, page, sizePage, sorting);
            return Ok(products);
        }

        // GET: api/<ValuesController>
        [HttpGet("GetProductsByCategoryIdNoPag")]
        public async Task<IActionResult> GetProductsByCategoryId(int categoryId)
        {
            var products = await _productRepository.GetProductsByCategoryId(categoryId);
            return Ok(products);
        }
    }
}
