using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EMS.Web.WebApiUrls
{
    public class WebApiUrl
    {
        /// <summary>
        /// WebApi url for getting languages and states
        /// </summary>
        public static string GetMasterData = "api/Employee/MasterData";

        /// <summary>
        /// WebApi url for getting all the employee list
        /// </summary>
        public static string GetEmployeeList = "api/Employee/List";

        /// <summary>
        /// WebApi url for getting employee details by id
        /// </summary>
        public static string GetEmployeeDetailsById = "api/Employee/";

        /// <summary>
        /// WebApi url for inserting employee details
        /// </summary>
        public static string InsertEmployee = "api/Employee";

        /// <summary>
        /// WebApi url for updating employee details
        /// </summary>
        public static string UpdateEmployee = "api/Employee";

        /// <summary>
        /// WebApi url for deleting employee details
        /// </summary>
        public static string DeleteEmployee = "api/Employee/Delete/";

        /// <summary>
        /// WebApi url for uploading file 
        /// </summary>
        public static string FileUpload = "api/Files";
    }
}