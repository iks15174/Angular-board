import { Injectable } from '@angular/core';
import { Comment } from 'src/app/model/board/Comment';
import { Observable, Observer, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  public cmtModifiyedSignal: BehaviorSubject<string>; 

  constructor() {
    if(JSON.parse(localStorage.getItem("cmtList") || "[]").length === 0){
      let cmtList = [
        {
          cmtId: 0,
          userId: "admin@naver.com",
          postId: 1,
          content: "샘플 댓글 입니다. 안녕하세요",
          created: new Date()
        },
        {
          cmtId: 1,
          userId: "admin@naver.com",
          postId: 1,
          content: "샘플 댓글2 입니다. 안녕하세요",
          created: new Date()
        },
        {
          cmtId: 2,
          userId: "admin@naver.com",
          postId: 2,
          content: "샘플 댓글3 입니다. 안녕하세요",
          created: new Date()
        }
      ];
      localStorage.setItem("cmtList", JSON.stringify(cmtList));
    }
    this.cmtModifiyedSignal = new BehaviorSubject("");
  }

  getCmt(postId: number) {
    let cmtResult: Comment[] = [];
    let tempResult = JSON.parse(localStorage.getItem('cmtList') || "[]");
    for(let i = 0; i < tempResult.length; i++){
      if(tempResult[i].postId === postId){
        cmtResult.push(tempResult[i]);
      }
    }
    return new Observable(function(observer: Observer<Comment[]>){
      observer.next(cmtResult);
      observer.complete();
    })
  }

  addCmt(userId: string, postId: number, content: string){
    let cmtList = JSON.parse(localStorage.getItem('cmtList') || "[]");
    let newCmt: Comment = {
      cmtId: (cmtList[cmtList.length - 1].cmtId + 1),
      postId: postId,
      userId: userId,
      content: content,
      created: new Date()
    };
    cmtList.push(newCmt);
    localStorage.setItem("cmtList", JSON.stringify(cmtList));
    this.cmtModifiyedSignal.next('ADD');
  }

  modifyCmt() { }

  deleteCmt() { }
}
