import { Injectable } from '@angular/core';
import { User } from 'src/app/model/myinfo/User';
import { UserlistService } from "src/app/service/member/userlist.service";

@Injectable({
  providedIn: 'root'
})
export class MyinfoService {

  constructor(
    private userlistService: UserlistService
  ) { }

  getUser(): User{
    const loginId = JSON.parse(localStorage.getItem("loginId") || '" "');
    if(loginId !== " "){
      let userList = this.userlistService.userList;
      for(let i = 0; i < userList.length; i++){
        if(userList[i].id === loginId){
          return userList[i];
        }
      }
    }
    return {id: "", password: "", name: ""};
  }
}
