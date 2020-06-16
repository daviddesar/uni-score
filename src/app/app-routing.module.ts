import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScoreSearchComponent } from './score-search/score-search.component';
import { SchoolInfoComponent } from './school-info/school-info.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'home/:uniId',
        component: SchoolInfoComponent
      }
    ]
  },
  {
    path: 'home/:uniId',
    component: SchoolInfoComponent
  },
  {
    path: 'score-search',
    component: ScoreSearchComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
