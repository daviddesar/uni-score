import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UniListService } from 'src/app/services/uni-list.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(
    private uniListService: UniListService
  ) { }
  idSearch = '';
  ngOnInit() {
  }
  onSearchId() {
    this.uniListService.searchIdUni(this.idSearch.toUpperCase());
  }

}








