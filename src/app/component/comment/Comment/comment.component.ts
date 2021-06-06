import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { Comment } from 'src/app/model/board/Comment';
import { User } from 'src/app/model/myinfo/User';
import { CommentService } from 'src/app/service/rest-api/comment.service';
import { MyinfoService } from 'src/app/service/rest-api/myinfo.service';
import { SignService } from 'src/app/service/rest-api/sign.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  public postId_: number;
  public loginUser: User;

  @Input()
  set postId(value: number) {
    if (value != null) {
      this.postId_ = value;
    }
    else {
      this.postId_ = -1;
    }
  }

  comments$: Observable<Comment[]>;
  constructor(
    private commentService: CommentService,
    public signService: SignService,
    private myinfoService: MyinfoService
  ) {
    this.postId_ = -1;
  }

  ngOnInit(): void {
    if (this.signService.isSignIn()) {
      this.loginUser = this.myinfoService.getUser();
    }
    this.commentService.getCmt(this.postId_);
    this.comments$ = this.commentService.cmtList$;
  }

  delete(cmtId: number) {
    if (this.signService.isSignIn()) {
      this.commentService.deleteCmt(this.postId_, cmtId, this.loginUser)
    }
  }
}
