import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/board/Post';
import { Router, ActivatedRoute } from '@angular/router';
import { BoardService } from 'src/app/service/rest-api/board.service';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  postId: number;
  post: Post;

  constructor(
    private route: ActivatedRoute,
    private boardService: BoardService,
  ) { 
    this.postId = Number(this.route.snapshot.params['postId']);
  }

  ngOnInit(): void {
    let postGet = this.boardService.viewPost(this.postId)
    if(postGet.postId !== -1){
      this.post = postGet;
    }
  }
}
