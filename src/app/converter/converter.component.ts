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

  secret : any[][] = this.getvalutes.getValutes();
  secret2 : string[] = this.secret[0];
  secret3 : number[] = this.secret[1];

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
      this.coeffiency = Number((this.secret3[this.secret2.indexOf(this.currency1)] / this.secret3[this.secret2.indexOf(this.currency2)]).toFixed(2));
    }
  }

  constructor(private getvalutes: GetValutesService) { }

  ngOnInit(): void {

  }

}
