using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EMS.Web.ViewModels
{
    #region BaseViewModel
    public class BaseViewModel
    {
        /// <summary>
        /// Get or Set list of exceptions
        /// </summary>
        public List<Exception> Exceptions { get; set; }

        /// <summary>
        /// Get or Set success code
        /// </summary>
        public int SuccessCode { get; set; }

        /// <summary>
        /// Get or Set success status
        /// </summary>
        public bool Success { get; set; }
    }
    #endregion
}