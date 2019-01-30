using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EMS.Web.ViewModels
{
    #region Languages ViewModel
    public class LanguagesViewModel
    {
        /// <summary>
        /// Get or Set language id
        /// </summary>
        public int LanguageId { get; set; }

        /// <summary>
        /// Get or Set language name
        /// </summary>
        public string LanguageName { get; set; }
    }
    #endregion
}