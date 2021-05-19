import { Injectable } from '@angular/core';
import { User } from 'src/app/model/myinfo/User';

@Injectable({
  providedIn: 'root'
})
export class MyinfoService {

  constructor() { }

  getUser(): User{
    const loginId = JSON.parse(localStorage.getItem('loginId') || "");
    
  }
}
