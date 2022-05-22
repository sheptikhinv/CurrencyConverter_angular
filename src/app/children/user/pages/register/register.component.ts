import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public authForm : FormGroup = new FormGroup({
    username : new FormControl("", Validators.required),
    password : new FormControl("", Validators.required)
  });

  register(form : FormGroup){
    let registerStatus : Boolean;
    this.authService.register(form.value).subscribe(r => console.log(r));
    this.router.navigate(['profile/login'])
  }

  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit(): void {
  }

}
