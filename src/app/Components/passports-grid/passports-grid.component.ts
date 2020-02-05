import { Component, OnInit } from '@angular/core';
import {PassportForGrid} from '../../Core/Models/Passports/passportForGrid.model';
import {PassportsService} from '../../Core/Services/Data/passports.service';

@Component({
  selector: 'app-passports-grid',
  templateUrl: './passports-grid.component.html',
  styleUrls: ['./passports-grid.component.css']
})
export class PassportsGridComponent implements OnInit {
  passports: PassportForGrid;
  constructor(private passportService: PassportsService ) { }


  ngOnInit() {
    this.passportService.getDataForGrid().subscribe(response => {
      this.passports = response;
    }, error => console.log(error));
  }
}
