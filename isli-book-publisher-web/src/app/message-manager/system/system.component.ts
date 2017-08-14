import { Component, OnInit } from '@angular/core';

import { DataTableObj, PagingBoxObj } from '../../shared';

import { MessageService } from '../message-service/message.service'

const ROWSINIT = 10;
const PAGEINIT = 1;
const FIRSTINIT = 1;
const PAGELINKSIZEINIT = 5;
const TOTALTRECORDSINIT = 10;

@Component({
  selector: 'tl-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {

  public dataTableObj: DataTableObj;
  public dataTableValue: Array<any>;
  public pagingBoxObj: PagingBoxObj;
  public dataTableLength: number;

  constructor(private sms: MessageService) { }

  ngOnInit() {
    this.dataTableInit();
    this.pagingBoxInit();
    this.getNewsTableList(PAGEINIT, ROWSINIT);
  }

  // 分页
  pageChange(event) {
    if (!event.page || event.first === this.pagingBoxObj.first) {
      return;
    };
    console.log('-------------------page-------------');
    console.log(event);
    this.getNewsTableList(event.page, ROWSINIT);
  }

  // 获取 - 列表
  getNewsTableList(page, rows) {
    this.sms.getNewsTableListValue(page, rows).then((respObj) => {
      console.log('---------------news list-------------------');
      console.log(respObj);
      this.dataTableValue = respObj.data.arr;
      this.dataTableLength = respObj.data.length;
      this.pagingBoxObj = new PagingBoxObj(
        PAGEINIT, this.dataTableLength, ROWSINIT, this.pagingBoxObj.first, PAGELINKSIZEINIT
      )
    })
  }

  // 查看消息
  checkNews(rowData) {
    this.sms.postNewsCheck(rowData.id).then((respObj) => {
      console.log('---------------status-------------------');
      console.log(respObj);
      rowData.status = respObj.data.status;
    })
  }

  // 删除消息
  deleteNews(rowData) {
    this.sms.postNewsDelete(rowData.id).then(() => {
      console.log('-------------------delete uptate-------------');
      this.getNewsTableList(PAGEINIT, ROWSINIT)
    });
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
    this.pagingBoxObj = new PagingBoxObj(PAGEINIT, TOTALTRECORDSINIT, ROWSINIT, FIRSTINIT, PAGEINIT);
  }

}
