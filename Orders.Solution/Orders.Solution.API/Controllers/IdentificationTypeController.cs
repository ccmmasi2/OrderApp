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
    }
}
