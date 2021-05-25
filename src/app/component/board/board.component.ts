import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/board/Post';
import { BoardService } from 'src/app/service/rest-api/board.service';
import { MyinfoService } from 'src/app/service/rest-api/myinfo.service';
import { SignService } from 'src/app/service/rest-api/sign.service';
import { User } from 'src/app/model/myinfo/User';
import { Pagination } from 'src/app/model/board/Pagination';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  posts: Post[] = [];
  headerColumns: string[] = ['postId', 'title', 'author', 'modifiedAt'];
  loginUser: User;
  pagination: Pagination = {} as Pagination;

  constructor(private boardService: BoardService,
    public signService: SignService,
    private myinfoService: MyinfoService
    ) { }

  ngOnInit() {
    this.pagination.length = this.boardService.postList.length;
    this.pagination.pageSize = 10;
    this.pagination.hidePageSize = true;
    this.posts = this.boardService.getPosts(0, this.pagination.pageSize - 1);
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

  movePage(event: PageEvent){
    let index = event.pageIndex;
    let start = index * this.pagination.pageSize;
    let end = start + this.pagination.pageSize - 1;
    this.posts = this.boardService.getPosts(start, end);
  }
}