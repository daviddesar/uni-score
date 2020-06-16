import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-score-search',
  templateUrl: './score-search.component.html',
  styleUrls: ['./score-search.component.css'],
})
export class ScoreSearchComponent implements OnInit {
  constructor(private router: Router) {
  }

  ngOnInit() {}
}
