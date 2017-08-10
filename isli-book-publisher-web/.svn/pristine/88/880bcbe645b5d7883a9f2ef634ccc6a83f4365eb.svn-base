import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { DataTableObj } from '../../../../shared';

@Component({
  selector: 'tl-details-table',
  templateUrl: './details-table.component.html',
  styleUrls: ['./details-table.component.css']
})
export class DetailsTableComponent implements OnInit {

  @Output() onPageChange: EventEmitter<any> = new EventEmitter();

  @Input() dataTableValue;
  @Input() pagingBoxObj;

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
      { header: '用户昵称', field: 'nickname', ngStyle: { width: '17%' } },
      { header: '账号', field: 'account', ngStyle: { width: '16%' } },
      { header: '平台来源', field: 'platform', ngStyle: { width: '20%' } },
      { header: '设备ID', field: 'device', ngStyle: { width: '20%' } },
      { header: '下载时间', field: 'downtime', ngStyle: { width: '17%' } }
    ]);
  }
}
