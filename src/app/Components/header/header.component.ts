import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../Core/Services/login/authorization';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private authService: AuthenticationService) { }
  menuItems: MenuItem[];
  activateItem: MenuItem;
  currentUser = this.authService.currentUserValue;
  ngOnInit() {
    this.menuItems = [
      {label: 'Главная', icon: 'fa fa-fw fa-home' ,  command: event => this.router.navigate(['home'])},
      {label: 'Таблица паспортов', icon: 'fa fa-fw fa-book', command: event => this.router.navigate(['passports'])},
      {label: 'Выход', icon: 'fa fa-sign-out', command: event => this.logout() }
    ];
    this.activateItem = this.menuItems[0];
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['login']);
  }

}
