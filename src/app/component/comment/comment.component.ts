import { Component, Input, OnInit } from '@angular/core';
import { number } from 'echarts';
import { Comment } from 'src/app/model/board/Comment';
import { CommentService } from 'src/app/service/rest-api/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

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

  comments: Comment[];
  constructor(
    private commentService: CommentService
  ) { 
  }

  ngOnInit(): void {
    this.comments = this.commentService.getCmt(this.postId_);
  }

}
