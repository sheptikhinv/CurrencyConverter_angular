import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { User } from '../models/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [AuthService]
})
export class RegistrationComponent implements OnInit {

  public registrationForm : FormGroup = new FormGroup({
    username : new FormControl("", Validators.required),
    password : new FormControl("", Validators.required),
    //email : new FormControl("", [Validators.required, Validators.email])
  });

  public onSumbit() {
    console.log(this.registrationForm.value);
    console.log(this.auth.register(this.registrationForm.value));
  }

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }

}
