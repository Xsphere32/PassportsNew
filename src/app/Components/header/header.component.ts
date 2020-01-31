import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng';
import {Router} from '@angular/router';
import {LoginModule} from '../../Core/Services/login/login.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private authModule: LoginModule) { }
  menuItems: MenuItem[]
  ngOnInit() {
    this.menuItems = [
      {label: 'Главная', command: event => this.router.navigate(['login'])},
      {label: 'Таблица паспортов', command: event => this.router.navigate(['passports'])},
      {label: 'Выход', icon: 'fa fa-sign-out', command: event => this.authModule.Logout() }
    ];
  }

}
