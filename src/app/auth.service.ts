import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

  header = {"Host" : "localhost:4200",
            "Content-Type" : "application/JSON",
            "Connection" : "keep-alive"
  }

  public register(data : String) : Observable<Boolean>{
    var subject = new Subject<Boolean>();
    this.http.post('http://127.0.0.1:8000/auth/users/', data, {headers : this.header}).subscribe(answer => {
      let data1 : any = answer;
      if (data1.id != null) subject.next(true);
      else subject.next(false);
    })
    return subject.asObservable();
  }


  public login(data : String) : Observable<String>{
    let token : String;
    var subject = new Subject<String>();
    this.http.post('http://127.0.0.1:8000/auth/token/login/', data, {headers : this.header}).subscribe(answer => {
      let data1 : any;
      data1 = answer;
      token = data1["auth_token" as keyof String];
      console.log(token);
      subject.next(token);
    });
    return subject.asObservable();
    }

    public exit(token : string){
      let header = {"Host" : "localhost:4200",
      "Content-Type" : "text/plain",
      "Connection" : "keep-alive",
      "Authorization" : "Token " + token
      }

      console.log(token);
      this.http.post('http://127.0.0.1:8000/auth/token/logout', token, {headers : header}).subscribe(answer => console.log(answer))
    }
}

// ПОКА ЧТО НЕ РЕАЛИЗОВАНО ДО КОНЦА