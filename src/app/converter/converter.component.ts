import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';



@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {
  
  input1 : number = 0;
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
