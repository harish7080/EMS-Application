using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EMS.Web.ViewModels
{
    #region Attachments ViewModel
    public class AttachmentsViewModel : BaseViewModel
    {
        /// <summary>
        /// Get or Set file in array
        /// </summary>
        public byte[] byteArray { get; set; }

        /// <summary>
        /// Get or Set employee id
        /// </summary>
        public int EmpId { get; set; }

        /// <summary>
        /// Get or Set file id
        /// </summary>
        public int FileId { get; set; }

        /// <summary>
        /// Get or Set file index
        /// </summary>
        public int FileIndex { get; set; }

        /// <summary>
        /// Get or Set file name
        /// </summary>
        public string FileName { get; set; }
        
        /// <summary>
        /// Get or Set file path 
        /// </summary>
        public string FilePath { get; set; }

        /// <summary>
        /// Get or Set file path url
        /// </summary>
        public string FilePathURL { get; set; }

        /// <summary>
        /// Get or Set file unique id
        /// </summary>
        public string FileUId { get; set; }

        /// <summary>
        /// Get or Set file
        /// </summary>
        public bool IsActive { get; set; }
    }
    #endregion
}