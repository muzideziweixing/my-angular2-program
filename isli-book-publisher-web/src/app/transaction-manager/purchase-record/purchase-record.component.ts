import { Component, OnInit } from '@angular/core';

import { PurchaseService } from '../purchase-service/purchase.service'
import { PagingBoxObj } from '../../shared';

const IMAGELISTROWS = 9;
const ROWSINIT = 10;
const PAGEINIT = 1;
const FIRSTINIT = 1;
const PAGELINKSIZEINIT = 5;
const TOTALTRECORDSINIT = 10;

@Component({
  selector: 'tl-purchase-record',
  templateUrl: './purchase-record.component.html',
  styleUrls: ['./purchase-record.component.css']
})
export class PurchaseRecordComponent implements OnInit {

  public recordFlags: string = 'RECORD';
  public purchaseTabsFlags: string = 'LIST';
  public detailsFlags: string = 'false';

  public pagingBoxObj: PagingBoxObj;

  public dataTableValue: Array<any>;
  public dataTableDetails: Array<any>;
  public dataTableLength: number;
  public imageListValue: Array<any>;
  public imageListLength: number;

  public queryInfo: Array<any>;
  public goodsInfo: Array<any>;
  public tabTotalInfo: Array<any>;

  constructor(private sms: PurchaseService) { }

  ngOnInit() {
    this.paginateObjInit();
    this.getTabTotal();
    this.getDateTableListValue(PAGEINIT, ROWSINIT);
  }

  // 查询
  query(event) {
    console.log('--------------query------------------');
    console.log(event);
    this.queryInfo = event;
    this.getDateTableListValue(this.pagingBoxObj.page, ROWSINIT, this.queryInfo);
    this.getImageListValue(this.pagingBoxObj.page, IMAGELISTROWS, this.queryInfo);
  }

  // tab - 列表
  tabChangeList() {
    this.purchaseTabsFlags = 'LIST';
    this.getDateTableListValue(PAGEINIT, ROWSINIT, this.queryInfo);
  }

  // tab - 图文
  tabChangeImageText() {
    this.purchaseTabsFlags = 'IMAGE';
    this.getImageListValue(PAGEINIT, IMAGELISTROWS, this.queryInfo);
  }

  // 获取 - tab -金额
  getTabTotal() {
    this.sms.getTabTotalInfo().then((respObj) => {
      this.tabTotalInfo = respObj.data;
      console.log('----------------tabTotalInfo---------------');
      console.log(this.tabTotalInfo)
    })
  }

  // 获取 - 列表
  getDateTableListValue(page, rows, arg?) {
    this.sms.getDataTableListValue(page, rows, arg).then((respObj) => {
      console.log('----------------list list ts-------');
      console.log(respObj);
      this.dataTableValue = respObj.data.arr;
      this.dataTableLength = respObj.data.length;
      this.pagingBoxObj = new PagingBoxObj(
        PAGEINIT, this.dataTableLength, ROWSINIT, this.pagingBoxObj.first, TOTALTRECORDSINIT
      )
    })
  }

  // 获取 - 列表详情
  clickDetails(event) {
    this.detailsFlags = 'true';
    console.log('----------------click details---------------');
    console.log(event)
    this.sms.getDateTableListDetails(event.id).then((respObj) => {
      this.dataTableDetails = respObj.data;
      console.log('----------------dataTableDetails---------------');
      console.log(this.dataTableDetails)
    })
  }

  // 详情 - 关闭
  clickClosed() {
    this.detailsFlags = 'false';
  }

  // 获取 - 图文
  getImageListValue(page, rows, arg?) {
    this.sms.getPurchaseTableImage(page, rows, arg).then((respObj) => {
      this.imageListValue = respObj.data.arr;
      this.imageListLength = respObj.data.length;
      this.pagingBoxObj = new PagingBoxObj(
        PAGEINIT, this.imageListLength, ROWSINIT, this.pagingBoxObj.first, TOTALTRECORDSINIT
      )
    })
  }

  // 获取 - 图文详情
  clickImgDetails(event) {
    this.recordFlags = 'DETAILS';
    this.goodsInfo = event;
  }

  // 分页
  pageChange(event) {
    if (!event.page || event.first === this.pagingBoxObj.first) {
      return;
    };
    // this.pagingBoxObj.page = event.page;
    // this.pagingBoxObj.first = event.first;
    this.getDateTableListValue(event.page, ROWSINIT, this.queryInfo);
  }

  // 分页 - 图文
  imgPageChange(event) {
    if (!event.page || event.first === this.pagingBoxObj.first) {
      return;
    };
    this.getImageListValue(event.page, IMAGELISTROWS, this.queryInfo)
  }

  // 分页初始化
  paginateObjInit() {
    this.pagingBoxObj = new PagingBoxObj(PAGEINIT, TOTALTRECORDSINIT, ROWSINIT, FIRSTINIT, PAGELINKSIZEINIT);
  }
}
