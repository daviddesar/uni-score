import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { UniListService } from 'src/app/services/uni-list.service';
import { University } from '../../model/university.model';

@Component({
  selector: 'app-list-uni',
  templateUrl: './list-uni.component.html',
  styleUrls: ['./list-uni.component.css'],
})
export class ListUniComponent implements OnInit {

  uniList: Array<University>;
  renderTable: any;
  indexSearch: any;


  constructor(private uniListService: UniListService) {
    this.uniList = uniListService.uniList;
    this.renderTable = [...this.uniList];
    this.indexSearch = uniListService.currentIndexSearch;
  }
  columnsToDisplay = ['userName', 'age'];


  ngOnInit() {
    this.uniListService.currentSearchEmitter.subscribe(newIndex => {
      if (newIndex === -1) {
        this.indexSearch = newIndex;
        return;
      }
      // console.log('Emitter run!');
      this.indexSearch = newIndex;
      console.log(this.indexSearch);
      this.renderTable = [this.uniList[this.indexSearch]];
      // console.log('Table: ', this.renderTable);
    });
  }


}
