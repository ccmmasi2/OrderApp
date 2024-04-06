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
