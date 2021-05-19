import { Injectable } from '@angular/core';
import { User } from "src/app/model/myinfo/User";

@Injectable({
  providedIn: 'root'
})
export class SignService {

  private userList: User[];

  constructor() {
    this.userList = JSON.parse(localStorage.getItem("userList") || "[]");
    if(this.userList.length == 0){
      this.userList.push({id: "admin@naver.com", password: "1234", name: "jiho"});
    }
  }

  singIn(id: string, password: string): boolean{
    for(let i = 0; i < this.userList.length; i++){
      if(this.userList[i].id == id && this.userList[i].password == password){
        localStorage.setItem("logined", "true");
        localStorage.setItem("loginId", this.userList[i].id);
        return true;
      }
    }
    return false;
  }

  signUp(id: string, password: string, name: string): boolean{
    try{
      this.userList.push({id: id, password: password, name: name});
      localStorage.setItem("userList", JSON.stringify(this.userList));
      return true;
    }
    catch{
      console.log("회원가입 실패");
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
