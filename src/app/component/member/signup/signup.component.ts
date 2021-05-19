import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { SignService } from "src/app/service/rest-api/sign.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private signService: SignService
  ) { 
    this.signUpForm = this.formBuilder.group({
      id: new FormControl("", Validators.compose([
        Validators.required,
        Validators.email
      ])),
      password: new FormControl("", [Validators.required]),
      password_re: new FormControl("", [Validators.required]),
      name: new FormControl("", [Validators.required])
    }, { Validator: this.checkPassword});
  }

  checkPassword(group: FormGroup){
    let password = group.controls.password.value;
    let passwordRe = group.controls.password_re.value;
    return password === '' || passwordRe === '' || password===passwordRe ? null : { notSame : true}
  }

  get f() {
    return this.signUpForm.controls;
  }
  submit(){
    if(this.signUpForm.valid){
      if(this.signService.signUp(this.signUpForm.value.id, this.signUpForm.value.password, this.signUpForm.value.name)){
        if(this.signService.singIn(this.signUpForm.value.id, this.signUpForm.value.password)){
          this.router.navigate(['/']);
        }
        else{
          console.log("signUp Component : 로그인 실패");
        }
      }
      else{
        console.log("signUp Component : 회원가입 실패");
      }
    }
  }

  ngOnInit(): void {
  }

}
