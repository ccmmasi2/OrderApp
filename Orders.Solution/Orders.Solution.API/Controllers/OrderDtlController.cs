using Microsoft.AspNetCore.Mvc;
using Orders.Solution.Core.ObjectRepository.Interface;

namespace Orders.Solution.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderDtlController : ControllerBase
    {
        private readonly IOrderDtlRepository _orderDtlRepository;
        private readonly ILogger<OrderDtlController> _logger;

        public OrderDtlController(IOrderDtlRepository orderDtlRepository, ILogger<OrderDtlController> logger)
        {
            _orderDtlRepository = orderDtlRepository;
            _logger = logger;   
        }

        // GET: api/<ValuesController>
        [HttpGet("GetOrderDtls")]
        public async Task<IActionResult> GetOrderDtls()
        {
            var orderDtls = await _orderDtlRepository.GetAll();
            return Ok(orderDtls);
        }
    }
}
