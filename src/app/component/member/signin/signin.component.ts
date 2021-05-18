import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signInForm: FormGroup; 

  constructor() {
    this.signInForm = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  get id(){
    return this.signInForm.get('id');
  }

  get password(){
    return this.signInForm.get('password');
  }

  submit(){
    
  }
}
