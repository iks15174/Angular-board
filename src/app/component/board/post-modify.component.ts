import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/board/Post';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from 'src/app/service/rest-api/board.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-post-modify',
  templateUrl: './post-modify.component.html',
  styleUrls: ['./post-modify.component.css']
})
export class PostModifyComponent implements OnInit {

  postId: number;
  postForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private boardService: BoardService,
    private formBuilder: FormBuilder
  ) { 
    this.postId = Number(this.route.snapshot.params['postId']);
    let post = this.boardService.viewPost(this.postId);
    this.postForm = this.formBuilder.group({
      title: new FormControl(post.title, [Validators.required]),
      content: new FormControl(post.content, [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  get f(){
    return this.postForm.controls;
  }

  submit(){

  }

}
