import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Components/header/header.component';
import { PassportsGridComponent } from './Components/passports-grid/passports-grid.component';
import { LoginComponent } from './Components/login/login.component';
import { FormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';

// NgModules
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule, DialogModule, MegaMenuModule, TableModule} from 'primeng';
import {LoginModule} from './Core/Services/login/login.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AuthGuard} from './Core/Services/login/auth-guard.service';
import {appRoutes} from '../routes';

export function tokenGetter() {
    return localStorage.getItem('jwt');
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PassportsGridComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    ButtonModule,
    DialogModule,
    InputTextModule,
    FormsModule,
    ButtonModule,
    LoginModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ['http://localhost:5000'],
        blacklistedRoutes: []
      }
    }),
    RouterModule.forRoot(appRoutes),
    MegaMenuModule
  ],
  providers: [HttpClient, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
