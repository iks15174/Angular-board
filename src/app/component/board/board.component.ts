import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/board/Post';
import { BoardService } from 'src/app/service/rest-api/board.service';
import { MyinfoService } from 'src/app/service/rest-api/myinfo.service';
import { SignService } from 'src/app/service/rest-api/sign.service';
import { User } from 'src/app/model/myinfo/User';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  posts: Post[] = [];
  headerColumns: string[] = ['postId', 'title', 'author', 'modifiedAt'];
  loginUser: User;

  constructor(private boardService: BoardService,
    public signService: SignService,
    private myinfoService: MyinfoService
    ) { }

  ngOnInit() {
    this.posts = this.boardService.getPosts();
    if(this.signService.isSignIn()){
      this.loginUser = this.myinfoService.getUser();
    }
  }

  delete(postId: number){
    if(confirm('정말 삭제하겠습니까?') && this.signService.isSignIn()){
      if(this.boardService.deletePost(postId, this.loginUser)){
        window.location.reload();
      }
      else{
        alert('삭제 실패');
      }
    }
  }
}