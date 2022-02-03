import { Component, OnInit } from '@angular/core';
import { userService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users = [
    { id: 1, name: 'João' },
    { id: 2, name: 'Carla' },
    { id: 3, name: 'Agatha' },
  ];
  constructor(private userData: userService) {}

  ngOnInit(): void {}
}
