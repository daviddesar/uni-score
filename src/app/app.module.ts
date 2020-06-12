import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';
import { ListUniComponent } from './home/list-uni/list-uni.component';
import { SearchBarComponent } from './home/search-bar/search-bar.component';
import { ScoreSearchComponent } from './score-search/score-search.component';
import { ScoreResultComponent } from './score-search/score-result/score-result.component';
import { SchoolInfoComponent } from './school-info/school-info.component';
import { UniComponent } from './home/list-uni/uni/uni.component';
import { ScoreSearchBarComponent } from './score-search/score-search-bar/score-search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ListUniComponent,
    SearchBarComponent,
    ScoreSearchComponent,
    ScoreResultComponent,
    SchoolInfoComponent,
    UniComponent,
    ScoreSearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
