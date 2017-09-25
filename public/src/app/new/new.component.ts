import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { Router } from '@angular/router';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  question: Question = new Question();
  constructor(private _router: Router, private _questionService: QuestionService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log("Submiting.....");
    this._questionService.createQ(this.question);
    this._router.navigate(['dashboard']);
  }
  
  cancel() {
    console.log("Canceling question creation")
    this._router.navigate(['dashboard']);
  }

}
