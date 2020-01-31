using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
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
        [HttpPost, Route("login")]
        public IActionResult Login([FromBody]EmployeeDto employee)
        {
            if (employee == null)
            {
                return BadRequest("Invalid Employee Credentials");
            }

            if (employee.Login == "xsphere" && employee.Password == "123456")
            {
                var secretKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("super@SecretShit"));
                var signInCred = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

                var token = new JwtSecurityToken(
                    issuer: "https://localhost:5001",
                    audience: "https://localhost:5001",
                    claims: new List<Claim>(),
                    expires: DateTime.Now.AddDays(3),
                    signingCredentials: signInCred
                );
                IdentityModelEventSource.ShowPII = true;
                var tokenString = new JwtSecurityTokenHandler().WriteToken(token);
                return Ok(new {Token = tokenString});
            }
            else
            {
                return Unauthorized();
            }
        }

    }
}
