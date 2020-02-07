import { Component, OnInit } from '@angular/core';
import {Employee} from '../../Core/Models/Employee/employee.model';
import {LoginModule} from '../../Core/Services/login/login.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  employee: Employee = new Employee();
  constructor(private login: LoginModule, private router: Router) { }

  ngOnInit() {
  }

  Authorize() {
    console.log(this.employee);
    this.login.Authorize(this.employee.Login, this.employee.Password);
    this.router.navigate(['passports']);
  }

}
