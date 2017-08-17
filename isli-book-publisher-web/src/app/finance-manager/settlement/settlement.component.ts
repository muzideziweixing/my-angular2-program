import { Component, OnInit } from '@angular/core';

import { FinanceService } from '../finance-service/finance.service';
import { PagingBoxObj } from '../../shared';

const ROWSINIT = 10;
const PAGEINIT = 1;
const FIRSTINIT = 1;
const PAGELINKSIZEINIT = 5;
const TOTALRECORDSINIT = 10;

@Component({
  selector: 'tl-settlement',
  templateUrl: './settlement.component.html',
  styleUrls: ['./settlement.component.css']
})
export class SettlementComponent implements OnInit {

  public queryInfo: Object;
  public dataTableValue: Array<any>;
  public pagingBoxObj: PagingBoxObj;
  public detailsId: string;
  public detailsStatus: string;
  public detailsInfo: Array<any>;
  public settlementDetailsFlag: boolean = false;

  constructor(private sms: FinanceService) { }

  ngOnInit() {
    this.pagingBoxInit();
    this.getSettlementTableValue(PAGEINIT, ROWSINIT);
  }

  query(event) {
    console.log('------------------query---------------');
    console.log(event);
    this.queryInfo = event;
  }

  // 获取 - 结算列表
  getSettlementTableValue(page, rows, args?) {
    this.sms.getSettlementTableValue(page, rows, args).then((respObj) => {
      console.log('-----------settlement respObj--------------');
      console.log(respObj);
      this.dataTableValue = respObj.data.arr;
      this.pagingBoxObj.totalRecords = respObj.data.length;
    })
  }

  // 分页 - 结算列表
  pageChange(event) {
    if (!event.page || event.first === this.pagingBoxObj.first) {
      return;
    };
    console.log('-----------page change----------');
    console.log(event);
    // this.pagingBoxObj.first = event.first;
    this.getSettlementTableValue(event.page, ROWSINIT, this.queryInfo)
  }

  // 详情
  clickDetails(event) {
    console.log('----------------details event -----------');
    console.log(event);
    this.settlementDetailsFlag = true;
    this.detailsId = event.id;
    this.getDetailsStatus(event.status);
    this.detailsInfo = event;
  }

  // 结算成功
  getDetailsStatus(status) {
    if (status == "结算成功") {
      return this.detailsStatus = 'success';
    }
  }

  // 分页初始化
  pagingBoxInit() {
    this.pagingBoxObj = new PagingBoxObj(PAGEINIT, TOTALRECORDSINIT, ROWSINIT, FIRSTINIT, PAGELINKSIZEINIT);
  }
}
