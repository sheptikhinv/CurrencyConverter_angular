import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { GetValutesService } from '../get-valutes.service';


@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css'],
  providers: [GetValutesService]
})
export class ConverterComponent implements OnInit {

  input1: number = 0;
  input2: number = 0;
  coeffiency: number = 1;

  currency1: string = '';
  currency2: string = '';

  array: any;

  allValutes : any[][] = this.getvalutes.getValutes();
  valutesCode : string[] = this.allValutes[0];
  valutesValue : number[] = this.allValutes[1];

  keyUp1() {
    this.input2 = this.input1 * this.coeffiency;
  }

  keyUp2() {
    this.input1 = this.input2 / this.coeffiency;
  }

  onOptionChange() {
    if (this.currency1 != "Валюта" && this.currency2 != "Валюта") {
      this.coeffiency = Number((this.valutesValue[this.valutesCode.indexOf(this.currency1)] / this.valutesValue[this.valutesCode.indexOf(this.currency2)]).toFixed(2));
    }
  }

  constructor(private getvalutes: GetValutesService) { }

  ngOnInit(): void {

  }

}
