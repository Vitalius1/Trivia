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
    if(!this.user_name){
      this.user_name = prompt("Please enter your name");
      this._userService.userObserver.next(this.user_name);
      console.log(this.user_name);
    }
   }
  
  ngOnInit(){
  
  }

}
