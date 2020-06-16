import {
  Component,
  OnInit
} from '@angular/core';
import { UniListService } from 'src/app/services/uni-list.service';
import { University } from '../../model/university.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-uni',
  templateUrl: './list-uni.component.html',
  styleUrls: ['./list-uni.component.css'],
})
export class ListUniComponent implements OnInit {
  uniList: Array<University>;
  renderTable: any;
  indexSearch: any;
  routerLink: string;


  constructor(private uniListService: UniListService, public router: Router) {
    this.uniList = uniListService.uniList;
    this.renderTable = [...this.uniList];
    this.indexSearch = uniListService.currentIndexSearch;
    this.routerLink = 'home/ftu';
  }


  ngOnInit() {
    this.uniListService.currentSearchEmitter.subscribe(newIndex => {
      if (newIndex === -1) {
        this.indexSearch = newIndex;
        return;
      }
      this.indexSearch = newIndex;
      this.renderTable = [this.uniList[this.indexSearch]];
    });
  }
  redirectToUni(id: string) {
    this.router.navigate(['home', id.toLowerCase()]);
  }

}
