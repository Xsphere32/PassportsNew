using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Core.Dto.Passports;
using Core.Helpers.Interfaces;
using Core.Models;

namespace Core.Helpers
{
  public class PassportsHelper : IPassportsHelper
  {
    public IQueryable<Passport> GetFilteredQuery(IQueryable<Passport> query, PassportFilterDto filter)
    {
      if (!string.IsNullOrEmpty(filter.SearchText))
        return query.Where(i => i.Room == filter.SearchText);
      return query;
    }
  }
}
