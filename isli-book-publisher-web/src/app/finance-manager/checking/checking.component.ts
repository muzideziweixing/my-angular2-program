import { Component, OnInit } from '@angular/core';

import { FinanceService } from '../finance-service/finance.service';
import { PagingBoxObj } from '../../shared';

const ROWSINIT = 10;
const PAGEINIT = 1;
const FIRSTINIT = 1;
const PAGELINKSIZEINIT = 5;
const TOTALRECORDSINIT = 10;

@Component({
  selector: 'tl-checking',
  templateUrl: './checking.component.html',
  styleUrls: ['./checking.component.css']
})
export class CheckingComponent implements OnInit {

  public checkDetailsFlag: boolean = false;
  public pagingBoxObj: PagingBoxObj;
  public queryInfo: Object;
  public dataTableValue: Object; 
  public checkTotalBarValue: Object;
  public detailsId: string;

  constructor(private sms: FinanceService) { }

  ngOnInit() {
    this.pagingBoxInit();
    this.getCheckTableValue(PAGEINIT, ROWSINIT);
    this.getCheckTotalBarValue();
  }

  // 搜索
  query(event) {
    console.log('--------------------query----------------');
    console.log(event);
    this.queryInfo = event;
  }

  // 获取 - total
  getCheckTotalBarValue() {
    this.sms.getCheckTotalBarValue().then((respObj) => {
      this.checkTotalBarValue = respObj.data;
    });
  }

  // 获取 - 对账列表
  getCheckTableValue(page, rows, args?) {
    this.sms.getCheckTableValue(page, rows, args).then((respObj) => {
      console.log('-----------check respObj--------------');
      console.log(respObj);
      this.dataTableValue = respObj.data.arr;
      this.pagingBoxObj.totalRecords = respObj.data.length; 
    })
  }

  // 详情
  clickDetails(event){
    console.log('-----------details click----------');
    console.log(event);
    this.checkDetailsFlag = true;
    this.detailsId = event.id; 
  }

  // 分页 - 自主对账 - 列表
  pageChange(event) {
    if (!event.page || event.first === this.pagingBoxObj.first) {
      return;
    };
    console.log('-----------page change----------');
    console.log(event);
    // this.pagingBoxObj.first = event.first;
    this.getCheckTableValue(event.page, ROWSINIT, this.queryInfo) 
  }

  // 分页初始化
  pagingBoxInit() {
    this.pagingBoxObj = new PagingBoxObj(PAGEINIT, TOTALRECORDSINIT, ROWSINIT, FIRSTINIT, PAGELINKSIZEINIT);
  }
}
