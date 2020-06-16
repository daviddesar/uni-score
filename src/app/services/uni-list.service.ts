import { Injectable, EventEmitter } from '@angular/core';
import { University } from '../model/university.model';


@Injectable({
  providedIn: 'root'
})


export class UniListService {
  uniList: Array<University> = [
    {
      id: 'FTU',
      name: 'ĐH Ngoại Thương TPHCM',
      info: 'Lorem ipsum dolor sit amet.',
      scores: { a: 25, b: 30, c: 30 }
    },
    {
      id: 'BKU',
      name: 'ĐH Bách Khoa TPHCM',
      info: 'Lorem ipsum dolor sit amet.',
      scores: { a: 26, b: 24, c: 26 },
    },
    {
      id: 'HCMUS',
      name: 'ĐH Khoa Học Tự Nhiên TPHCM',
      info: 'Lorem ipsum dolor sit amet.',
      scores: { a: 25, b: 27, c: 25 },
    },
    {
      id: 'HCMUTE',
      name: 'ĐH Sư Phạm Kỹ Thuật TPHCM',
      info: 'Lorem ipsum dolor sit amet.',
      scores: { a: 27, b: 24, c: 23 },
    },
    {
      id: 'UIT',
      name: 'ĐH Công Nghệ Thông Tin TPHCM',
      info: 'Lorem ipsum dolor sit amet.',
      scores: { a: 24, b: 27, c: 25 },
    },
  ];
  currentIndexSearch: any = null;

  currentSearchEmitter = new EventEmitter();

  searchIdUni(uniId: string) {
    const uniIndexSearch = this.uniList.findIndex(uni => uni.id === uniId);
    this.currentIndexSearch = uniIndexSearch;
    // emit changes
    this.currentSearchEmitter.emit(this.currentIndexSearch);
  }
  getUniById(uniId: string) {
    const resultIndex = this.uniList.findIndex(uni => uniId.toUpperCase() === uni.id);
    return this.uniList[resultIndex];
  }
}
