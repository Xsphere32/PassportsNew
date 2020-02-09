import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {Passport} from '../../Core/Models/Passports/passport.model';
import {PassportsService} from '../../Core/Services/Data/passports.service';

@Component({
  selector: 'app-passport',
  templateUrl: './passport.component.html',
  styleUrls: ['./passport.component.css']
})
export class PassportComponent implements OnInit {

  id: number;
  subscription: Subscription;
  passport: Passport = new Passport();
  constructor(private activateRoute: ActivatedRoute,
              private service: PassportsService) {
    this.subscription = activateRoute.params.subscribe(params => this.id = params.id);
  }

  ngOnInit() {
    this.service.getDataForEdit(this.id).subscribe(x => this.passport = x);
  }

}
