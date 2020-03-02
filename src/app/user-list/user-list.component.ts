import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  columnDefs = [
    { headerName: 'First Name', field: 'firstname', sortable: true },
    { headerName: 'Last Name', field: 'lastname', sortable: true },
    { headerName: 'Age', field: 'age', sortable: true },
    { headerName: 'Email', field: 'email', sortable: true },
    { headerName: 'Address', field: 'address', sortable: true },
  ];

  rowData = [];

  constructor(private readonly userService: UserService) { }

  async ngOnInit(): Promise<void> {
    this.rowData = await this.userService.getUsers();
  }

}
