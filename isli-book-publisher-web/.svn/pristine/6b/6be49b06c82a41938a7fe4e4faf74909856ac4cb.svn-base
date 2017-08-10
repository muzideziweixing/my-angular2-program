import { Injectable } from '@angular/core';
import { HttpPBService, PromiseExt, RespObjModel } from '../../core';

import { PurchaseDataService } from './purchase-data.service'
import { PurchaseTableObj, PurchaseImageObj, PurchaseImageDetailsObj } from './purchase.model';

const PURCHASETABLELISTURL = 'purchaseTableListURL';
const PURCHASETABLEIMAGEURL = 'purchaseTableImageURL';
const PURCHASETABLELISTDETAILSURL = 'purchaseTableListDetailsURL';
const PURCHASIMAGEDETAILSURL = 'purchaseImageDetailsURL';
const PURCHASETOTALURL = 'purchaseTotalURL';
const PURCHASETABTOTALURL = 'purchaseTabTotalURL';

@Injectable()
export class PurchaseService {

  constructor(private http: PurchaseDataService) { }

  // 获取 - tab - 金额
  getTabTotalInfo() {
    return this.http.get(
      PURCHASETABTOTALURL,
      null,
      null
    )
  }

  // 获取 - 列表
  getDataTableListValue(page: number, rows: number, args?: PurchaseTableObj) {
    return this.http.get(
      PURCHASETABLELISTURL,
      null,
      Object.assign({ page: page, rows: rows }, args)
    ).then((respObj: any) => {
      return respObj;
    });
  }

  // 获取 - 列表详情
  getDateTableListDetails(id) {
    return this.http.get(
      PURCHASETABLELISTDETAILSURL,
      { id: id },
      null
    )
  }

  // 获取 - 图文
  getPurchaseTableImage(page: number, rows: number, args?: PurchaseImageObj) {
    return this.http.get(
      PURCHASETABLEIMAGEURL,
      null,
      Object.assign({ page: page, rows: rows }, args)
    ).then((respObj: any) => {
      return respObj;
    });
  }

  // 获取 - 图文详情
  getPurchaseImageDetails(id, page: number, rows: number, args?: PurchaseImageDetailsObj) {
    return this.http.get(
      PURCHASIMAGEDETAILSURL,
      { id: id },
      Object.assign({ page: page, rows: rows }, args)
    ).then((respObj: any) => {
      return respObj;
    });
  }

  // 获取 - 图文详情 - total
  getTotalMoney(id) {
    return this.http.get(
      PURCHASETOTALURL,
      null,
      null
    )
  }
}
