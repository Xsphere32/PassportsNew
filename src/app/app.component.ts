import {Component, OnInit} from '@angular/core';
import { Employee } from './Core/Models/Employee/employee.model';
import { LoginModule } from './Core/Services/login/login.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentUser: Employee;
  
  constructor(private authService: LoginModule,
              private router: Router) {
    this.authService.user.subscribe((x=> this.currentUser = x));
  }

  

  public ContextMenu(event) {
    console.log(event);
  }
  ngOnInit() {
  }
}
