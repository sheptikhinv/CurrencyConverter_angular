import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ng2-cookies';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token : string;

  public authForm : FormGroup = new FormGroup({
    username : new FormControl("", Validators.required),
    password : new FormControl("", Validators.required)
  });

  login(form : FormGroup){
    this.authService.login(form.value).subscribe((r)=>{
      this.token = r.toString();
      if (this.token != null){
        this.cookieService.set("token", this.token);
        this.router.navigate(['profile'])
      }
    });
  }

  constructor(private authService : AuthService, private router : Router, private cookieService : CookieService) { }

  ngOnInit(): void {
  }

}
