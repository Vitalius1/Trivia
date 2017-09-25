import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { QuestionService } from '../question.service';
import { GameService } from '../game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.css']
})
export class TriviaComponent implements OnInit {
  user_name = "";
  questions = [];
  q1 = {
    a: "",
  }
  q2 = {
    a: "",
  }
  q3 = {
    a: "",
  }

  constructor(private _userService: UserService, private _questionService: QuestionService, private _gameService: GameService, private _router: Router) {
    this._userService.userObserver.subscribe(user_name => {
      this.user_name = user_name;
    })
    this._questionService.questionsObserver.subscribe(questions => {
      this.questions = questions;
    })

  }

  ngOnInit() {
    console.log("initiated game page with user: ", this.user_name);
    console.log(this.questions, "+++++++");
  }

  onSubmit(){
    console.log("submiting answers")
    let correct = 0;
    let wrong = 0;
    if(this.q1.a === "correct"){
      correct += 1;
    } else {
      wrong += 1
    }
    if(this.q2.a === "correct"){
      correct += 1;
    } else {
      wrong += 1
    }
    if(this.q3.a === "correct"){
      correct += 1;
    } else {
      wrong += 1
    }
    let game = {
      user: this.user_name,
      correct: correct,
      wrong: wrong
    }
    this._gameService.newGame(game);
    this._router.navigate(['dashboard']);
  }

}
