using Microsoft.AspNetCore.Mvc;
using Orders.Solution.Core.ObjectRepository.Interface;

namespace Orders.Solution.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IdentificationTypeController : ControllerBase
    {
        private readonly IIdentificationTypeRepository _identificationTypeRepository;
        private readonly ILogger<IdentificationTypeController> _logger;

        public IdentificationTypeController(IIdentificationTypeRepository identificationTypeRepository, ILogger<IdentificationTypeController> logger)
        {
            _identificationTypeRepository = identificationTypeRepository;
            _logger = logger;   
        }

        // GET: api/<ValuesController>
        [HttpGet("GetIdentificationTypes")]
        public async Task<IActionResult> GetIdentificationTypes()
        {
            var identificationTypes = await _identificationTypeRepository.GetAll();
            return Ok(identificationTypes);
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
