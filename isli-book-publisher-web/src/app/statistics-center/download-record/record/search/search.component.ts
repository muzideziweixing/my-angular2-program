import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'tl-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() onSearchForm: EventEmitter<any> = new EventEmitter();

  public product_keywords: string = '';

  constructor() { }

  ngOnInit() { }

  // 搜索
  searchClick() {
    this.onSearchForm.emit({
      productKeywords: this.product_keywords,  // 关键字
    })
  }
}
