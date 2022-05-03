import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ng2-cookies';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [AuthService, CookieService]
})
export class ProfileComponent implements OnInit {

  token : string;

  public authForm : FormGroup = new FormGroup({
    username : new FormControl("", Validators.required),
    password : new FormControl("", Validators.required)
  });

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

  authState : String;

  constructor(private cookieService: CookieService, private authService : AuthService) { }

  ngOnInit(): void {
    if (this.cookieService.check("token")){
      this.authState = "authenticated";
      this.token = this.cookieService.get("token");
    }
    else this.authState = "registration";
  }

}
