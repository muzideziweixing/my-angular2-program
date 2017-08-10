import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

import { DownloadServicesService } from '../../download-service/download-services.service';
import { PagingBoxObj } from '../../../shared';

@Component({
  selector: 'tl-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Output() onPageChange: EventEmitter<any> = new EventEmitter();

  // @Input() goodsId;
  @Input() goodsInfo;

  public pagingBoxObj: PagingBoxObj;
  public dataTableValue: any;
  public dataTableLength: any;

  private queryInfo: any;

  constructor(private sms: DownloadServicesService) { }

  ngOnInit() {
    this.pagingBoxInit();
    this.getDataTableValue(this.goodsInfo.id, this.pagingBoxObj.page, this.pagingBoxObj.rows, this.queryInfo);
  }

  // 搜索
  query(event) {
    this.queryInfo = event;
    this.getDataTableValue(this.goodsInfo.id, this.pagingBoxObj.page, this.pagingBoxObj.rows, this.queryInfo);
  }

  // 获取 - 详情
  getDataTableValue(id: any, page: number, rows: number, args?: any) {
    this.sms.getDownloadProductDetailsValue(id, page, rows, args).then((respObj) => {
      this.dataTableValue = respObj.data.arr;
      this.dataTableLength = respObj.data.length;
      this.pagingBoxObj = new PagingBoxObj(this.pagingBoxObj.page, this.dataTableLength,
        this.pagingBoxObj.rows, this.pagingBoxObj.first, this.pagingBoxObj.pageLinkSize);
    })
  }

  // 分页
  pageChange(event) {
    console.log(this.pagingBoxObj)
    if (!event.page || event.first === this.pagingBoxObj.first) {
      return;
    }
    this.pagingBoxObj.page = event.page;
    this.pagingBoxObj.first = event.first;
    this.getDataTableValue(this.goodsInfo.id, this.pagingBoxObj.page, this.pagingBoxObj.rows, this.queryInfo);
    // this.getDataTableValue(this.goodsId,event.page,event.rows,this.queryInfo);
  }

  // 分页初始化
  pagingBoxInit() {
    this.pagingBoxObj = new PagingBoxObj(1, 20, 10, 1, 5);
  }
}

