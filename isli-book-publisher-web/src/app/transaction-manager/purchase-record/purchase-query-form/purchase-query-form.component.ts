import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DropDownBoxObj } from '../../../shared';

@Component({
  selector: 'tl-purchase-query-form',
  templateUrl: './purchase-query-form.component.html',
  styleUrls: ['./purchase-query-form.component.css']
})
export class PurchaseQueryFormComponent implements OnInit {

  @Output() onQuery: EventEmitter<any> = new EventEmitter();

  public dropDownBoxObj: DropDownBoxObj;
  public dropDownBoxValue: Array<any>;

  public goods_keywords: any = '';
  public beginEndDate: any = '';
  public start_hour: string = '';
  public end_hour: string = '';


  constructor() { }

  ngOnInit() {
    this.dropDownBoxInit();
  }

  // 查询
  query() {
    this.onQuery.emit({
      goods_keywords: this.goods_keywords,
      start_date: this.beginEndDate.startDate,
      end_date: this.beginEndDate.endDate,
      start_hour: this.start_hour,
      end_hour: this.end_hour
    })
  }

  // 下拉组件初始化
  dropDownBoxInit() {
    this.dropDownBoxObj = new DropDownBoxObj(125, 26);
    this.dropDownBoxValue = [
      { name: '00:00' },
      { name: '01:00' },
      { name: '02:00' },
      { name: '03:00' },
      { name: '04:00' },
      { name: '05:00' },
      { name: '06:00' },
      { name: '07:00' },
      { name: '08:00' },
      { name: '09:00' },
      { name: '10:00' },
      { name: '11:00' },
      { name: '12:00' },
    ]
  }
}


