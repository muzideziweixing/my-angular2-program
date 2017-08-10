import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataTableObj, PagingBoxObj } from '../../../shared';

@Component({
  selector: 'tl-account-all-data-table',
  templateUrl: './account-all-data-table.component.html',
  styleUrls: ['./account-all-data-table.component.css']
})
export class AccountAllDataTableComponent implements OnInit {

  @Output() onPageChange: EventEmitter<any> = new EventEmitter();
  @Output() onEdit: EventEmitter<any> = new EventEmitter();
  @Output() onDelete: EventEmitter<any> = new EventEmitter();

  @Input() dataTableValue: Array<any>;

  public dataTableObj: DataTableObj;
  public pagingBoxObj: PagingBoxObj;

  constructor() {
  }

  ngOnInit() {
    this.dataTableInit();
    this.pagingBoxInit();
  }

  // 分页改变事件
  pageChange(event) {
    this.onPageChange.emit();
  }

  // 编辑
  edit(event) {
    this.onEdit.emit('edit');
  }

  // 删除
  delete(event) {
    this.onDelete.emit('delete');
  }

  // dataTable 列表-初始化数据
  dataTableInit() {
    this.dataTableObj = new DataTableObj([
      { template: 'serial_number', header: '序号', ngStyle: { width: '10%' } },
      { template: 'account_title', header: '账户名称', ngStyle: { width: '35%' } },
      { template: 'account_id', header: '账户ID', ngStyle: { width: '25%' } },
      { template: 'account_role', header: '账户角色', ngStyle: { width: '15%' } },
      { template: 'oper', header: '操作', ngStyle: { width: '15%' } },
    ]);
  }

  // pagingBox 分页-初始化数据
  pagingBoxInit() {
    this.pagingBoxObj = new PagingBoxObj(1, 100, 10, 0, 5);
  }

}
