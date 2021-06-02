import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CommentService } from 'src/app/service/rest-api/comment.service';
import { MyinfoService } from 'src/app/service/rest-api/myinfo.service';
import { SignService } from 'src/app/service/rest-api/sign.service';

@Component({
  selector: 'app-addcomment',
  templateUrl: './addcomment.component.html',
  styleUrls: ['./addcomment.component.css']
})
export class AddcommentComponent implements OnInit {

  postId_: number

  @Input()
  set postId(value: number){
    if(value != null){
      this.postId_ = value;
    }
    else{
      this.postId_ = -1;
    }
  }

  cmtForm: FormGroup;

  constructor(private commentService: CommentService,
    private myinfoService: MyinfoService,
    private formBuilder: FormBuilder,
    private signService: SignService,
  ) {
    this.cmtForm = this.formBuilder.group({
      content: new FormControl('', [Validators.required])
    });
  }

  get f(){
    return this.cmtForm.controls;
  }

  submit(){
    if(this.signService.isSignIn() && this.cmtForm.valid){
      let userId = this.myinfoService.getUser().id;
      this.commentService.addCmt(userId, this.postId_, this.cmtForm.value.content);
      this.cmtForm.controls['content'].setValue("");
    }
    else{
      alert("로그인이 필요하거나 한 글자 이상 댓글을 써야합니다.");
    }
  }

  ngOnInit(): void {
  }

}
