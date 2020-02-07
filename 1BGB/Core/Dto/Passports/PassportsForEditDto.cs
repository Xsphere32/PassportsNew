using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Dto
{
    public class PassportsForEditDto : BaseDto
    {
        public string Person { get; set; }
        public string Room { get; set; }
        public string Model { get; set; }
        public string SerialNumber { get; set; }
        public string InventoryNumber { get; set; }
        public string PlombNumber { get; set; }
        public string USBPlombNumber { get; set; }
        public string CD { get; set; }
        public string HostName { get; set; }
        public string MacAddress { get; set; }
        public string IPAddress { get; set; }
        public string LocalPrinter { get; set; }
        public string SharedPrinter { get; set; }
        public string NetworkPrinter { get; set; }
        public string Modem { get; set; }
        public string Etc { get; set; }
        public string OS { get; set; }
        public string Soft { get; set; }
        public EmployeeDto Employee { get; set; }
    }
}
