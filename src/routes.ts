import { Routes, RouterModule } from '@angular/router';

import {PassportsGridComponent} from './app/Components/passports-grid/passports-grid.component';
import {HomeComponent} from './app/Components/home/home.component';
import {LoginComponent} from './app/Components/login/login.component';
import {AuthGuard} from './app/Core/Services/login/auth-guard.service';
import {PassportComponent} from './app/Components/passport/passport.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'passports', component: PassportsGridComponent },
  { path: 'editPassport/:id', component: PassportComponent},

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
