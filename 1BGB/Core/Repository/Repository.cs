using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Core.Models;
using Microsoft.EntityFrameworkCore;

namespace Core.Repository
{
  public class Repository<T> : IRepository<T>, IDisposable where T : BaseModel
  {
    private readonly DataContext _dataContext;

    /// <summary>
    /// 
    /// </summary>
    /// <param name="context">Контекст БД</param>
    public Repository(DataContext context)
    {
      _dataContext = context;
    }

    public async Task<bool> DeleteById(int id)
    {
       _dataContext.Set<T>().Remove(await GetByIdAsync(id));
       return true;
    }

    public void Dispose()
    {
      
    }

    public async Task<List<T>> GetAllAsync()
    {
      return await _dataContext.Set<T>().ToListAsync();
    }

    public async Task<T> GetByIdAsync(int id)
    {
      return await _dataContext.Set<T>().Where(i => i.Id == id).FirstOrDefaultAsync();
    }

    public IQueryable<T> Queryable()
    {
      return _dataContext.Set<T>().AsQueryable();
    }

    public T Update(T model)
    {
      var savedEntity = _dataContext.Set<T>().Update(model).Entity;
      _dataContext.SaveChanges();
      return savedEntity;
    }

    public async Task<T> GetByName(string name)
    {
      return await _dataContext.Set<T>().Where(i => i.Name == name).FirstOrDefaultAsync();
    }

    public async Task<T> GetByLogin(string login)
    {
      return await _dataContext.Set<T>().Where(i => i.Login == login).FirstOrDefaultAsync();
    }
  }
}
