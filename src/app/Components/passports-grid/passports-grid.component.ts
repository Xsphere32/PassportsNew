import { Component, OnInit } from '@angular/core';
import {PassportForGrid} from '../../Core/Models/Passports/passportForGrid.model';
import {PassportsService} from '../../Core/Services/Data/passports.service';
import {MenuItem} from 'primeng';
import {Router} from '@angular/router';

@Component({
  selector: 'app-passports-grid',
  templateUrl: './passports-grid.component.html',
  styleUrls: ['./passports-grid.component.css']
})
export class PassportsGridComponent implements OnInit {
  passports: PassportForGrid[];
  items: MenuItem[]; // Пункты контекстного меню
  selectedPassport: PassportForGrid;
  constructor(private passportService: PassportsService,
              private router: Router) { }


  ngOnInit() {
    this.items = [
      {label: 'Открыть/редактировать', icon: 'pi pi-pencil', command: (event) => {
        this.router.navigate([`/editPassport/${this.selectedPassport.id}`]);
        }},
    ];
    this.passportService.getDataForGrid().subscribe(x => this.passports = x);
  }
}
