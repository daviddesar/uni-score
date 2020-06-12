import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';
import { ListUniComponent } from './home/list-uni/list-uni.component';
import { SearchBarComponent } from './home/search-bar/search-bar.component';
import { ScoreSearchComponent } from './score-search/score-search.component';
import { ScoreResultComponent } from './score-search/score-result/score-result.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ListUniComponent,
    SearchBarComponent,
    ScoreSearchComponent,
    ScoreResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
