import { Injectable } from '@angular/core';
import { ForSaleDataService } from './for-sale-data.service';

const GET_FOR_DATA_TABLE_URL = 'GET_FOR_DATA_TABLE_URL';
const GET_FOR_EDIT_INFO_URL = 'GET_FOR_EDIT_INFO_URL';
const GET_FOR_PUT_AWAY_URL = 'GET_FOR_PUT_AWAY_URL';

@Injectable()
export class ForSaleService {

  constructor(private http:ForSaleDataService) {
  }

  //待售列表数据请求
  public getForSaleDataTableValue(page:number, rows:number, queryParams?:any) {
    queryParams = queryParams || {};
    return this.http.get(GET_FOR_DATA_TABLE_URL, null, Object.assign(queryParams, {page: page, rows: rows}));
  }

  //获取商品信息
  getEditInfo(goodsId:number) {
    return this.http.get(GET_FOR_EDIT_INFO_URL, {goodsId: goodsId}, null);
  }

  //上架请求
  public getPutAway(goodsId:number) {
    return this.http.get(GET_FOR_PUT_AWAY_URL, {goodsId: goodsId}, null);
  }
}
