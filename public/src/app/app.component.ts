import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user_name = "";
  
  constructor(private _userService: UserService) {
    while(this.user_name === "" || !this.user_name){
      this.user_name = prompt("Please enter your name");
      console.log(this.user_name);
    }
    this._userService.userObserver.next(this.user_name);
   }
  
  ngOnInit(){
  
  }

}
