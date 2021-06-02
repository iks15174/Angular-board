import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { Comment } from 'src/app/model/board/Comment';
import { CommentService } from 'src/app/service/rest-api/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  public postId_: number;

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
    private commentService: CommentService
  ) {
    this.postId_ = -1;
  }

  ngOnInit(): void {
    this.commentService.cmtModifiyedSignal.subscribe((sign) => {
      if (sign === "ADD") {
        this.getCmtObservable();
      }
    });
    this.getCmtObservable();
  }

  getCmtObservable() {
    this.comments$ = this.commentService.getCmt(this.postId_);
  }
}
