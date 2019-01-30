using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EMS.Web.ViewModels
{
    #region Employee Languages ViewModel
    public class EmployeeLanguagesViewModel
    {
        /// <summary>
        /// Get or Set id
        /// </summary>
        public int Id { get; set; }

        /// <summary>
        /// Get or Set employee id
        /// </summary>
        public int EmpId { get; set; }

        /// <summary>
        /// Get or Set language id
        /// </summary>
        public int LanguageId { get; set; }

        /// <summary>
        /// Get or Set language active value
        /// </summary>
        public bool IsActive { get; set; }
    }
    #endregion
}