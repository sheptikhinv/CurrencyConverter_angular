import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ng2-cookies';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ExchangesService } from '../exchanges.service';
import { GetValutesService } from '../get-valutes.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [AuthService, CookieService, ExchangesService]
})
export class ProfileComponent implements OnInit {

  exchanges : string[][];
  exchanges1 : string[];
  exchanges2 : string[];
  input1: number = 0;
  input2: number = 0;
  token : string;
  authState : String;

  coeffiences : number[];

  valutes = this.getValutes.getValutes();
  inputs : Number[] = [];
  inputs2 : Number[] = [];

  public authForm : FormGroup = new FormGroup({
    username : new FormControl("", Validators.required),
    password : new FormControl("", Validators.required)
  });

  keyUp1(){
    for(let i = 0; i < this.inputs.length; i++){
      this.inputs2[i] = Number((Number(this.inputs[i]) * this.coeffiences[i]).toFixed(2));
    }
  }

  keyUp2(){
    for(let i = 0; i < this.inputs.length; i++){
      this.inputs[i] = Number((Number(this.inputs2[i]) / this.coeffiences[i]).toFixed(2));
    }
  }

  remove(event : Event){
    let elementId: number = Number((event.target as Element).id);
    this.exchangesService.delete(this.exchanges1[elementId], this.exchanges2[elementId], this.token);
    document.getElementById(elementId.toString()).remove();
  }

  register(form : FormGroup){
    let registerStatus : Boolean;
    this.authService.register(form.value).subscribe((r) => {
      registerStatus = r;
      if (registerStatus == true){
        this.login(form);
        this.authState = "authenticated";
      }
      else this.authState = "registrationFailed"
    });
  }

  exit(){
    this.authService.exit(this.cookieService.get("token"));
    this.cookieService.delete("token");
    this.authState = "registration"
  }

  login(form : FormGroup){
    this.authService.login(form.value).subscribe((r)=>{
      this.token = r.toString();
      if (this.token != null){
        this.cookieService.set("token", this.token);
        this.authState = "authenticated";
      }
      else this.authState = "authFailed"
    });
  }

  constructor(private exchangesService : ExchangesService, private cookieService: CookieService, private authService : AuthService, private getValutes : GetValutesService, private router:Router) { }

  ngOnInit(): void {
    
    if (this.cookieService.check("token")){
      this.authState = "authenticated";
      this.token = this.cookieService.get("token");
    }
    else this.authState = "registration";
    console.log(this.authState)

    if (this.authState = 'authenticated'){
      let exchanges = this.exchangesService.get(this.token).subscribe(r => {
        let data = r;
        this.exchanges1 = data[0];
        this.exchanges2 = data[1];
        let coeffiences = [];
        for(let j = 0; j < this.exchanges1.length; j++){
          coeffiences[j] = (Number((this.valutes.get(this.exchanges1[j]) / this.valutes.get(this.exchanges2[j])).toFixed(2)));
        }
        this.coeffiences = coeffiences;
      });
      
    }

  }
}
