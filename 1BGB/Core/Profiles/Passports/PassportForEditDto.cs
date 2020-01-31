using System;
using System.Collections.Generic;
using System.Text;
using AutoMapper;
using Core.Models;
using Core.Dto;

namespace Core.Profiles.Passports
{
    public class PassportForEditProfile : Profile
    {
        public PassportForEditProfile()
        {
            CreateMap<Passport, PassportsForEditDto>();
            CreateMap<PassportsForEditDto, Passport>();
            
        }
    }
}
