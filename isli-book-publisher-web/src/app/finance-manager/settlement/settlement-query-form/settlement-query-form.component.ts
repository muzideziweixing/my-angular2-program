import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DropDownBoxObj } from '../../../shared';

@Component({
  selector: 'tl-settlement-query-form',
  templateUrl: './settlement-query-form.component.html',
  styleUrls: ['./settlement-query-form.component.css']
})
export class SettlementQueryFormComponent implements OnInit {

  @Output() onQuery: EventEmitter<any> = new EventEmitter();

  public dropDownBoxObj: DropDownBoxObj;
  public partValue: Object;
  public statusValue: Object;
  public beginEndDate: any;
  public part: string = '';
  public status: string = '';
  public numbers: string = '';
  public start_date: string = '';
  public end_date: string = '';

  constructor() { }

  ngOnInit() {
    this.dropDownBoxInit();
  }

  // 搜索
  query() {
    this.onQuery.emit({
      part: this.part,
      status: this.status,
      numbers: this.numbers,
      start_date: this.beginEndDate.startDate,
      end_date: this.beginEndDate.endDate
    });
  }

  // 平台来源初始化
  dropDownBoxInit() {
    this.dropDownBoxObj = new DropDownBoxObj(200, 26);
    this.partValue = {
      value: [
        { id: '', name: '全部' },
        { id: '1', name: '泛媒阅读' }
      ]
    };
    this.statusValue = {
      value: [
        { id: '', name: '全部' },
        { id: '1', name: '等待平台受理' },
        { id: '2', name: '平台接受申请' },
        { id: '3', name: '等待平台结算' },
        { id: '4', name: '结算成功' },
        { id: '5', name: '结算失败' },
      ]
    };
  }
}