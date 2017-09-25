import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashComponent } from './dash/dash.component';
import { NewComponent } from './new/new.component';
import { TriviaComponent } from './trivia/trivia.component';

// ----- Forms and Http Modules -------------
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { QuestionService } from './question.service';
import { GameService } from './game.service';
import { UserService } from './user.service';


@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    NewComponent,
    TriviaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // <--- Forms Module
    HttpModule // <--- Http Module

  ],
  providers: [QuestionService, GameService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
