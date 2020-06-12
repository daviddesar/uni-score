import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScoreSearchComponent } from './score-search/score-search.component';


const routes: Routes = [
  { path: '', component:  HomeComponent},
  { path: 'score-search', component:  ScoreSearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
