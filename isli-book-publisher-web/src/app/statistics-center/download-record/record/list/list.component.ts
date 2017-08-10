import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
// import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'tl-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Output() onClickProductDetails: EventEmitter<any> = new EventEmitter();

  @Input() pagingBoxObj;
  @Input() keywords: string;
  @Input() productListValue;

  constructor() { }

  ngOnInit() { }

  // 关键字搜索
  getProductTitle(string) {
    if (!this.keywords) { return [string]; }
    let patt = new RegExp(this.keywords);
    let start = string.search(patt);
    if (start < 0) { return [string]; }
    let end = this.keywords.length;
    let last = start + end;
    let arr = [string.substr(0, start), string.substr(start, end), string.substr(last)];
    return arr;
  }

  // 详情
  clickProductDetails(rowData) {
    this.onClickProductDetails.emit(rowData);
    // this.router.navigateByUrl('/statistics-center/download-record/download-details') ;
  }
}

