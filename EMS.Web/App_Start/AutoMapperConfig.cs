using AutoMapper;
using EMS.Model;
using EMS.Web.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EMS.Web.App_Start
{
    public class AutoMapperConfig
    {
        public static void Execute()
        {
            Mapper.CreateMap<BaseAttributeModel, BaseViewModel>();
            Mapper.CreateMap<EmployeeAttributeModel, EmployeeDetailsViewModel>();
            Mapper.CreateMap<EmployeeDetailsAttributeModel, EmployeeListViewModel>();
            Mapper.CreateMap<EmployeeLanguagesAttributeModel, EmployeeLanguagesViewModel>();
            Mapper.CreateMap<LanguageAttributeModel, LanguagesViewModel>();
            Mapper.CreateMap<StateAttributeModel, StateViewModel>();
            Mapper.CreateMap<MasterDataAttributeModel, MasterDataViewModel>();
            Mapper.CreateMap<FileAttributeModel, AttachmentsViewModel>();
            Mapper.CreateMap<AttachmentsViewModel, FileAttributeModel>();
        }
    }
}