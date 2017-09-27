import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { dynamicSort } from './sortby';

@Injectable()
export class GameService {
  games = [];
  gameObserver = new BehaviorSubject(this.games);

  constructor(private _http: Http, private _router: Router) {
    this.allGames();
  }

  newGame(game) {
    this._http.post(`/game.json`, game)
      .subscribe(data => {
        console.log("Game created", data.json());
        this.games = data.json();
        this.games.sort(dynamicSort("-correct"));
        this.gameObserver.next(this.games);
        this._router.navigate(['dashboard']);
      }, err => {
        console.log("Create game error");
      })
    }
    
    allGames() {
      this._http.get(`/game.json`)
      .subscribe(data => {
        console.log("got all games", data.json());
        this.games = data.json();
        this.games.sort(dynamicSort("-correct"));
        this.gameObserver.next(this.games);
      }, err => {
        console.log("Getting all games error: ", err)
      })
  }

}
