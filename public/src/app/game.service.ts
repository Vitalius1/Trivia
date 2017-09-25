import { Injectable } from '@angular/core';

@Injectable()
export class GameService {

  constructor() { }

  newGame(game){
    console.log(game);
  }
}
