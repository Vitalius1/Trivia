import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  user_name = "";

  constructor(private _router: Router, private _userService: UserService) {
    this._userService.userObserver.subscribe(user_name => {
      this.user_name = user_name;
    })
  }

  ngOnInit() {
  }

  goPlay() {
    console.log(this.user_name, "Clicked PLAY button")
    this._router.navigate(['lets_play']);
  }
}