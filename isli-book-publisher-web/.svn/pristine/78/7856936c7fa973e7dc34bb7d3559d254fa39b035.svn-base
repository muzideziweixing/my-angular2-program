import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DropDownBoxObj } from '../../../shared';

@Component({
  selector: 'tl-opr-img-details-query',
  templateUrl: './opr-img-details-query.component.html',
  styleUrls: ['./opr-img-details-query.component.css']
})
export class OprImgDetailsQueryComponent implements OnInit {
  @Output() onQuery: EventEmitter<any> = new EventEmitter();

  @Input() platformValue: any;

  public dropDownBoxObj: DropDownBoxObj;
  public flatform: any;
  public beginEndDate: any;

  constructor() { }

  ngOnInit() {
    this.dropDownBoxInit();
  }

  // 搜索
  query() {
    this.onQuery.emit({
      flatform: this.flatform
    });
  }

  // 平台来源初始化
  dropDownBoxInit() {
    this.dropDownBoxObj = new DropDownBoxObj(200, 26);
    this.platformValue = {
      value: [
        { id: '', name: '全部' },
        { id: '1', name: 'Andriod Phone' },
        { id: '2', name: 'Andriod Pad'},
        { id: '3', name: 'iPhone' },
        { id: '4', name: 'iPad' },
        { id: '5', name: 'Windows' },
        { id: '6', name: 'Mac' },
      ]
    };
  }

}
