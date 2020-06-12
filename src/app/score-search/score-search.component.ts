import { Component, OnInit } from "@angular/core";
import { Score } from "./score.model";

@Component({
  selector: "app-score-search",
  templateUrl: "./score-search.component.html",
  styleUrls: ["./score-search.component.css"],
})
export class ScoreSearchComponent implements OnInit {
  scoreStudentList: Array<Score> = [
    {
      name: "Quan",
      studentId: "147268",
      scoreList: [{ a: 25 }, {b: 27}, {c: 26}],
    },
    {
      name: "Hoang",
      studentId: "209654",
      scoreList: [{ a: 23 }, {b: 21}, {c: 25}],
    },
    {
      name: "Vu",
      studentId: "332567",
      scoreList: [{ a: 28 }, {b: 29}, {c: 23}],
    },
    {
      name: "Nguyen",
      studentId: "987256",
      scoreList: [{ a: 24 }, {b: 22}, {c: 25}],
    },
  ];
  constructor() {}

  ngOnInit() {}
}
