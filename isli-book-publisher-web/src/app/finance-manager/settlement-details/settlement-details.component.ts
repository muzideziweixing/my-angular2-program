import { Component, OnInit, Input } from '@angular/core';

import { FinanceService } from '../finance-service/finance.service';
import { PagingBoxObj } from '../../shared';

const ROWSINIT = 10;
const PAGEINIT = 1;
const FIRSTINIT = 1;
const PAGELINKSIZEINIT = 5;
const TOTALRECORDSINIT = 10;

@Component({
  selector: 'tl-settlement-details',
  templateUrl: './settlement-details.component.html',
  styleUrls: ['./settlement-details.component.css']
})
export class SettlementDetailsComponent implements OnInit {

  @Input() detailsId;
  @Input() detailsStatus;         // 结算成功显示结算凭证组件
  @Input() detailsInfo;

  public pagingBoxObj: PagingBoxObj;
  public dataTableValue: Object;
  public statementDetailsInfo: Object;
  // public checkStatementValueInfo: Object;
  public detailsName: string = '结算单';
  public settlementPrrofInfo: any;

  constructor(private sms: FinanceService) { }

  ngOnInit() {
    this.pagingBoxInit();
    this.getSettlementDetailsTableValue(this.detailsId, PAGEINIT, ROWSINIT);
    this.getSettlementStatementDetails(this.detailsId); 
    this.getSettlementProofInfo(this.detailsId);
  }

  // 获取 - 结算凭证
  getSettlementProofInfo(details_id: string) {
    this.sms.getSettlementProofInfo(details_id).then((respObj) => {
      console.log('----------------结算凭证-----------');
      console.log(respObj);
      this.settlementPrrofInfo = respObj.data;
    })
  }

  // 获取 - 结算单明细
  getSettlementStatementDetails(details_id: string) {
    this.sms.getSettlementStatementDetails(details_id).then((respObj) => {
      console.log('----------------对账单明细-----------');
      console.log(respObj);
      this.statementDetailsInfo = respObj.data;
    })
  }

  // 获取 - 列表
  getSettlementDetailsTableValue(details_id: string, page: number, rows: number) {
    this.sms.getSettlementDetailsTableValue(details_id, page, rows).then((respObj) => {
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
    this.getSettlementDetailsTableValue(this.detailsId, event.page, ROWSINIT)
  }

  // 分页初始化
  pagingBoxInit() {
    this.pagingBoxObj = new PagingBoxObj(PAGEINIT, TOTALRECORDSINIT, ROWSINIT, FIRSTINIT, PAGELINKSIZEINIT);
  }
}
