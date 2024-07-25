import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn =false;
  private userInfo:any=null;
  // constructor() { }

  isLoggedIn() {
    return this.loggedIn;
  }

  getUserInfo() {
    return this.userInfo;
  }

  login(user: any) {
    this.loggedIn = true;
    this.userInfo = user;
  }

  logout() {
    this.loggedIn = false;
    this.userInfo = null;
  }
}
