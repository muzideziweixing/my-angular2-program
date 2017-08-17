import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataTableObj, PagingBoxObj } from '../../../shared';
import { AccountAllService } from '../../services/account-all.service';

@Component({
  selector: 'tl-account-all-data-table',
  templateUrl: './account-all-data-table.component.html',
  styleUrls: ['./account-all-data-table.component.css']
})
export class AccountAllDataTableComponent implements OnInit {

  @Output() onHandleError:EventEmitter<any> = new EventEmitter();
  @Output() onEdit:EventEmitter<any> = new EventEmitter();
  @Output() onDelete:EventEmitter<any> = new EventEmitter();

  public dataTableValue:Array<any>;

  public dataTableObj:DataTableObj;
  public pagingBoxObj:PagingBoxObj;

  constructor(private as:AccountAllService) {
  }

  ngOnInit() {
    this.dataTableInit();
    this.pagingBoxInit();
    this.pageChange({page: 1, rows: 10});
  }

  // 分页改变事件
  pageChange(event) {
    this.getDataTableLength();
    this.getDataTableValue(event.page, event.rows);
  }

  // 编辑
  edit(event,rowData) {
    this.onEdit.emit(rowData);
  }

  // 删除
  delete(event,rowData) {
    this.onDelete.emit(rowData);
  }

  // 列表-length dataTable长度请求
  getDataTableLength() {
    this.as.getAllDataTableLength().then((response)=> {
      this.pagingBoxObj.totalRecords=response.data;
    }, (error:any)=> {
      //this.dataTableValue = null;
      //this.handleError(error);
    })
  }

  // 列表-value dataTable数据请求
  getDataTableValue(page:number, rows:number) {
    this.as.getAllDataTableValue(page, rows).then((response)=> {
      this.dataTableValue = response.data || null;
    }, (error:any)=> {
      this.dataTableValue = null;
      this.onHandleError.emit(error);
    })
  }

  // dataTable 列表-初始化数据
  dataTableInit() {
    this.dataTableObj = new DataTableObj([
      {template: 'serial_number', header: '序号', ngStyle: {width: '10%'}},
      {template: 'account_title', header: '账户名称', ngStyle: {width: '35%'}},
      {template: 'account_id', header: '账户ID', ngStyle: {width: '25%'}},
      {template: 'account_role', header: '账户角色', ngStyle: {width: '15%'}},
      {template: 'oper', header: '操作', ngStyle: {width: '15%'}},
    ]);
  }

  // pagingBox 分页-初始化数据
  pagingBoxInit(totalRecords?:number) {
    this.pagingBoxObj = new PagingBoxObj(1, totalRecords||0, 10, 0, 5);
  }

  getAccountRole(account_role) {
    if (account_role == '0') {
      return '超级管理员';
    } else if (account_role == '1') {
      return '运营管理员';
    } else if (account_role == '2') {
      return '财务管理员';
    }
  }

}
