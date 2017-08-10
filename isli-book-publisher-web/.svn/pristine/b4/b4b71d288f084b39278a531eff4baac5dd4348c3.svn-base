import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { PurchaseService } from '../purchase-service/purchase.service';
import { PagingBoxObj } from '../../shared';

const ROWSINIT = 10;
const PAGEINIT = 1;
const FIRSTINIT = 1;
const PAGELINKSIZEINIT = 5;
const TOTALTRECORDSINIT = 10;

@Component({
  selector: 'tl-opr-image-details',
  templateUrl: './opr-image-details.component.html',
  styleUrls: ['./opr-image-details.component.css']
})
export class OprImageDetailsComponent implements OnInit {

  // @Input() goodsId;
  @Input() goodsInfo;

  public pagingBoxObj: PagingBoxObj;
  public dataTableValue: any;
  public dataTableLength: number;
  public totalInfo: any;

  public queryInfo;

  constructor(private sms: PurchaseService) { }

  ngOnInit() {
    this.paginateObjInit();
    this.getDetailTableValue(this.goodsInfo.id, PAGEINIT, ROWSINIT)
    this.getTotalMoney(this.goodsInfo.id);
  }

  query(event) {
    console.log('------------query ----------------')
    console.log(event)
    this.queryInfo = event;
  }

  // 获取 - 列表
  getDetailTableValue(id, page, rows, args?) {
    this.sms.getPurchaseImageDetails(this.goodsInfo.id, page, rows, args).then((respObj) => {
      console.log('------------respObj ----------------')
      console.log(respObj);
      this.dataTableValue = respObj.data.arr;
      this.dataTableLength = respObj.data.length;
      this.pagingBoxObj = new PagingBoxObj(
        PAGEINIT, this.dataTableLength, ROWSINIT, this.pagingBoxObj.first, PAGELINKSIZEINIT
      )
    })
  }

  // 获取 - 列表 - 总额
  getTotalMoney(id) {
    this.sms.getTotalMoney(this.goodsInfo.id).then((respObj) => {
      this.totalInfo = respObj.data;
    })
  }

  // 分页
  pageChange(event) {
    if (!event.page || event.first === this.pagingBoxObj.first) {
      return;
    };
    this.getDetailTableValue(this.goodsInfo.id, event.page, ROWSINIT, this.queryInfo);
  }

  // 分页初始化
  paginateObjInit() {
    this.pagingBoxObj = new PagingBoxObj(PAGEINIT, TOTALTRECORDSINIT, ROWSINIT, FIRSTINIT, PAGELINKSIZEINIT);
  }

}
