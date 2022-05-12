import { Component, OnInit } from '@angular/core';
import { GetValutesService } from '../get-valutes.service';
import { CookieService } from 'ng2-cookies';
import { ExchangesService } from '../exchanges.service';


@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
  providers: [GetValutesService, ExchangesService]
})
export class ConverterComponent implements OnInit {

  authState : String;
  token : string;

  input1: number = 0;
  input2: number = 0;
  coeffiency: number = 1;

  currency1: string = '';
  currency2: string = '';

  valutes : Map<any, any>;

  keyUp1() {
    this.input2 = this.input1 * this.coeffiency;
    console.warn(this.coeffiency);
  }

  keyUp2() {
    this.input1 = this.input2 / this.coeffiency;
    console.warn(this.coeffiency);
  }

  onOptionChange() {
    if (this.currency1 != "Валюта" && this.currency2 != "Валюта") {
      this.coeffiency = Number((this.valutes.get(this.currency1) / this.valutes.get(this.currency2)).toFixed(2));
    }
  }

  toFavourite(currency1 : String, currency2 : String, token : String){
    this.exchangesService.post(currency1, currency2, token);
  }

  constructor(private getvalutes: GetValutesService, private cookieService : CookieService, private exchangesService : ExchangesService) { }

  ngOnInit(): void {
    this.valutes = this.getvalutes.getValutes();
    if (this.cookieService.check("token")){
      this.authState = "authenticated";
      this.token = this.cookieService.get("token");
    }
    else this.authState = "none";
  }

}
