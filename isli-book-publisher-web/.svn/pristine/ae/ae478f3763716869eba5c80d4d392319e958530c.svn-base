import { Component, OnInit } from '@angular/core';
import { DataTableObj, PagingBoxObj } from '../../shared';

@Component({
  selector: 'tl-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {

  public dataTableObj: DataTableObj;
  public dataTableValue: Array<any>;
  public pagingBoxObj: PagingBoxObj;

  constructor() { }

  ngOnInit() {
    this.dataTableInit();
    this.pagingBoxInit();
  }

  // 分页
  pageChange(event) {

  }

  // dataTable 列表-初始化数据
  dataTableInit() {
    this.dataTableObj = new DataTableObj([
      { template: 'serial_number', header: '序号', ngStyle: { width: '9%' } },
      { template: 'definite_message', header: '具体消息', ngStyle: { width: '84%' } },
      { template: 'oper', header: '操作', ngStyle: { width: '7%' } },
    ]);
  }

  // pagingBox 分页-初始化数据
  pagingBoxInit() {
    this.pagingBoxObj = new PagingBoxObj(1, 100, 10, 0, 5);
  }

}
