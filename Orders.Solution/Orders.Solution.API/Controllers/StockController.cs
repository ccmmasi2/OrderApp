using Microsoft.AspNetCore.Mvc;
using Orders.Solution.Core.ObjectRepository.Interface;

namespace Orders.Solution.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StockController : ControllerBase
    {
        private readonly IStockRepository _stockRepository;
        private readonly ILogger<StockController> _logger;

        public StockController(IStockRepository stockRepository, ILogger<StockController> logger)
        {
            _stockRepository = stockRepository;
            _logger = logger;   
        }

        // GET: api/<ValuesController>
        [HttpGet("GetStock")]
        public async Task<IActionResult> GetStock()
        {
            var stock = await _stockRepository.GetAll();
            return Ok(stock);
        }
    }
}
