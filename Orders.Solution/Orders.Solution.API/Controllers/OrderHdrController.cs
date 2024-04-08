using Microsoft.AspNetCore.Mvc;
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
    }
}
