import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DropDownBoxObj } from '../../../shared';

@Component({
  selector: 'tl-checking-query-form',
  templateUrl: './checking-query-form.component.html',
  styleUrls: ['./checking-query-form.component.css']
})
export class CheckingQueryFormComponent implements OnInit {

  @Output() onQuery: EventEmitter<any> = new EventEmitter();

  public dropDownBoxObj: DropDownBoxObj;
  public beginEndDate: any;
  public settlementValue: Object;
  public settlement: string = '0';
  public start_date: string = '';
  public end_date: string = '';

  constructor() { }

  ngOnInit() {
    this.dropDownBoxInit();
  }

  // 搜索
  query() {
    this.onQuery.emit({
      settlement: this.settlement,
      start_date: this.beginEndDate.startDate,
      end_date: this.beginEndDate.endDate
    });
  }

  // 平台来源初始化
  dropDownBoxInit() {
    this.dropDownBoxObj = new DropDownBoxObj(200, 26);
    this.settlementValue = {
      value: [
        { id: '0', name: '未申请结算' },
        { id: '1', name: '已结算申请' }
      ]
    };
  }

}
