using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EMS.Web.ViewModels
{
    #region Employee List ViewModel
    public class EmployeeListViewModel : BaseViewModel
    {
        /// <summary>
        /// Get or Set employee id
        /// </summary>
        public int EmpId { get; set; }

        /// <summary>
        /// Get or Set employee first name
        /// </summary>
        public string FirstName { get; set; }

        /// <summary>
        /// Get or Set employee last name
        /// </summary>
        public string LastName { get; set; }

        /// <summary>
        /// Get or Set employee email
        /// </summary>
        public string Email { get; set; }
    }
    #endregion
}