using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EMS.Web.ViewModels
{
    #region Employee Details List
    public class EmployeeDetails
    {
        /// <summary>
        /// Get or Set employee details
        /// </summary>
        public List<EmployeeDetailsViewModel> employeeDetailsViewModel { get; set; }
    }
    #endregion

    #region Employee Details ViewModel
    public class EmployeeDetailsViewModel : BaseViewModel
    {
        public EmployeeDetailsViewModel()
        {
            LanguageIds = new List<int>();
        }

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

        /// <summary>
        /// Get or Set employee gender
        /// </summary>
        public int Gender { get; set; }

        /// <summary>
        /// Get or Set state id
        /// </summary>
        public int StateId { get; set; }

        /// <summary>
        /// Get or Set language ids
        /// </summary>
        public List<int> LanguageIds { get; set; }

        /// <summary>
        /// Get or Set list of languages
        /// </summary>
        public List<EmployeeLanguagesViewModel> EmployeeLanguages { get; set; }

        /// <summary>
        /// Get or Set list of files
        /// </summary>
        public List<AttachmentsViewModel> Files { get; set; }

        /// <summary>
        /// Get or Set file active status
        /// </summary>
        public bool IsActive { get; set; }
    }
    #endregion
}