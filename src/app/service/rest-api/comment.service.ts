import { Injectable } from '@angular/core';
import { Comment } from 'src/app/model/board/Comment';
import { Observable, Observer, BehaviorSubject } from 'rxjs';
import { User } from 'src/app/model/myinfo/User';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private cmtList: BehaviorSubject<Comment[]>;
  public cmtList$: Observable<Comment[]>;

  constructor() {
    this.cmtList = new BehaviorSubject(JSON.parse(localStorage.getItem("cmtList") || "[]"));
    this.cmtList$ = this.cmtList.asObservable();
  }

  getCmt(postId: number) {
    let cmtResult: Comment[] = [];
    let tempResult = JSON.parse(localStorage.getItem('cmtList') || "[]");
    for (let i = 0; i < tempResult.length; i++) {
      if (tempResult[i].postId === postId) {
        cmtResult.push(tempResult[i]);
      }
    }
    this.cmtList.next(cmtResult);
  }

  addCmt(userId: string, postId: number, content: string) {
    let cmtList: Comment[] = JSON.parse(localStorage.getItem('cmtList') || "[]");
    let newCmt: Comment = {
      cmtId: (cmtList.length === 0 ? 0 : cmtList[cmtList.length - 1].cmtId + 1 ),
      postId: postId,
      userId: userId,
      content: content,
      created: new Date()
    };
    cmtList.push(newCmt);
    localStorage.setItem("cmtList", JSON.stringify(cmtList));
    this.getCmt(postId);
  }

  modifyCmt(cmt: Comment, postId: number) {
    let cmtList: Comment[] = JSON.parse(localStorage.getItem('cmtList') || "[]");
    for(let i in cmtList){
      if(cmtList[i].cmtId === cmt.cmtId){
        cmtList[i].content = cmt.content;
      }
    }
    localStorage.setItem('cmtList', JSON.stringify(cmtList));
    this.getCmt(postId);
  }

  deleteCmt(postId: number, cmtId: number, user: User) {
    let cmtList: Comment[] = JSON.parse(localStorage.getItem('cmtList') || "[]");
    for(let i in cmtList){
      if(cmtList[i].cmtId === cmtId && cmtList[i].userId === user.id){
        cmtList.splice(Number(i), 1);
        localStorage.setItem('cmtList', JSON.stringify(cmtList));
        this.getCmt(postId);
      }
    }
  }
}
