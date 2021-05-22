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
    this.postList = JSON.parse(localStorage.getItem("postList") || "[]");
    if(this.postList.length === 0){
      this.postList = [
        {'postId':1, 'title': '테스트.', 'content': '개발을 위한 샘플 데이터', 'user': {id: "admin@naver.com", password: "1234", name: "jiho"}}
      ];
      localStorage.setItem("postList", JSON.stringify(this.postList));
    }
  }

  getPosts(): Post[]{
    return JSON.parse(localStorage.getItem("postList") || "[]");
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
      localStorage.setItem("postList", JSON.stringify(this.postList));
      return true;
    }
    return false;
  }

  viewPost(postId: number): Post{
    for(let i in this.postList){
      if(this.postList[i].postId === postId){
        return this.postList[i];
      }
    }
    return {postId: -1, title: "", content: "", user: {id: "", password: "", name: ""}};
  }

  modifyPost(post: Post): boolean{
    for(let i in this.postList){
      if(this.postList[i].postId === post.postId){
        this.postList[i].title = post.title;
        this.postList[i].content = post.content;
        localStorage.setItem("postList", JSON.stringify(this.postList));
        return true;
      }
    }
    return false;
  }

  deletePost(postId: number, user: User): boolean{
    for(let i in this.postList){
      if(this.postList[i].postId === postId && this.postList[i].user.id === user.id){
        this.postList.splice(Number(i), 1);
        localStorage.setItem("postList", JSON.stringify(this.postList));
        return true;
      }
    }
    return false;
  }
}
