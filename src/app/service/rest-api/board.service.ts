import { Injectable } from '@angular/core';
import { Post } from 'src/app/model/board/Post';
import { User } from 'src/app/model/myinfo/User';
import { UserlistService } from '../member/userlist.service';
import { randomDate } from 'src/app/util/randomDate';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  public postList: Post[];
  private baseTitle = "title";
  private baseContent = "content";
  private startDate = new Date();
  private endDate = new Date(this.startDate.getTime() - (7 * 24 * 60 * 60 * 1000));


  constructor(
    private userlistService: UserlistService
  ) {
    this.postList = JSON.parse(localStorage.getItem("postList") || "[]");
    if (this.postList.length === 0) {
      this.postList = [
        {
          'postId': 1,
          'title': '테스트.',
          'content': '개발을 위한 샘플 데이터',
          'user': { id: "admin@naver.com", password: "1234", name: "jiho" },
          'created': randomDate(this.startDate, this.endDate),
        }
      ];
      localStorage.setItem("postList", JSON.stringify(this.postList));
    }
  }

  getPosts(start: number, end: number): Post[] {
    let temp: Post[] = JSON.parse(localStorage.getItem("postList") || "[]");
    if ((temp.length - 1) < end) {
      end = temp.length - 1;
    }
    return temp.slice(start, end + 1);

  }

  addPost(title: string, content: string, user: User): boolean {
    if (this.userlistService.findUser(user)) {
      let newPost: Post = {
        postId: (this.postList[this.postList.length - 1].postId + 1),
        title: title,
        content: content,
        user: user,
        created: randomDate(this.startDate, this.endDate),
      };
      this.postList.push(newPost);
      localStorage.setItem("postList", JSON.stringify(this.postList));
      return true;
    }
    return false;
  }

  viewPost(postId: number): Post {
    for (let i in this.postList) {
      if (this.postList[i].postId === postId) {
        return this.postList[i];
      }
    }
    return { postId: -1, title: "", content: "", 
    user: { id: "", password: "", name: "" },
    created: new Date(),
   };
  }

  modifyPost(post: Post): boolean {
    for (let i in this.postList) {
      if (this.postList[i].postId === post.postId) {
        this.postList[i].title = post.title;
        this.postList[i].content = post.content;
        localStorage.setItem("postList", JSON.stringify(this.postList));
        return true;
      }
    }
    return false;
  }

  deletePost(postId: number, user: User): boolean {
    for (let i in this.postList) {
      if (this.postList[i].postId === postId && this.postList[i].user.id === user.id) {
        this.postList.splice(Number(i), 1);
        localStorage.setItem("postList", JSON.stringify(this.postList));
        return true;
      }
    }
    return false;
  }

  addRandomPost() {
    const id_num = this.postList[this.postList.length - 1].postId;
    const title = id_num + this.baseTitle;
    const content = id_num + this.baseContent;
    const min = 0;
    const max = this.userlistService.userList.length;
    const index = Math.floor(Math.random() * (max - min)) + min;
    this.postList.push({
      postId: id_num + 1,
      title: title,
      content: content,
      user: this.userlistService.userList[index],
      created: randomDate(this.startDate, this.endDate),
    });
    localStorage.setItem("postList", JSON.stringify(this.postList));
  }

}
