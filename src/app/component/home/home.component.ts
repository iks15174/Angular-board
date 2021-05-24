import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/model/board/Post';
import { User } from 'src/app/model/myinfo/User';
import { UserlistService } from 'src/app/service/member/userlist.service';
import { BoardService } from 'src/app/service/rest-api/board.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  public userList: User[];
  public postList: Post[];

  constructor(
    private userListService: UserlistService,
    private boardService: BoardService,
  ) {
  }

  ngOnInit(): void {
    this.userList = this.userListService.userList;
    this.postList = this.boardService.postList;
  }

  addRandomUser(){
    this.userListService.addRandomUser();
    console.log("add Random User");
  }

  addRandomPost(){
    this.boardService.addRandomPost();
    console.log("add Random Post");
  }

}
