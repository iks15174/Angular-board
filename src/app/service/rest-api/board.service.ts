import { Injectable } from '@angular/core';
import { Post } from 'src/app/model/board/Post';
import { User } from 'src/app/model/myinfo/User';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private postList: Post[];

  constructor(
  ) { 
    this.postList = [
      {'postId':1, 'title': '테스트.', 'content': '개발을 위한 샘플 데이터', 'user': {id: "a", password: "b", name: "jiho"}}
    ];
  }

  getPosts(): Post[]{
    return this.postList;
  }

  addPost(title: string, content: string, user: User): boolean{
    if(user.id !== ""){
      let newPost: Post = {
        'postId' : (this.postList[this.postList.length - 1].postId + 1),
        'title' : title,
        'content' : content,
        'user' : user
      };
      this.postList.push(newPost);
      return true;
    }
    return false;
  }
}
