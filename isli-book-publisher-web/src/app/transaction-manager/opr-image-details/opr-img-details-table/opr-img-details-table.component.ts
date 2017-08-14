import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DataTableObj } from '../../../shared';

@Component({
  selector: 'tl-opr-img-details-table',
  templateUrl: './opr-img-details-table.component.html',
  styleUrls: ['./opr-img-details-table.component.css']
})
export class OprImgDetailsTableComponent implements OnInit {

  @Output() onPageChange: EventEmitter<any> = new EventEmitter();

  @Input() dataTableValue: Array<any>;
  @Input() pagingBoxObj: Array<any>;

  public dataTableObj: DataTableObj;

  constructor() { }

  ngOnInit() {
    this.dataTableInit();
  }

  // 分页
  pageChange(event) {
    this.onPageChange.emit(event);
  }

  // 初始化数据
  dataTableInit() {
    this.dataTableObj = new DataTableObj([
      { header: '序号', template: 'serial_number', ngStyle: { width: '10%' }, },
      { header: '读者昵称', template: 'nickname', ngStyle: { width: '25%' } },
      { header: '读者账号', template: 'account', ngStyle: { width: '14%' } },
      { header: '读者设备信息', template: 'device', ngStyle: { width: '21%' } },
      { header: '交易价格', template: 'price', ngStyle: { width: '10%' } },
      { header: '本次收益', template: 'earnings', ngStyle: { width: '10%' } },
      { header: '交易手续费', template: 'charge', ngStyle: { width: '10%' } }
    ]);
  }

}
