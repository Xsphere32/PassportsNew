import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from '../../Models/Employee/employee.model';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<Employee>;
  public currentUser: Observable<Employee>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<Employee>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): Employee {
    return this.currentUserSubject.value;
  }

  login(login: string, password: string) {
    const credentials = JSON.stringify({login, password});
    return this.http.post<any>(`https://localhost:5001/api/auth/login`,
      credentials,
      {headers: new HttpHeaders({'Content-Type': 'application/json'})})
      .pipe(map(user => {
        // login successful if there's a jwt token in the response
        if (user) {
          console.log(user);
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
        }

        return user;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
