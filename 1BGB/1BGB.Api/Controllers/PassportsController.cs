using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Core;
using Core.Dto;
using Core.Models;
using Core.Profiles.Passports;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace _1BGB.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PassportsController : Controller
    {
        private readonly IRepository<Passport> _passportsContext;
        private readonly IMapper _mapper;

        public PassportsController(IRepository<Passport> passportsRepository,
                                 IMapper mapper)
        {
            _passportsContext = passportsRepository;
            _mapper = mapper;
        }

        // GET: api/<controller>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var a = await _passportsContext.GetAllAsync();
            var result = _mapper.Map<List<PassportsForGridDto>>(a);
            return Json(result);
        }

        
    }
}
