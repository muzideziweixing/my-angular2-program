import { Injectable } from '@angular/core';
import { OnSaleDataService } from './on-sale-data.service';

const GET_ON_DATA_TABLE_URL = 'GET_ON_DATA_TABLE_URL';
const GET_ON_EDIT_INFO_URL = 'GET_ON_EDIT_INFO_URL';
const GET_ON_SOLD_OUT_URL = 'GET_ON_SOLD_OUT_URL';

@Injectable()
export class OnSaleService {

  constructor(private http:OnSaleDataService) {
  }

  //在售列表数据请求
  public getOnSaleDataTableValue(page:number, rows:number, queryParams?:any) {
    queryParams = queryParams || {};
    return this.http.get(GET_ON_DATA_TABLE_URL, null, Object.assign(queryParams, {page: page, rows: rows}));
  }

  //获取商品信息
  getEditInfo(goodsId:number) {
    return this.http.get(GET_ON_EDIT_INFO_URL, {goodsId: goodsId}, null);
  }

  //下架请求
  public getSoldOut(goodsId:number) {
    return this.http.get(GET_ON_SOLD_OUT_URL, {goodsId: goodsId}, null);
  }
}
