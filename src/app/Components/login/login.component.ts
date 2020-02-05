import { Component, OnInit } from '@angular/core';
import {Employee} from '../../Core/Models/Employee/employee.model';
import {LoginModule} from '../../Core/Services/login/login.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  employee: Employee = new Employee();
  constructor(private login: LoginModule) { }

  ngOnInit() {
  }

  Authorize() {
    this.login.Authorize(this.employee.Login, this.employee.Password);
  }

}
