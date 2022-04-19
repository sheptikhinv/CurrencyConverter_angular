import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetValutesService {

  constructor(private http : HttpClient) { }

  public get(){
    let url = "https://www.cbr-xml-daily.ru/daily_json.js";
    return this.http.get(url) ;
  }

  public getValutes() : any[][]{
    var result : any[][] = [["RUB"], [1]];
    this.get().subscribe(data =>{
      let array : any;
      array = data;
      let i = 1;
      for (let v in array.Valute){
        result[0][i] = v;
        result[1][i] = array.Valute[v].Value / array.Valute[v].Nominal;
        i = i + 1;
      }
    })
    return result;
  }
}
