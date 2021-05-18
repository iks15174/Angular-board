import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { SignService } from "src/app/service/rest-api/sign.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  redirectTo: string;
  signInForm: FormGroup; 

  constructor(private signService: SignService,
    private router: Router,
    private route: ActivatedRoute) {
    this.signInForm = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
    this.redirectTo = "/";
  }

  ngOnInit(): void { 
    this.route.queryParams.subscribe(params => {
      this.redirectTo = params['redirectTo'];
    });
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
        this.router.navigate([this.redirectTo ? this.redirectTo : '/']);
      }
      else{
        alert("로그인 실패");
      }
    }
  }
}
