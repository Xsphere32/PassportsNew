import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Employee} from '../../Models/Employee/employee.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class LoginModule {
  private invalidLogin: boolean;
  currentUserSubject: BehaviorSubject<Employee>;
  user: Observable<Employee>;
  employee: Employee = new Employee();

  constructor(private http: HttpClient,
              private router: Router) {
                this.currentUserSubject = new BehaviorSubject<Employee>(JSON.parse(localStorage.getItem('currentUser')));
                this.user = this.currentUserSubject.asObservable();
              }


  public get currentUserValue() : Employee{
      return this.currentUserSubject.value;
  }

  public Authorize(login: string, password: string) {
    this.http.post<any>('https://localhost:5001/api/auth/login/', {login, password})
    .pipe(map(user => {
      if(user && user.token){
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
      }
      return user;
    })) 
  }

  public Logout() {
    localStorage.removeItem('currentUser');
  }
}
