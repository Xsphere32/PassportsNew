export class PassportForGrid {
  id: number;
  hostName: string;
  inventaryNumber: string;
  employeeName: string;
  department: string;
  macAddress: string;
  ipAddress: string;
  room: string;

  constructor(id:number, hostname: string, invenaryNum: string, employeeName: string,
              department: string, macAddress: string, ipAddress: string, room: string) {
                this.id = id;
                this.hostName = hostname;
                this.inventaryNumber = invenaryNum;
                this.employeeName = employeeName;
                this.department = department; 
                this.macAddress = macAddress;
                this.ipAddress = ipAddress;
                this.room = room;
              }
}
