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
  currentUser: boolean;
  
  constructor(private authService: LoginModule,
              private router: Router) {
  }

  

  public ContextMenu(event) {
    console.log(event);
  }
  ngOnInit() {
    if(localStorage.getItem('currentUser')){
      this.currentUser = true;
    } else this.currentUser=false;
    console.log(this.currentUser);
  }
  
}
