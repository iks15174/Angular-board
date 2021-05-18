import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { SignService } from "src/app/service/rest-api/sign.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signInForm: FormGroup; 

  constructor(private signService: SignService) {
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
    if(this.signInForm.valid){
      if(this.signService.singIn(this.signInForm.value.id, this.signInForm.value.password)){
        alert("로그인 성공");
      }
      else{
        alert("로그인 실패");
      }
    }
  }
}
