import {Routes} from '@angular/router';
import {LoginComponent} from './app/Components/login/login.component';
import {PassportsGridComponent} from './app/Components/passports-grid/passports-grid.component';
import {AuthGuard} from './app/Core/Services/login/auth-guard.service';

export const appRoutes: Routes = [
  {path: '', component: PassportsGridComponent},
  {path: 'login', component: LoginComponent},
  {path: 'passports', component: PassportsGridComponent}
]
