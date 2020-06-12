import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-list-uni",
  templateUrl: "./list-uni.component.html",
  styleUrls: ["./list-uni.component.css"],
})
export class ListUniComponent implements OnInit, OnChanges {
  uniList = [
    {
      id: "FTU",
      name: "ĐH Ngoại Thương TPHCM",
      info: "Lorem ipsum dolor sit amet.",
      scores: [{ a: 26 }, { b: 25 }, { c: 23 }],
    },
    {
      id: "BKU",
      name: "ĐH Bách Khoa TPHCM",
      info: "Lorem ipsum dolor sit amet.",
      scores: [{ a: 26 }, { b: 24 }, { c: 26 }],
    },
    {
      id: "HCMUS",
      name: "ĐH Khoa Học Tự Nhiên TPHCM",
      info: "Lorem ipsum dolor sit amet.",
      scores: [{ a: 25 }, { b: 27 }, { c: 25 }],
    },
    {
      id: "HCMUTE",
      name: "ĐH Sư Phạm Kỹ Thuật TPHCM",
      info: "Lorem ipsum dolor sit amet.",
      scores: [{ a: 27 }, { b: 24 }, { c: 23 }],
    },
    {
      id: "UIT",
      name: "ĐH Công Nghệ Thông Tin TPHCM",
      info: "Lorem ipsum dolor sit amet.",
      scores: [{ a: 24 }, { b: 27 }, { c: 25 }],
    },
  ];
  renderTable: any = [...this.uniList];
  uniNotFoundStatus: boolean = false;
  @Input() uniId: string;
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    let currentIdValue = changes.uniId.currentValue;
    if (currentIdValue !== undefined) {
      this.searchUni(currentIdValue);
    }
  }
  ngOnInit() {}

  searchUni(currentIdValue: string): any {
    if (currentIdValue === '') {
      this.renderTable = [...this.uniList]
      return
    }
    this.renderTable = [...this.uniList]
    let searchIdIndex = this.uniList.findIndex(
      (uni) => uni.id === currentIdValue
    );
    if (searchIdIndex !== -1) {
      this.uniNotFoundStatus = false;
      this.renderTable = [this.renderTable[searchIdIndex]]
    }
    else {
      this.renderTable = []
      this.uniNotFoundStatus = true;
    }
  }
}
