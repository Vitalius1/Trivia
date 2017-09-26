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
    if (this.questions.length < 1) {
      this._router.navigate(['dashboard'])
    }
  }

  ngOnInit() {
    console.log("initiated game page with user: ", this.user_name);
  }

  onSubmit() {
    console.log("submiting answers")
    let correct = 0;
    if (this.q1.a === "1") {
      correct += 1;
    }
    if (this.q2.a === "1") {
      correct += 1;
    }
    if (this.q3.a === "1") {
      correct += 1;
    }
    let game = {
      user: this.user_name,
      correct: correct,
    }
    this._gameService.newGame(game);
    this._router.navigate(['dashboard']);
  }

}
