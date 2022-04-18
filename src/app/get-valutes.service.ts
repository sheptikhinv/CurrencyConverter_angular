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
}
