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

  public getValutes() : Map<any, any>{
    // var result : any[][] = [["RUB"], [1]];
    var result2 = new Map()
    result2.set("RUB", 1)
    this.get().subscribe(answer =>{
      let data : any;
      data = answer;
      // let i = 1;
      for (let v in data.Valute){
        result2.set(v, data.Valute[v].Value / data.Valute[v].Nominal)
        // result[0][i] = v;
        // result[1][i] = data.Valute[v].Value / data.Valute[v].Nominal;
        // i = i + 1;
      }
    })
    return result2;
  }
}
