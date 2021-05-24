import { Injectable } from '@angular/core';
import { User } from 'src/app/model/myinfo/User';

@Injectable({
  providedIn: 'root'
})
export class UserlistService {

  private baseEmail = '@naver.com';
  private basePsw = '1234';
  private baseName = '지호';
  public userList: User[];

  constructor() {
    this.userList = JSON.parse(localStorage.getItem("userList") || "[]");
    if(this.userList.length == 0){
      this.userList.push({id: "admin@naver.com", password: "1234", name: "jiho"});
      localStorage.setItem("userList", JSON.stringify(this.userList));
    }
  }

  addUser(user: User): boolean{
    for(let i = 0; i < this.userList.length; i++){
      if(this.userList[i].id === user.id || this.userList[i].name === user.name){
        return false;
      }
    }
    this.userList.push(user);
    localStorage.setItem("userList", JSON.stringify(this.userList));
    return true;
  }

  addRandomUser(){
    const id_num = this.userList.length;
    const id = id_num + this.baseEmail;
    const name = id_num + this.baseName;
    this.userList.push({id: id, password: this.basePsw, name: name});
    localStorage.setItem("userList", JSON.stringify(this.userList));
  }
}
