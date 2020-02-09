import {Component, OnInit} from '@angular/core';
import { Employee } from './Core/Models/Employee/employee.model';
import { Router } from '@angular/router';
import {AuthenticationService} from './Core/Services/login/authorization';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentUser: Employee;

  constructor(private authService: AuthenticationService,
              private router: Router) {
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }



  public ContextMenu(event) {
    console.log(event);
  }
  ngOnInit() {
  }

}
