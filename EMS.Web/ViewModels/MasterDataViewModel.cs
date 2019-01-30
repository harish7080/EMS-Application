using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EMS.Web.ViewModels
{
    #region MasterData ViewModel
    public class MasterDataViewModel
    {
        /// <summary>
        /// Get or Set list of languages
        /// </summary>
        public List<LanguagesViewModel> Languages { get; set; }

        /// <summary>
        /// Get or Set list of states
        /// </summary>
        public List<StateViewModel> States { get; set; }
    }
    #endregion
}