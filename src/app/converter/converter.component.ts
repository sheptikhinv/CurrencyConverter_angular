import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  
  //client = new CurrencyClient();

  input1 : number = 0;
  input2 : number = 0;
  coeffiency : number = 2;

  currency1: string = '';
  currency2: string = '';

  options = [
    { name: "RUB", value: 1 },
    { name: "USD", value: 2 },
    { name: "EUR", value: 3 },
    { name: "JPY", value: 4 },
    { name: "CNY", value: 5 }
  ]

  keyUp1(){
    this.input2 = this.input1 * this.coeffiency;
  }

  keyUp2(){
    this.input1 = this.input2 / 2;
  }

  onOptionChange(){
    if (this.currency1 != "Валюта" && this.currency2 != "Валюта"){
      //this.client.toCurrency(this.currency1.toLowerCase(), this.currency2.toLowerCase()).then((rate) => this.coeffiency = rate.count)
    }
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
