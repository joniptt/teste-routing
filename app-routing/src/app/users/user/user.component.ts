import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { userService } from 'src/app/user.service';

@Component({
  selector: 'app-user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.css'],
})
export class UserComponent implements OnInit, DoCheck {
  user: { id: number; name: string };
  constructor(
    private route: ActivatedRoute,
    private userSelected: userService
  ) {}
  ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
    };
    this.route.params.subscribe(
      (params: Params) =>
        (this.user = { id: params['id'], name: params['name'] })
    );
  }
  ngDoCheck(): void {}

  changePath() {}
}
