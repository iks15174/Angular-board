import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/board/Post';
import { ActivatedRoute, Router } from '@angular/router';
import { BoardService } from 'src/app/service/rest-api/board.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { MyinfoService } from 'src/app/service/rest-api/myinfo.service';

@Component({
  selector: 'app-post-modify',
  templateUrl: './post-modify.component.html',
  styleUrls: ['./post-modify.component.css']
})
export class PostModifyComponent implements OnInit {

  postId: number;
  post = {} as Post;
  postForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private boardService: BoardService,
    private formBuilder: FormBuilder,
    private myinfoService: MyinfoService
  ) { 
    this.postId = Number(this.route.snapshot.params['postId']);
    this.postForm = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.post = this.boardService.viewPost(this.postId);
    this.postForm.controls['title'].setValue(this.post.title);
    this.postForm.controls['content'].setValue(this.post.content);
  }

  get f(){
    return this.postForm.controls;
  }

  submit(){
    if(this.boardService.modifyPost(this.post.postId, this.postForm.value.title, this.postForm.value.content, this.myinfoService.getUser())){
      this.router.navigate(['/board/post/' + this.post.postId]);
    }
  }

}
