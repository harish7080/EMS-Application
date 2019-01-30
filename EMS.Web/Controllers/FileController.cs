using EMS.Web.ViewModels;
using EMS.Web.WebApiUrls;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;

namespace EMS.Web.Controllers
{
    public class FileController : Controller
    {
        #region WebApi Url
        /// <summary>
        /// Accessing WebApi url from web config file
        /// </summary>
        string baseUrl = ConfigurationManager.AppSettings["WebApiUrl"].ToString();
        #endregion

        public ActionResult Index()
        {
            return View();
        }

        AttachmentsViewModel fileViewModel;

        /// <summary>
        /// constructer for Filecontroller
        /// </summary>
        public FileController()
        {
            fileViewModel = new AttachmentsViewModel();
        }

        #region
        /// <summary>
        /// Get uploaded file
        /// </summary>
        /// <returns></returns>
        public async Task<JsonResult> Upload()
        {
            using (var client = new HttpClient())
            {
                try
                {
                    AttachmentsViewModel filedata = GetFileByteArray();
                    client.BaseAddress = new Uri(baseUrl);
                    client.DefaultRequestHeaders.Accept.Clear();
                    client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                    var response = await client.PostAsJsonAsync(WebApiUrl.FileUpload, filedata);
                    if (response.IsSuccessStatusCode)
                    {
                        filedata = await response.Content.ReadAsAsync<AttachmentsViewModel>();
                    }
                    return Json(filedata, JsonRequestBehavior.AllowGet);
                }
                catch (Exception ex)
                {
                    List<Exception> exceptions = new List<Exception> { new Exception(ex.Message.ToString()) };
                    return Json(new BaseViewModel() { Success = false, Exceptions = exceptions }, JsonRequestBehavior.AllowGet);
                }
            }
        }
        #endregion

        #region
        /// <summary>
        /// Get uploaded file in array
        /// </summary>
        /// <returns></returns>
        public AttachmentsViewModel GetFileByteArray()
        {
            using (var binaryReader = new BinaryReader(Request.Files[0].InputStream))
            {
                byte[] fileByteArray = fileByteArray = binaryReader.ReadBytes(Request.Files[0].ContentLength);
                fileViewModel.byteArray = fileByteArray;
                fileViewModel.FileName = Request.Files[0].FileName;
            }
            return fileViewModel;
        }
        #endregion

    }
}