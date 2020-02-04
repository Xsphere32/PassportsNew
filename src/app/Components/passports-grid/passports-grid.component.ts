import { Component, OnInit } from '@angular/core';
import {PassportForGrid} from '../../Core/Models/Passports/passportForGrid.model';
import {PassportsService} from '../../Core/Services/Data/passports.service';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-passports-grid',
  templateUrl: './passports-grid.component.html',
  styleUrls: ['./passports-grid.component.css']
})
export class PassportsGridComponent implements OnInit {
  passports: PassportForGrid[];
  constructor(private passportService: PassportsService ) { }


  ngOnInit() {
    this.passports = [
      new PassportForGrid(1,"localhost","asu-0001", "Listopadov", "Pulmonology", "00-00-00-00-00", "192.168.0.1", "Кабинет зав. отделением"),
      new PassportForGrid(1,"localhost","asu-0002", "Listopadov", "Pulmonology", "00-00-00-00-00", "192.168.0.2", "Ординаторская"),
      new PassportForGrid(1,"localhost","asu-0003", "Listopadov", "Pulmonology", "00-00-00-00-00", "192.168.0.3", "Ординаторская"),
      new PassportForGrid(1,"localhost","asu-0004", "Listopadov", "Pulmonology", "00-00-00-00-00", "192.168.0.4", "Ординаторская"),
      new PassportForGrid(1,"localhost","asu-0005", "Listopadov", "Pulmonology", "00-00-00-00-00", "192.168.0.5", "Ординаторская"),
      new PassportForGrid(1,"localhost","asu-0006", "Listopadov", "Pulmonology", "00-00-00-00-00", "192.168.0.6", "Ординаторская"),
      new PassportForGrid(1,"localhost","asu-0007", "Listopadov", "Pulmonology", "00-00-00-00-00", "192.168.0.7", "Ординаторская"),
      new PassportForGrid(1,"localhost","asu-0008", "Listopadov", "Pulmonology", "00-00-00-00-00", "192.168.0.8", "Пост"),
      new PassportForGrid(1,"localhost","asu-0009", "Listopadov", "Pulmonology", "00-00-00-00-00", "192.168.0.9", "Старшая медсестра")
      
    ]
  }
}
