import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class QuestionService {
  questions = [];
  questionsObserver = new BehaviorSubject(this.questions);

  constructor(private _http: Http, private _router: Router) { }

  createQ(q) {
    console.log("in the question Service");
    this._http.post(`/question.json`, q)
      .subscribe(data => {
        console.log("Question created", data.json());
      }, err => {
        console.log("Create question error");
      })
  }

  getRandomQ() {
    console.log("getting all the questions");
    this._http.get(`/questions.json`)
      .subscribe(data => {
        this.questions = data.json();
        this.questionsObserver.next(this.questions);
      }, err => {
        console.log("Getting all questions error");
      })
  }

}
