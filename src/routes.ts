import {Routes} from '@angular/router';
import {LoginComponent} from './app/Components/login/login.component';
import {PassportsGridComponent} from './app/Components/passports-grid/passports-grid.component';
import {AuthGuard} from './app/Core/Services/login/auth-guard.service';
import { HomeComponent } from './app/Components/home/home.component';

export const appRoutes: Routes = [
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'passports', component: PassportsGridComponent, canActivate: [AuthGuard]}
]
