using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web;
using System.Web.Mvc;
using EMS.Web.Models;

namespace EMS.Web.Controllers
{
    public class BaseController : Controller
    {

        # region WebApi Url
        /// <summary>
        /// Accessing WebApi url from web config file
        /// </summary>
        string baseUrl = ConfigurationManager.AppSettings["WebApiUrl"].ToString();
        # endregion

        HttpClient client = new HttpClient();

        public HttpClient CommonHttpClient()
        {
            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(baseUrl);
            client.DefaultRequestHeaders.Accept.Clear();
            client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
            return client;
        }

        /// <summary>
        /// Get the Employee Data
        /// </summary>
        /// <returns>return list of employees</returns>
        public List<Employee> MockData()
        {
            List<Employee> employeeList = new List<Employee>() {
                new Employee{Id = 1,Name="harish",State="Telangana",Email="harish.123@gmail.com"},
                new Employee{Id = 2,Name="vijaykumar",State="AndhraPradesh",Email="vijaykumar@gmail.com"},
                new Employee{Id = 3,Name="ramesh",State="Andhra",Email="ramesh@gmail.com"},
                new Employee{Id = 4,Name="sumpreeth",State="Telangana",Email="sumpreeth@gmail.com"},
                new Employee{Id = 5,Name="srujan",State="TamilNadu",Email="srujan.123@gmail.com"},
                new Employee{Id = 6,Name="mukesh",State="TamilNadu",Email="mukesh.123@gmail.com"},
                new Employee{Id = 7,Name="rajesh",State="Telangana",Email="rajesh.123@gmail.com"},
                new Employee{Id = 8,Name="karthik",State="Telangana",Email="karthik.123@gmail.com"},
                new Employee{Id = 9,Name="kranthi",State="TamilNadu",Email="kranthi@gmail.com"},
                new Employee{Id = 10,Name="kumar",State="Telangana",Email="kumar.123@gmail.com"},
                new Employee{Id = 11,Name="Imran",State="TamilNadu",Email="Imran@gmail.com"},
                new Employee{Id = 12,Name="Asif",State="Telangana",Email="Asif@gmail.com"},
                new Employee{Id = 13,Name="venkat",State="Telangana",Email="venkat@gmail.com"},
                new Employee{Id = 14,Name="raju",State="Telangana",Email="raju.123@gmail.com"},
                new Employee{Id = 15,Name="arjun",State="Telangana",Email="arjun@gmail.com"},
                new Employee{Id = 16,Name="ram",State="Telangana",Email="ram@gmail.com"},
                new Employee{Id = 17,Name="pawan",State="Telangana",Email="pawan.123@gmail.com"},
                new Employee{Id = 18,Name="satya",State="Telangana",Email="satya@gmail.com"},
                new Employee{Id = 19,Name="sunil",State="Telangana",Email="sunil@gmail.com"},
                new Employee{Id = 20,Name="sunil",State="Telangana",Email="sunil@gmail.com"},
                new Employee{Id = 21,Name="harish",State="Telangana",Email="harish.123@gmail.com"},
                new Employee{Id = 22,Name="vijaykumar",State="AndhraPradesh",Email="vijaykumar@gmail.com"},
                new Employee{Id = 23,Name="ramesh",State="Andhra",Email="ramesh@gmail.com"},
                new Employee{Id = 24,Name="sumpreeth",State="Telangana",Email="sumpreeth@gmail.com"},
                new Employee{Id = 25,Name="srujan",State="Telangana",Email="srujan.123@gmail.com"},
                new Employee{Id = 26,Name="mukesh",State="Maharashtra",Email="mukesh.123@gmail.com"},
                new Employee{Id = 27,Name="rajesh",State="Telangana",Email="rajesh.123@gmail.com"},
                new Employee{Id = 28,Name="karthik",State="Telangana",Email="karthik.123@gmail.com"},
                new Employee{Id = 29,Name="kranthi",State="Maharashtra",Email="kranthi@gmail.com"},
                new Employee{Id = 30,Name="kumar",State="Telangana",Email="kumar.123@gmail.com"},
                new Employee{Id = 31,Name="Imran",State="Maharashtra",Email="Imran@gmail.com"},
                new Employee{Id = 32,Name="Asif",State="Telangana",Email="Asif@gmail.com"},
                new Employee{Id = 33,Name="venkat",State="Maharashtra",Email="venkat@gmail.com"},
                new Employee{Id = 34,Name="raju",State="Telangana",Email="raju.123@gmail.com"},
                new Employee{Id = 35,Name="arjun",State="Maharashtra",Email="arjun@gmail.com"},
                new Employee{Id = 36,Name="ram",State="Telangana",Email="ram@gmail.com"},
                new Employee{Id = 37,Name="pawan",State="Maharashtra",Email="pawan.123@gmail.com"},
                new Employee{Id = 38,Name="satya",State="Telangana",Email="satya@gmail.com"},
                new Employee{Id = 39,Name="sunil",State="Maharashtra",Email="sunil@gmail.com"},
                new Employee{Id = 40,Name="sunil",State="Telangana",Email="sunil@gmail.com"},
                new Employee{Id = 41,Name="harish",State="Telangana",Email="harish.123@gmail.com"},
                new Employee{Id = 42,Name="vijaykumar",State="AndhraPradesh",Email="vijaykumar@gmail.com"},
                new Employee{Id = 43,Name="ramesh",State="Andhra",Email="ramesh@gmail.com"},
                new Employee{Id = 44,Name="sumpreeth",State="Telangana",Email="sumpreeth@gmail.com"},
                new Employee{Id = 45,Name="srujan",State="Telangana",Email="srujan.123@gmail.com"},
                new Employee{Id = 46,Name="mukesh",State="Telangana",Email="mukesh.123@gmail.com"},
                new Employee{Id = 47,Name="rajesh",State="Telangana",Email="rajesh.123@gmail.com"},
                new Employee{Id = 48,Name="karthik",State="Telangana",Email="karthik.123@gmail.com"},
                new Employee{Id = 49,Name="kranthi",State="Telangana",Email="kranthi@gmail.com"},
                new Employee{Id = 50,Name="kumar",State="Telangana",Email="kumar.123@gmail.com"},
                new Employee{Id = 51,Name="Imran",State="Telangana",Email="Imran@gmail.com"},
                new Employee{Id = 52,Name="Asif",State="Telangana",Email="Asif@gmail.com"},
                new Employee{Id = 53,Name="venkat",State="Telangana",Email="venkat@gmail.com"},
                new Employee{Id = 54,Name="raju",State="Telangana",Email="raju.123@gmail.com"},
                new Employee{Id = 55,Name="arjun",State="Telangana",Email="arjun@gmail.com"},
                new Employee{Id = 56,Name="ram",State="Telangana",Email="ram@gmail.com"},
                new Employee{Id = 57,Name="pawan",State="Telangana",Email="pawan.123@gmail.com"},
                new Employee{Id = 58,Name="satya",State="Telangana",Email="satya@gmail.com"},
                new Employee{Id = 59,Name="sunil",State="Telangana",Email="sunil@gmail.com"},
                new Employee{Id = 60,Name="sunil",State="Telangana",Email="sunil@gmail.com"},
                new Employee{Id = 61,Name="harish",State="Telangana",Email="harish.123@gmail.com"},
                new Employee{Id = 62,Name="vijaykumar",State="AndhraPradesh",Email="vijaykumar@gmail.com"},
                new Employee{Id = 63,Name="ramesh",State="Andhra",Email="ramesh@gmail.com"},
                new Employee{Id = 64,Name="sumpreeth",State="Telangana",Email="sumpreeth@gmail.com"},
                new Employee{Id = 65,Name="srujan",State="Maharashtra",Email="srujan.123@gmail.com"},
                new Employee{Id = 66,Name="mukesh",State="Telangana",Email="mukesh.123@gmail.com"},
                new Employee{Id = 67,Name="rajesh",State="Telangana",Email="rajesh.123@gmail.com"},
                new Employee{Id = 68,Name="karthik",State="Maharashtra",Email="karthik.123@gmail.com"},
                new Employee{Id = 69,Name="kranthi",State="Telangana",Email="kranthi@gmail.com"},
                new Employee{Id = 70,Name="kumar",State="Maharashtra",Email="kumar.123@gmail.com"},
                new Employee{Id = 71,Name="Imran",State="Telangana",Email="Imran@gmail.com"},
                new Employee{Id = 72,Name="Asif",State="Telangana",Email="Asif@gmail.com"},
                new Employee{Id = 73,Name="venkat",State="TamilNadu",Email="venkat@gmail.com"},
                new Employee{Id = 74,Name="raju",State="Telangana",Email="raju.123@gmail.com"},
                new Employee{Id = 75,Name="arjun",State="Telangana",Email="arjun@gmail.com"},
                new Employee{Id = 76,Name="ram",State="Telangana",Email="ram@gmail.com"},
                new Employee{Id = 77,Name="pawan",State="TamilNadu",Email="pawan.123@gmail.com"},
                new Employee{Id = 78,Name="satya",State="Telangana",Email="satya@gmail.com"},
                new Employee{Id = 79,Name="sunil",State="TamilNadu",Email="sunil@gmail.com"},
                new Employee{Id = 80,Name="sunil",State="Telangana",Email="sunil@gmail.com"}
            };
            return employeeList;
        }

	}
}