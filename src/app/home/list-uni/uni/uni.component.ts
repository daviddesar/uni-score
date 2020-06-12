import { Component, OnInit, Input } from "@angular/core";
import { Uni } from '../uni.model';

@Component({
  selector: "[app-uni]",
  templateUrl:'./uni.component.html',
  styleUrls: ["./uni.component.css"],
})
export class UniComponent implements OnInit {
  constructor() {}
  @Input() uni: Uni
  ngOnInit() {
  }
}
