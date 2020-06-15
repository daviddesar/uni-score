import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { getPackedSettings } from 'http2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // uniId: string;
  constructor(
    // private readonly route: ActivatedRoute
  ) { }

  ngOnInit() {
    // this.route.params.subscribe((params) => {
    //   // home/abc
    //   // home/xyz
    //   // this.id = params.uniId  //abc
    //   // service  getUniById(this.id);
    // });

    // js promise
    // getAPI().then(data => {

    // })
  }

}
