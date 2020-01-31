import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PassportForGrid} from '../../Models/Passports/passportForGrid.model';

@Injectable({
  providedIn: 'root'
})
export class PassportsService {

  constructor(private http: HttpClient) { }

  public getDataForGrid() {
    return this.http.get<PassportForGrid>('https://localhost:5001/api/passports/');
  }

  public getDataForEdit(id: number) {
    return this.http.get(`https://localhost:5001/api/passports/?id=${id}`);
  }

  public postData(passport: Passport) {
    return this.http.post('https://localhost:5001/api/passports/', passport);
  }

}

export interface Passport {
  model: string;
}
