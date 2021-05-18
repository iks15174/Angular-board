import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignService {

  private userList: {id: string, password: string, name: string}[];

  constructor() {
    this.userList = JSON.parse(localStorage.getItem("userList") || "[]");
    this.userList.push({id: "admin@naver.com", password: "1234", name: "jiho"});
  }

  singIn(id: string, password: string): boolean{
    for(let i = 0; i < this.userList.length; i++){
      if(this.userList[i].id == id && this.userList[i].password == password){
        localStorage.setItem("logined", "true")
        return true;
      }
    }
    return false;
  }
}
