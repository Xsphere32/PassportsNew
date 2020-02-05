import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Employee} from '../../Models/Employee/employee.model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ]
})
export class LoginModule {
  private invalidLogin: boolean;

  constructor(private http: HttpClient,
              private router: Router) {}


  public Authorize(employee: Employee) {
    const credentials = JSON.stringify(employee);
    this.http.post('https://localhost:5001/api/auth/login/', credentials, {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }).subscribe(response => {
      const token = (response as any).token;
      localStorage.setItem('jwt', token);
      this.invalidLogin = false;
      this.router.navigate(['passports']);
    }, error => {
      this.invalidLogin = true;
    });
  }

  public Logout() {
    localStorage.removeItem('jwt');
    this.router.navigate(['login']);
  }
}
