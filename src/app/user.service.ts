import { Injectable } from '@angular/core';

export interface User {
  firstname: string;
  lastname: string;
  age: number | null;
  email: string;
  address: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly userListKey: string = "USER_LIST";
  
  constructor() { }

  saveUser(user: User): Promise<boolean> {
    // saving to local storage for demo purpose
    const userListStr = localStorage.getItem(this.userListKey);
    let userList: User[] = [];
    if (userListStr !== null) {
      userList = JSON.parse(userListStr);
    }
    userList.push(user);
    localStorage.setItem(this.userListKey, JSON.stringify(userList));
    return Promise.resolve(true);
  }

  getUsers(): Promise<User[]> {
    // saving to local storage for demo purpose
    const userListStr = localStorage.getItem(this.userListKey);
    let userList: User[] = [];
    if (userListStr !== null) {
      userList = JSON.parse(userListStr);
    }
    return Promise.resolve(userList);
  }
}
