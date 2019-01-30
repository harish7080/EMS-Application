using AutoMapper;
using EMS.Model;
using EMS.Web.ViewModels;
using EMS.Web.WebApiUrls;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using EMS.Web.Controllers;

namespace EMS.Web.Controllers
{
    public class EmployeeController : BaseController
    {

        #region get all the employees
        /// <summary>
        /// Get all the employees 
        /// </summary>
        /// <returns>returns list of employees</returns>
        public async Task<JsonResult> GetEmployeesInfo()
        {
            List<EmployeeListViewModel> employeeListViewModel = new List<EmployeeListViewModel>();
            try
            {
                HttpResponseMessage response = CommonHttpClient().GetAsync(WebApiUrl.GetEmployeeList).Result;
                if (response.IsSuccessStatusCode)
                {
                    var getEmployeeList = await response.Content.ReadAsAsync<EmployeeListAttributeModel>();
                    Mapper.Map(getEmployeeList.employeeDetailsList, employeeListViewModel);
                }
                return Json(employeeListViewModel, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                List<Exception> exceptions = new List<Exception> { new Exception(ex.Message.ToString()) };
                return Json(new BaseViewModel() { Success = false, Exceptions = exceptions }, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion
        
        #region get languages and states
        /// <summary>
        /// Get languages and states
        /// </summary>
        /// <returns>returns list of languages and states</returns>
        public async Task<JsonResult> MasterData()
        {
            MasterDataViewModel masterDataViewModel = new MasterDataViewModel();
            try
            {
                List<LanguagesViewModel> languagesViewModel = new List<LanguagesViewModel>();
                List<StateViewModel> statesViewModel = new List<StateViewModel>();
                HttpResponseMessage response = CommonHttpClient().GetAsync(WebApiUrl.GetMasterData).Result;
                if (response.IsSuccessStatusCode)
                {
                    var getResult = await response.Content.ReadAsAsync<MasterDataAttributeModel>();
                    Mapper.Map(getResult.Languages, languagesViewModel);
                    Mapper.Map(getResult.States, statesViewModel);
                    masterDataViewModel.Languages = languagesViewModel;
                    masterDataViewModel.States = statesViewModel;
                }
                return Json(masterDataViewModel, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                List<Exception> exceptions = new List<Exception> { new Exception(ex.Message.ToString()) };
                return Json(new BaseViewModel() { Success = false, Exceptions = exceptions }, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion


        #region get employee by id
        /// <summary>
        /// Get employee details based on id
        /// </summary>
        /// <returns>returns employees</returns>
        public async Task<JsonResult> GetEmployeeByID(int id)
        {
            EmployeeDetailsViewModel employeeDetailsViewModel = new EmployeeDetailsViewModel();
            try
            {
                HttpResponseMessage response = CommonHttpClient().GetAsync(WebApiUrl.GetEmployeeDetailsById + id).Result;
                if (response.IsSuccessStatusCode)
                {
                    var employee = await response.Content.ReadAsAsync<EmployeeAttributeModel>();
                    Mapper.Map(employee, employeeDetailsViewModel);
                }
                return Json(employeeDetailsViewModel, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                List<Exception> exceptions = new List<Exception> { new Exception(ex.Message.ToString()) };
                return Json(new BaseViewModel() { Success = false, Exceptions = exceptions }, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion


        #region add or update employee
        /// <summary>
        /// Add/Update employee
        /// </summary>
        /// <returns>returns employees</returns>
        public async Task<JsonResult> AddEmployee(EmployeeDetailsViewModel employee)
        {
            BaseViewModel resultData = new BaseViewModel();
            try
            {
                HttpResponseMessage response = CommonHttpClient().PostAsJsonAsync(WebApiUrl.InsertEmployee, employee).Result;
                if (response.IsSuccessStatusCode)
                {
                    var result = await response.Content.ReadAsAsync<BaseAttributeModel>();
                    Mapper.Map(result, resultData);
                }
                return Json(resultData, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                List<Exception> exceptions = new List<Exception> { new Exception(ex.Message.ToString()) };
                return Json(new BaseViewModel() { Success = false, Exceptions = exceptions }, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion
        
        #region delete employee
        /// <summary>
        /// Delete employee based on id
        /// </summary>
        /// <returns>returns employees</returns>
        public async Task<JsonResult> DeleteEmployee(int id)
        {
            BaseViewModel resultData = new BaseViewModel();
            try
            {
                HttpResponseMessage response = CommonHttpClient().GetAsync(WebApiUrl.DeleteEmployee + id).Result;
                if (response.IsSuccessStatusCode)
                {
                    var result = await response.Content.ReadAsAsync<BaseAttributeModel>();
                    Mapper.Map(result, resultData);
                }
                return Json(resultData, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                List<Exception> exceptions = new List<Exception> { new Exception(ex.Message.ToString()) };
                return Json(new BaseViewModel() { Success = false, Exceptions = exceptions }, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult EmployeeList()
        {
            return View();
        }

        public ActionResult EmployeeDetails()
        {
            return View();
        }

    }
}