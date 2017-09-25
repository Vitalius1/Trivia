import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DashComponent } from './dash/dash.component';
import { NewComponent } from './new/new.component';
import { TriviaComponent } from './trivia/trivia.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashComponent },
  { path: 'new_question', component: NewComponent },
  { path: 'lets_play', component: TriviaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
