import { Injectable } from '@angular/core';
import { Comment } from 'src/app/model/board/Comment';
import { from, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private cmtList: Comment[];
  public cmtList$: Observable<Comment[]>; 
  

  constructor() { 
    this.cmtList = JSON.parse(localStorage.getItem("cmtList") || "[]");
    if(this.cmtList.length === 0){
      this.cmtList = [
        {
          cmtId : 0,
          userId : "admin@naver.com",
          postId : 1,
          content : "샘플 댓글 입니다. 안녕하세요",
          created : new Date()
        }
      ];
      localStorage.setItem("cmtList", JSON.stringify(this.cmtList));
    }
  }

  getCmt(postId: number): Observable<Comment[]>{
    let result: Comment[] = [];
    const cmtSubject = from(this.cmtList);
    cmtSubject.pipe(
      filter(cmt => cmt.postId === postId)
    ).subscribe(cmt => result.push(cmt));
    return result;
  }

  addCmt(userId: string, postId: number, content: string): boolean{
    try{
      let newCmt: Comment = {
        cmtId: (this.cmtList[this.cmtList.length - 1].cmtId + 1),
        postId: postId,
        userId: userId,
        content: content,
        created: new Date()
      };
      this.cmtList.push(newCmt);
      localStorage.setItem("cmtList", JSON.stringify(this.cmtList));
      return true;
    }
    catch(e){
      console.log(`error : ${e}`);
      return false;
    }
  }

  modifyCmt(){}

  deleteCmt(){}
}
