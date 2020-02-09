using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Core.Models
{
  public class Employee : BaseModel
  {
    public string Name { get; set; }
    public string Login { get; set; }
    public string Password { get; set; }
    [NotMapped]
    public string Token { get; set; }
  }
}
