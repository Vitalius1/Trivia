import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {
user_name = "";
userObserver = new BehaviorSubject(this.user_name);
  constructor() { }
}
