import { Injectable } from '@angular/core';
import { UserlistService } from "src/app/service/member/userlist.service";

@Injectable({
  providedIn: 'root'
})
export class SignService {

  constructor(
    private userlistService: UserlistService
  ) {
  }

  singIn(id: string, password: string): boolean{
    let userList = this.userlistService.userList;
    for(let i = 0; i < userList.length; i++){
      if(userList[i].id == id && userList[i].password == password){
        localStorage.setItem("logined", "true");
        localStorage.setItem("loginId", JSON.stringify(userList[i].id));
        return true;
      }
    }
    return false;
  }

  /*
  회원가입 중복체크 로직 추가할것.
   */
  signUp(id: string, password: string, name: string): boolean{
    if(this.userlistService.addUser({id: id, password: password, name: name})){
      return true;
    }
    else{
      alert("회원가입 실패");
      return false;
    }
  }

  isSignIn(): boolean{
    const logined = JSON.parse(localStorage.getItem("logined") || "false");
    if(logined){
      return true;
    }
    else{
      return false;
    }
  }
}
