using AutoMapper;
using Core.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using Core.Models;

namespace Core.Profiles
{
    public class EmployeeProfile : Profile
    {
        public EmployeeProfile()
        {
            CreateMap<Employee, EmployeeDto>();
            CreateMap<EmployeeDto, Employee>();
        }
    }
}
