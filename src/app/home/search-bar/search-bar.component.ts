import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() idSearchSend = new EventEmitter<string>();

  constructor(
  ) { }
  idSearch: string = '';
  ngOnInit() {
  }
  onSearchId() {
    this.idSearchSend.emit(this.idSearch.toUpperCase());
  }

}








