import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MyinfoService } from 'src/app/service/rest-api/myinfo.service';
import { SignService } from 'src/app/service/rest-api/sign.service';
import { BoardService } from 'src/app/service/rest-api/board.service'; 

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {

  postForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private myinfoService: MyinfoService,
    private signService: SignService,
    private boardService: BoardService
  ) {
    this.postForm = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required])
    });
  }

  get f(){
    return this.postForm.controls;
  }

  submit(){
    if(this.signService.isSignIn() && this.postForm.valid){
      let user = this.myinfoService.getUser();
      if(this.boardService.addPost(this.postForm.value.title, this.postForm.value.content, user)){
        this.router.navigate(['/board/']);
      }
      else{
        alert("글 추가중 오류가 발생했습니다.")
      }
    }
    else{
      alert("글 추가중 오류가 발생했습니다.")
    }
  }

  ngOnInit(): void {
  }

}
