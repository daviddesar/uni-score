import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-score-result',
  templateUrl: './score-result.component.html',
  styleUrls: ['./score-result.component.css']
})
export class ScoreResultComponent implements OnInit {
  studentSearchResult: any;
  constructor(private studentsListService: StudentsService) {
  }

  ngOnInit() {
    this.studentSearchResult = this.studentsListService.studentSearchStatus;
    this.studentsListService.studentSearchEmitter.subscribe(newSearchStatus => {
      if (newSearchStatus === -1) {
        this.studentSearchResult = -1;
        console.log(this.studentSearchResult);
        return;
      }
      // tslint:disable-next-line:one-line
      else if (newSearchStatus === null) {
        this.studentSearchResult = newSearchStatus;
        return;
      }
      this.studentSearchResult = [];
      this.studentSearchResult.push(newSearchStatus);
      console.log(this.studentSearchResult);
    });
  }

}
