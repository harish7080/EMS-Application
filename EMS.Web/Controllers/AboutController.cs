using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using EMS.Web.Models;
using System.Threading.Tasks;
using EMS.Web.ViewModels;

namespace EMS.Web.Controllers
{
    public class AboutController : BaseController
    {
        public ActionResult Index()
        {
            return View();
        }

        #region Get all the employee list
        /// <summary>
        /// Get the list of employees
        /// </summary>
        /// <returns>returns list of employees</returns>
        public List<Employee> EmployeeList()
        {
            BaseController employee = new BaseController();
            List<Employee> employeeList = employee.MockData();
            return employeeList;
        }
        #endregion

        public ActionResult EmployeePaging()
        {
            return View();
        }

        #region Get Employee States
        /// <summary>
        /// Get all the unique states
        /// </summary>
        /// <param name="query"></param>
        /// <returns>returns list of states</returns>
        public JsonResult EmployeeStates(string query)
        {
            List<Employee> employeeList = EmployeeList().ToList();

            var employeeStates = (from states in employeeList where states.State.StartsWith(query) select states.State).ToList().Distinct();

            return Json(employeeStates, JsonRequestBehavior.AllowGet);
        }
        #endregion

        #region Get Employee Names
        /// <summary>
        /// Get all the unique names
        /// </summary>
        /// <returns>returns list of names</returns>
        public JsonResult EmployeeNames()
        {
            List<Employee> employeeList = EmployeeList().ToList();

            var employeeNames = (from names in employeeList select new { Id = names.Id, Name = names.Name }).Distinct().ToList();

            return Json(employeeNames, JsonRequestBehavior.AllowGet);
        }
        #endregion

        #region Get employees by Paging (or) Search
        /// <summary>
        ///  Get employees by Paging (or) Search
        /// </summary>
        /// <param name="currentPage"></param>
        /// <param name="pagePerItems"></param>
        /// <param name="states"></param>
        /// <param name="names"></param>
        /// <returns>returns list of filter employees</returns>
        public JsonResult EmployeesByPage(int currentPage, int pagePerItems, string states, string names)
        {
            List<Employee> employeeList = EmployeeList().ToList();

            if(string.IsNullOrEmpty(names) && string.IsNullOrEmpty(states))
            {    
                var empList = employeeList.Skip((currentPage - 1) * pagePerItems).Take(pagePerItems).ToList();
                var employees = new { List = empList, count = employeeList.Count() };
                return Json(employees, JsonRequestBehavior.AllowGet);
            }
            else
            {
                string[] statelist = states.Split(',');
                string[] listName = names.Split(',');

                var statesList = from state in employeeList
                                 where statelist.Contains(state.State)
                                 select state;

                var namesList = from name in employeeList
                                where listName.Contains(name.Name)
                                select name;

                var filteremployeelist = namesList.Union(statesList).ToList();

                var employee = filteremployeelist.Skip((currentPage - 1) * pagePerItems).Take(pagePerItems).ToList();
                var filterEmployeeList = new { List = employee, count = filteremployeelist.Count };
                return Json(filterEmployeeList, JsonRequestBehavior.AllowGet);
            }
        }
        #endregion

    }
}