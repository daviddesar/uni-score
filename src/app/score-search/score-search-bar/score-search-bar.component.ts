import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-score-search-bar',
  templateUrl: './score-search-bar.component.html',
  styleUrls: ['./score-search-bar.component.css']
})
export class ScoreSearchBarComponent implements OnInit {
  studentId: string;
  studentSearchResult: any;

  constructor( private studentsListService: StudentsService) { }

  ngOnInit() {
  }
  onSearchIdStudent() {
    this.studentSearchResult = this.studentsListService.searchStudent(this.studentId);
  }


}
