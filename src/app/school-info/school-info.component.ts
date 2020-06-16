import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { University } from '../model/university.model';
import { UniListService } from '../services/uni-list.service';

@Component({
  selector: 'app-school-info',
  templateUrl: './school-info.component.html',
  styleUrls: ['./school-info.component.css']
})
export class SchoolInfoComponent implements OnInit {
  uniId: string;
  university: University;
  constructor(
    // public router: Router,
    public activatedRoute: ActivatedRoute,
    private uniListService: UniListService,
  ) {
    this.uniId = activatedRoute.snapshot.params.uniId;
  }

  ngOnInit() {
    this.university = this.uniListService.getUniById(this.uniId);
  }

}
