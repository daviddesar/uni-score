import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  uniId: string;
  constructor() { }

  ngOnInit() {
  }
  onIdSearchHandler(uniId: string) {
    this.uniId = uniId;
  }
}
