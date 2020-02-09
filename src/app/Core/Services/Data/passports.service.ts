import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PassportForGrid} from '../../Models/Passports/passportForGrid.model';
import { Passport } from '../../Models/Passports/passport.model';

@Injectable({
  providedIn: 'root'
})
export class PassportsService {

  constructor(private http: HttpClient) { }

  public getDataForGrid() {
    return this.http.get<PassportForGrid[]>('https://localhost:5001/api/passports/');
  }

  public getDataForEdit(id: number) {
    return this.http.get<Passport>(`https://localhost:5001/api/passports/getPassportById/${id}`);
  }

  public postData(passport: Passport) {
    return this.http.post('https://localhost:5001/api/passports/', passport);
  }

}

