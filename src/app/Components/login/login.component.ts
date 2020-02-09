import { Component, OnInit } from '@angular/core';
import {Employee} from '../../Core/Models/Employee/employee.model';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {AuthenticationService} from '../../Core/Services/login/authorization';
import {MenuItem} from 'primeng';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  employee: Employee = new Employee();
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;


  constructor(private login: AuthenticationService,
              private router: Router,
              private  route: ActivatedRoute,
              private formBuilder: FormBuilder) {
    if (this.login.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      Login : ['', Validators.required],
      Password : ['', Validators.required]
    });



    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.login.login(this.f.Login.value, this.f.Password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        err => {
          this.loading = false;
        }
      );
  }

  // Context m
}
