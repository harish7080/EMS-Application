using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EMS.Web.ViewModels
{
    #region State ViewModel
    public class StateViewModel
    {
        /// <summary>
        /// Get or Set state id
        /// </summary>
        public int StateId { get; set; }

        /// <summary>
        /// Get or Set state name
        /// </summary>
        public string StateName { get; set; }
    }
    #endregion
}