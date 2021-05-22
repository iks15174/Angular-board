import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/board/Post';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from 'src/app/service/rest-api/board.service';
import { MyinfoService } from 'src/app/service/rest-api/myinfo.service';
import { SignService } from 'src/app/service/rest-api/sign.service';
import { User } from 'src/app/model/myinfo/User';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  postId: number;
  post: Post;
  loginUser: User;

  constructor(
    private route: ActivatedRoute,
    private boardService: BoardService,
    private myinfoService: MyinfoService,
    public signService: SignService,
  ) { 
    this.postId = Number(this.route.snapshot.params['postId']);
  }

  ngOnInit(): void {
    this.post = this.boardService.viewPost(this.postId);
    if(this.signService.isSignIn()){
      this.loginUser = this.myinfoService.getUser();
    }
  }
}
