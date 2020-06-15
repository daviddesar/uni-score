import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './home/home.component';
import { ListUniComponent } from './home/list-uni/list-uni.component';
import { SearchBarComponent } from './home/search-bar/search-bar.component';
import { ScoreSearchComponent } from './score-search/score-search.component';
import { ScoreResultComponent } from './score-search/score-result/score-result.component';
import { SchoolInfoComponent } from './school-info/school-info.component';
// import { UniComponent } from './home/list-uni/uni/uni.component';
import { ScoreSearchBarComponent } from './score-search/score-search-bar/score-search-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

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
    ScoreSearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
