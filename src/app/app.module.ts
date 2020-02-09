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
import {ButtonModule, ChipsModule, ContextMenuModule, DialogModule, MegaMenuModule, TableModule} from 'primeng';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {AuthGuard} from './Core/Services/login/auth-guard.service';
import {appRoutingModule} from '../routes';
import {TabMenuModule} from 'primeng';
import { HomeComponent } from './Components/home/home.component';
import { ReactiveFormsModule} from '@angular/forms';
import {JwtInterceptor} from './Core/Services/login/jwt-interceptor';
import { PassportComponent } from './Components/passport/passport.component';

export function tokenGetter() {
    return localStorage.getItem('jwt');
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PassportsGridComponent,
    LoginComponent,
    HomeComponent,
    PassportComponent,
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
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ['http://localhost:5000', 'https://localhost:5001'],
        blacklistedRoutes: []
      }
    }),
    appRoutingModule,
    MegaMenuModule,
    TabMenuModule,
    ReactiveFormsModule,
    ContextMenuModule,
    ChipsModule,
  ],
  providers: [HttpClient, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
