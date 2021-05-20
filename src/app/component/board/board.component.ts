import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/board/Post';
import { BoardService } from 'src/app/service/rest-api/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  posts: Post[] = [];
  headerColumns: string[] = ['postId', 'title', 'author', 'modifiedAt'];

  constructor(private boardService: BoardService) { }

  ngOnInit() {
    this.posts = this.boardService.getPosts();
  }
}