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
    var result = new Map()
    result.set("RUB", 1)
    this.get().subscribe(answer =>{
      let data : any;
      data = answer;
      for (let v in data.Valute){
        result.set(v, data.Valute[v].Value / data.Valute[v].Nominal)
      }
    })
    return result;
  }
}
