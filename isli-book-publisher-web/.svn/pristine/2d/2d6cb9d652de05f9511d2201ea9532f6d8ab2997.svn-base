import { Component, OnInit, Input } from '@angular/core';

import { FinanceService } from '../finance-service/finance.service';
import { PagingBoxObj } from '../../shared';

const ROWSINIT = 10;
const PAGEINIT = 1;
const FIRSTINIT = 1;
const PAGELINKSIZEINIT = 5;
const TOTALRECORDSINIT = 10;

@Component({
  selector: 'tl-checking-details',
  templateUrl: './checking-details.component.html',
  styleUrls: ['./checking-details.component.css']
})
export class CheckingDetailsComponent implements OnInit {
  @Input() detailsId;

  public pagingBoxObj: PagingBoxObj;
  public dataTableValue: Object;
  public statementDetailsInfo: Object;
  public checkStatementValueInfo: Object;
  public detailsName: string = '对账单';

  constructor(private sms: FinanceService) { }

  ngOnInit() {
    this.pagingBoxInit();
    this.getCheckDetailsTableValue(this.detailsId, PAGEINIT, ROWSINIT);
    this.getCheckStatementDetails(this.detailsId);
    this.getCheckStatementValue(this.detailsId);
  }

  // 获取 - 对账单概览
  getCheckStatementValue(details_id: string) {
    this.sms.getCheckStatementValue(details_id).then((respObj) => {
      console.log('----------------对账单概览-----------');
      console.log(respObj);
      this.checkStatementValueInfo = respObj.data;
    })
  }

  // 获取 - 对账单明细
  getCheckStatementDetails(details_id: string) {
    this.sms.getCheckStatementDetails(details_id).then((respObj) => {
      console.log('----------------对账单明细-----------');
      console.log(respObj);
      this.statementDetailsInfo = respObj.data;
    })
  }

  // 获取 - 列表
  getCheckDetailsTableValue(details_id: string, page: number, rows: number) {
    this.sms.getCheckDetailsTableValue(details_id, page, rows).then((respObj) => {
      console.log('----------------details respObj-----------');
      console.log(respObj);
      this.dataTableValue = respObj.data.arr;
      this.pagingBoxObj.totalRecords = respObj.data.length;
    })
  }

  pageChange(event) {
    if (!event.page || event.first === this.pagingBoxObj.first) {
      return;
    };
    // this.pagingBoxObj.first = event.first;
    this.getCheckDetailsTableValue(this.detailsId, event.page, ROWSINIT)
  }

  // 分页初始化
  pagingBoxInit() {
    this.pagingBoxObj = new PagingBoxObj(PAGEINIT, TOTALRECORDSINIT, ROWSINIT, FIRSTINIT, PAGELINKSIZEINIT);
  }

}
