using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Core.Models;

namespace Core
{
  public interface IRepository<T> where T: BaseModel
  {
    Task<List<T>> GetAllAsync();

    Task<T> GetByIdAsync(int id);

    T Update(T model);

    Task<bool> DeleteById(int id);
  }
}