using Microsoft.AspNetCore.Mvc;
using Orders.Solution.Core.Models;
using Orders.Solution.Core.ObjectRepository.Interface;

namespace Orders.Solution.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderHdrController : ControllerBase
    {
        private readonly IOrderHdrRepository _orderHdrRepository;
        private readonly ILogger<OrderHdrController> _logger;

        public OrderHdrController(IOrderHdrRepository orderHdrRepository, ILogger<OrderHdrController> logger)
        {
            _orderHdrRepository = orderHdrRepository;
            _logger = logger;   
        }

        // GET: api/<ValuesController>
        [HttpGet("GetOrderHdrs")]
        public async Task<IActionResult> GetOrderHdrs()
        {
            var orderHdrs = await _orderHdrRepository.GetAll();
            return Ok(orderHdrs);
        }

        [HttpPost("AddOrderRequest")]
        public async Task<IActionResult> AddOrderRequest(OrderRequest orderRequest)
        {
            try
            {
                var result = await _orderHdrRepository.CreateOrder(orderRequest);
                return Ok(result);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error while processing order request");
                return StatusCode(500, "An error occurred while processing the order request");
            }
        }
    }
}
