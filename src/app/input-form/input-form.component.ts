import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
  model: User;
  
  constructor(private readonly userService: UserService, private router: Router) {
    this.createNewModel();
   }

  ngOnInit(): void {
  }

  async onSaveUser(): Promise<void> {
    // has to be async if it's a server call
    let result = await this.userService.saveUser(this.model);
    this.router.navigateByUrl('/list');
  }

  createNewModel(): void {
    this.model = {
      firstname: "",
      lastname: "",
      age: null,
      email: "",
      address: ""
    };
  }

}
