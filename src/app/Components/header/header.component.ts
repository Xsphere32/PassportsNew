import { Component, OnInit } from '@angular/core';
import {TabMenuModule} from 'primeng';
import { MenuItem } from 'primeng/api';
import {Router} from '@angular/router';
import {LoginModule} from '../../Core/Services/login/login.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private authService: LoginModule) { }
  menuItems: MenuItem[];
  activateItem: MenuItem;
  ngOnInit() {
    this.menuItems = [
      {label: 'Главная', icon: 'fa fa-fw fa-home' ,  command: event => this.router.navigate(['login'])},
      {label: 'Таблица паспортов', icon: 'fa fa-fw fa-book', command: event => this.router.navigate(['passports'])},
      {label: 'Выход', icon: 'fa fa-sign-out', command: event => this.logout() }
    ];
    this.activateItem =this.menuItems[1];
  }

  logout(){
    this.authService.Logout();
    this.router.navigate(['login'])
  }

}
