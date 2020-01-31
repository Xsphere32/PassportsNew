using AutoMapper;
using Core.Dto;
using System;
using System.Collections.Generic;
using System.Text;
using Core.Models;

namespace Core.Profiles
{
    public class PassportsForGridProfile : Profile
    {
        public PassportsForGridProfile()
        {
            CreateMap<Passport, PassportsForGridDto>()
                .ForMember(i => i.employeeName, opt => opt.MapFrom(c => c.Employee.Name))
                .ForMember(i => i.Department, opt => opt.MapFrom(c => c.Department.Name));
            CreateMap<PassportsForGridDto, Passport>()
                .ForMember(i => i.Employee, act => act.MapFrom(c => new Employee
                {
                    Name = c.employeeName
                }));
        }
    }
}
