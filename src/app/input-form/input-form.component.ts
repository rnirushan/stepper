import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../user.service';
import { Router } from '@angular/router';
import { NotifierService } from "angular-notifier";


@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
  model: User;

  constructor(
    private readonly userService: UserService,
    private readonly router: Router,
    private readonly notifierService: NotifierService) {
    this.createNewModel();
  }

  ngOnInit(): void {
  }

  async onSaveUser(): Promise<void> {
    // has to be async if it's a server call
    let result = await this.userService.saveUser(this.model);
    this.notifierService.notify("success", "Personal info has been added successfully.");
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
