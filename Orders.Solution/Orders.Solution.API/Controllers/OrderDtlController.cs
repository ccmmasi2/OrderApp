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

        //// GET api/<ValuesController>/5
        //[HttpGet("{id}")]
        //public string Get(int id)
        //{
        //    return "value";
        //}

        //// POST api/<ValuesController>
        //[HttpPost]
        //public void Post([FromBody] string value)
        //{
        //}

        //// PUT api/<ValuesController>/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE api/<ValuesController>/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
