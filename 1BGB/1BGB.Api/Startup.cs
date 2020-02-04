using System;
using System.Text;
using Autofac;
using AutoMapper;
using Core;
using Core.Repository;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;

namespace _1BGB.Api
{
  public class Startup
  {
    public Startup(IConfiguration configuration, IWebHostEnvironment env)
    {
      var builder = new ConfigurationBuilder()
        .SetBasePath(env.ContentRootPath)
        .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
        .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
        .AddEnvironmentVariables();
      this.Configuration = builder.Build();
    }

    public IConfigurationRoot Configuration { get; private set; }

    public ILifetimeScope AutofacContainer { get; private set; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddOptions();
      services.AddCors(o => o.AddPolicy("MyPolicy", builder =>
      {
        builder.AllowAnyOrigin()
                  .AllowAnyMethod()
                  .AllowAnyHeader();
      }));
      services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
      services.AddDbContext<DataContext>(optionsAction: options =>
      {
        options.UseLazyLoadingProxies();
        options.UseSqlServer(connectionString: Configuration[key: "ConnectionStrings:DefaultConnection"],
          sqlServerOptionsAction: b => b.MigrationsAssembly(assemblyName: "Core"));
      });
      services.AddAuthentication(configureOptions: opt =>
      {
        opt.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        opt.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
      }).AddJwtBearer(configureOptions: options =>
      {
        options.TokenValidationParameters = new TokenValidationParameters
        {
          ValidateIssuer = true,
          ValidateAudience = true,
          ValidateLifetime = true,
          ValidateIssuerSigningKey = true,
          ValidIssuer = "https://localhost:5001",
          ValidAudience = "https://localhost:5001",
          IssuerSigningKey = new SymmetricSecurityKey(key: Encoding.UTF8.GetBytes(s: "super@SecretShit"))
        };
      });
      services.AddControllers()
              .AddControllersAsServices();
    }

    public void ConfigureContainer(ContainerBuilder builder)
    {
      // Register your own things directly with Autofac, like:
      builder.RegisterGeneric(typeof(Repository<>)).AsImplementedInterfaces().InstancePerLifetimeScope();
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IWebHostEnvironment env, ILoggerFactory loggerFactory)
    {
      ;
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }

      app.UseCors("MyPolicy");
      app.UseHttpsRedirection();

      app.UseRouting();
      app.UseAuthentication();
      app.UseAuthorization();


      app.UseEndpoints(endpoints =>
      {
        endpoints.MapControllers();
      });
    }
  }
}
