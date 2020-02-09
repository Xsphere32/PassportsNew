using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net.Http;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using Core;
using Core.Dto;
using Core.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Logging;
using Microsoft.IdentityModel.Tokens;

namespace _1BGB.Api.Controllers
{
  [Route("api/auth")]
  public class AuthorizationController : Controller
  {
    private readonly IRepository<Employee> _employeeRepository;

    public AuthorizationController(IRepository<Employee> employeeRepository)
    {
      _employeeRepository = employeeRepository;
    }
    [HttpPost, Route("login")]
    public async Task<IActionResult> Login([FromBody]EmployeeAuthDto employee)
    {
      if (employee == null)
      {
        return BadRequest("Invalid Employee Credentials");
      }

      var credentials = (await _employeeRepository.GetAllAsync()).FirstOrDefault(i => i.Login == employee.Login);

      if (credentials != null && credentials.Password == employee.Password)
      {
        var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("super@SecretShit"));
        var signInCred = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

        var token = new JwtSecurityToken(
            issuer: "https://localhost:5001",
            audience: "https://localhost:5001",
            claims: new List<Claim>
            {
              new Claim(ClaimTypes.Name,credentials.Name),
              new Claim(ClaimTypes.Role, "Administrator")
            },
            expires: DateTime.Now.AddDays(3),
            signingCredentials: signInCred
        );
        IdentityModelEventSource.ShowPII = true;
        var tokenString = new JwtSecurityTokenHandler().WriteToken(token);
        credentials.Token = tokenString;
        credentials.Password = string.Empty;
        return Ok(credentials);
      }
      else
      {
        return Unauthorized();
      }
    }

  }
}
