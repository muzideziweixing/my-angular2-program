import { Injectable } from '@angular/core';

import { HttpPBService, PromiseExt, RespObjModel } from '../../core';
import { getArrData, getArrDateilsData } from './data';

const DOWNLOADPRODUCTLISTVALUEURL = 'downloadProductListValueURL';
const DOWNLOADPRODUCTDETAILSVALUEURL = 'downloadProductDetailsValueURL';

@Injectable()
export class DownloadServiceDataService {

  private productListValue = getArrData();
  private productDetailsValue = getArrDateilsData();

  constructor() { }

  public get(url: string, pathParams?: any, queryParams?: any): PromiseExt<RespObjModel> {
    let data;
    if (url === DOWNLOADPRODUCTLISTVALUEURL) {
      data = this.getDownloadProductListValue(queryParams);
    } else if (url === DOWNLOADPRODUCTDETAILSVALUEURL) {
      data = this.getDownloadDetailsValue(queryParams);
    }
    return new PromiseExt(Promise.resolve(new RespObjModel('0', 'success', data)));
  }

  // 获取 - 列表
  public getDownloadProductListValue(queryParams?: any) {
    let start = (queryParams.page - 1) * queryParams.rows;
    let end = start + queryParams.rows;
    let arr = this.getArr(this.productListValue, queryParams);
    return { arr: arr.slice(start, end), length: arr.length };
  }

  // 获取 - 详情
  public getDownloadDetailsValue(queryParams?: any) {
    console.log(queryParams)
    let start = (queryParams.page - 1) * queryParams.rows;
    let end = start + queryParams.rows;
    let arr = this.getArr(this.productDetailsValue, queryParams);
    return { arr: arr.slice(start, end), length: arr.length };
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
