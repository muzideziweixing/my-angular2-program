import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DownloadServicesService } from '../../download-service/download-services.service';
import { PagingBoxObj } from '../../../shared';

const ROWSINIT = 11;
const PAGEINIT = 1;
const FIRSTINIT = 1;
const PAGELINKSIZEINIT = 5;
const TOTALTRECORDSINIT = 10;

@Component({
  selector: 'tl-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})

export class RecordComponent implements OnInit {

  @Output() onClickProductDetails: EventEmitter<any> = new EventEmitter();

  public productListValue: any;
  public productListLength: number;
  public pagingBoxObj: PagingBoxObj;
  public keywords: string;

  private productListSearchInfo: any;

  constructor(private sms: DownloadServicesService) { }

  ngOnInit() {
    this.pagingBoxObjInit();
    this.getProductListValue(PAGEINIT, ROWSINIT);
  }

  // 获取 - 列表
  getProductListValue(page, rows, args?) {
    this.sms.getDownloadProductListValue(page, rows, args).then((respObj) => {
      console.log('------------productListValue---------');
      console.log(respObj);
      this.productListValue = respObj.data.arr;
      this.productListLength = respObj.data.length;
      this.pagingBoxObj = new PagingBoxObj(
        PAGEINIT, this.productListLength, ROWSINIT, this.pagingBoxObj.first, PAGELINKSIZEINIT 
      )
    });
  }

  // 搜索
  productListSearch(event) {
    this.keywords = event.productKeywords;
    this.queryFn(event);
  }

  // 按书名
  clickTitle(event) {
    this.queryFn(event);
  }

  // 按次数
  clickNumber(event) {
    this.queryFn(event);
  }

  // 按时间
  clickTime(event) {
    this.queryFn(event);
  }

  // 查询
  queryFn(event) {
    this.productListSearchInfo = event;
    this.getProductListValue(this.pagingBoxObj.page, this.pagingBoxObj.rows, this.productListSearchInfo);
  }

  // 详情
  clickProductDetails(rowData) {
    this.onClickProductDetails.emit(rowData);
  }

  // 分页
  pageChange(event) {
    if (!event.page || event.first === this.pagingBoxObj.first) {
      return;
    }
    // this.pagingBoxObj.page = event.page;
    // this.pagingBoxObj.first = event.first;
    this.getProductListValue(event.page, ROWSINIT, this.productListSearchInfo);
  }

  // 分页初始化
  pagingBoxObjInit() {
    this.pagingBoxObj = new PagingBoxObj(PAGEINIT, TOTALTRECORDSINIT, ROWSINIT, FIRSTINIT, PAGELINKSIZEINIT);
  }
}
