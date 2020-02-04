using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Core.Models
{
    public class Passport : BaseModel
    {

        public string Person { get; set; }
        public string Room { get; set; }
        public string Model { get; set; }
        public string SerialNumber { get; set; }
        [Column("InventaryNumber")]
        public string InventaryNumber { get; set; }
        public string PlombNumber { get; set; }
        public string USBPlombNumber { get; set; }
        public string CD { get; set; }
        public string HostName { get; set; }
        public string MacAddress { get; set; }
        public string IPAddress { get; set; }
        public int LocalPrinter { get; set; }
        public int SharedPrinter { get; set; }
        public int NetworkPrinter { get; set; }
        public int Modem { get; set; }
        public string Etc { get; set; }
        public string OS { get; set; }
        public string Soft { get; set; }
        public virtual Employee Employee { get; set; }
        public virtual Department Department { get; set; }
        
    }
}
