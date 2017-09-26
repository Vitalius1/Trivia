import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class QuestionService {
  questions = [];
  questionsObserver = new BehaviorSubject(this.questions);

  constructor(private _http: Http) {
    this.getAllQ();
  }

  createQ(q) {
    console.log("in the question Service");
    this._http.post(`/question.json`, q)
      .subscribe(data => {
        console.log("Question created", data.json());
      }, err => {
        console.log("Create question error");
      })
  }

  getAllQ() {
    console.log("getting all the questions");
    this._http.get(`/questions.json`)
      .subscribe(data => {
        for(let i = 1; i <= 3; i++){
          let ridx = Math.floor(Math.random() * ((data.json().length - 1) - 0 + 1)) + 0;
          this.questions.push(data.json()[ridx])
        }
        this.questionsObserver.next(this.questions);
      }, err => {
        console.log("Getting all questions error");
      })
  }

}
