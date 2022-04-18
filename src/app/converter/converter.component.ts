import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Valutes } from '../valutes';
import { GetValutesService } from '../get-valutes.service';


@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
  providers: [GetValutesService]
})
export class ConverterComponent implements OnInit {

  input1 : number = 0;
  input2 : number = 0;
  coeffiency : number = 1;

  currency1: string = '';
  currency2: string = '';
  valutes : Valutes;

  array : any;

  options = ["RUB", "USD", "EUR", "JPY", "CNY"]

  keyUp1(){
    this.input2 = this.input1 * this.coeffiency;
    console.warn(this.coeffiency);
  }

  keyUp2(){
    this.input1 = this.input2 / this.coeffiency;
    console.warn(this.coeffiency);
  }

  onOptionChange(){
    if (this.currency1 != "Валюта" && this.currency2 != "Валюта"){
      this.coeffiency = Number((this.valutes.getValue(this.currency1) / this.valutes.getValue(this.currency2)).toFixed(2));
      console.warn(this.valutes.getValue(this.currency1), this.valutes.getValue(this.currency2));
    }
  }

  constructor(private getvalutes: GetValutesService) { }

  ngOnInit(): void {
    this.getvalutes.get().subscribe(data =>{
      this.array = data;

      this.valutes = new Valutes(1, this.array.Valute.USD.Value, this.array.Valute.EUR.Value, this.array.Valute.JPY.Value, this.array.Valute.CNY.Value);
    })
  }

}
