import { Injectable } from '@angular/core';

import { HttpPBService, PromiseExt, RespObjModel } from '../../core';
import { getArrData, purchaseDetailsInfo, getArrData2, getArrData3, purchaseTotal, purchaseTabTotal } from './data';

const PURCHASETABLELISTURL = 'purchaseTableListURL';
const PURCHASETABLEIMAGEURL = 'purchaseTableImageURL';
const PURCHASETABLELISTDETAILSURL = 'purchaseTableListDetailsURL';
const PURCHASIMAGEDETAILSURL = 'purchaseImageDetailsURL';
const PURCHASETOTALURL = 'purchaseTotalURL';
const PURCHASETABTOTALURL = 'purchaseTabTotalURL';

@Injectable()
export class PurchaseDataService {

  private purchaseTableValue = getArrData();
  private purchaseDetailsInfo = purchaseDetailsInfo;
  private purchaseTotal = purchaseTotal;
  private purchaseTabTotal = purchaseTabTotal;
  private purchaseTableImage = getArrData2();
  private purchaseImageDetails = getArrData3();

  constructor() { }

  public get(url: string, pathParams?: any, queryParams?: any): PromiseExt<RespObjModel> {
    let data;
    if (url === PURCHASETABLELISTURL) {
      data = this.getPurchaseTableValue(queryParams);
    } else if (url === PURCHASETABLEIMAGEURL) {
      data = this.getPurchaseTableImage(queryParams);
    } else if (url === PURCHASETABLELISTDETAILSURL) {
      data = this.getPurchaseTableDetails(queryParams);
    } else if (url === PURCHASIMAGEDETAILSURL) {
      data = this.getPurchaseImageDetails(queryParams);
    } else if (url === PURCHASETOTALURL) {
      data = this.getTotalMoney();
    } else if (url === PURCHASETABTOTALURL) {
      data = this.getTabTotalMoney();
    }
    return new PromiseExt(Promise.resolve(new RespObjModel('0', 'success', data)));
  }

  // 获取 - tab - 金额
  getTabTotalMoney() {
    return this.purchaseTabTotal;
  }

  // 获取 - 列表
  public getPurchaseTableValue(queryParams?: any) {
    let start = (queryParams.page - 1) * queryParams.rows;
    let end = start + queryParams.rows;
    let arr = this.getArr(this.purchaseTableValue, queryParams);
    return { arr: arr.slice(start, end), length: arr.length };
  }

  // 获取 - 列表详情
  public getPurchaseTableDetails(queryParams) {
    return this.purchaseDetailsInfo;
  }

  // 获取 - 图文
  public getPurchaseTableImage(queryParams?: any) {
    let start = (queryParams.page - 1) * queryParams.rows;
    let end = start + queryParams.rows;
    let arr = this.getArr(this.purchaseTableImage, queryParams);
    return { arr: arr.slice(start, end), length: arr.length };
  }

  // 获取 - 图文详情
  public getPurchaseImageDetails(queryParams?: any) {
    let start = (queryParams.page - 1) * queryParams.rows;
    let end = start + queryParams.rows;
    let arr = this.getArr(this.purchaseImageDetails, queryParams);
    return { arr: arr.slice(start, end), length: arr.length };
  }

  // 获取 - 图文详情 - total
  getTotalMoney() {
    console.log('------------purchaseTotal ----------------')
    console.log(this.purchaseTotal)
    return this.purchaseTotal;
  }

  // 搜索查询函数
  private getArr(arr, args) {
    let newArr = [];
    let _args = [];
    if (args) {
      for (let arg in args) {
        for (let obj of arr) {
          if (obj[arg] && obj[arg].substr(0, 4) === args[arg].substr(0, 4)) {
            newArr.push(obj);
          }
        }
        _args[_args.length] = arg;
      }
      if ((args.bookTitle === '' && !newArr.length) || _args.length <= 2) {
        return arr;
      }
      return newArr;
    }
    return arr;
  }
}


