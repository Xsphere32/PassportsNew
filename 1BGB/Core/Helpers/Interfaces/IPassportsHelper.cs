using System.Linq;
using Core.Dto.Passports;
using Core.Models;

namespace Core.Helpers.Interfaces
{
  public interface IPassportsHelper
  {
    IQueryable<Passport> GetFilteredQuery(IQueryable<Passport> query, PassportFilterDto filter);
  }
}
