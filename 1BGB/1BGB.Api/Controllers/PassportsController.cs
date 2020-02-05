using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Core;
using Core.Dto;
using Core.Dto.Passports;
using Core.Helpers.Interfaces;
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
        private readonly IPassportsHelper _passportsHelper;

        public PassportsController(IRepository<Passport> passportsRepository,
                                 IMapper mapper,
                                 IPassportsHelper passportsHelper)
        {
            _passportsContext = passportsRepository;
            _mapper = mapper;
            _passportsHelper = passportsHelper;
        }

        /// <summary>
        /// Получение списка паспортов
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var a = await _passportsContext.GetAllAsync();
            var result = _mapper.Map<List<PassportsForGridDto>>(a);
            return Json(result);
        }

        [HttpPost]
        public async Task<IActionResult> PostFilters(PassportFilterDto filters)
        {
          var query = _passportsContext.Queryable();
          var result = await _passportsHelper.GetFilteredQuery(query, filters).ProjectTo<PassportsForGridDto>(_mapper.ConfigurationProvider).ToListAsync();
          return Json(result);
        }

    }
}
