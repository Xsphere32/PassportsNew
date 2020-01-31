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
        private readonly DataContext _passportsContext;
        private readonly IMapper _mapper;

        public PassportsController(DataContext passportsContext,
                                 IMapper mapper)
        {
            _passportsContext = passportsContext;
            _mapper = mapper;
        }

        // GET: api/<controller>
        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var a = await _passportsContext.Passports.ProjectTo<PassportsForGridDto>(_mapper.ConfigurationProvider).ToListAsync();
            return Json(a);
        }

        // GET api/<controller>/5
        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var result = await _passportsContext.Passports.Include(i=>i.Employee).FirstOrDefaultAsync(i => i.Id == id);

            return Json(_mapper.Map<Passport,PassportsForEditDto>(result));
        }

        // POST api/<controller>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]PassportsForGridDto passport)
        {
            var model = _mapper.Map<Passport>(passport);
            var response = _passportsContext.Passports.Update(model).Entity;
            await _passportsContext.SaveChangesAsync();
            return Json(response);
        }

        // PUT api/<controller>/5
        [HttpPut("{id}")]
        public void Put([FromBody]Passport passport)
        {
        }

        // DELETE api/<controller>/5
        [HttpDelete("{id}")]
        public async Task<bool> Delete(int id)
        {
            var entity = await _passportsContext.Passports.FirstOrDefaultAsync(i=>i.Id == id);
            _passportsContext.Passports.Remove(entity);
            await _passportsContext.SaveChangesAsync();
            return true;
        }
    }
}
