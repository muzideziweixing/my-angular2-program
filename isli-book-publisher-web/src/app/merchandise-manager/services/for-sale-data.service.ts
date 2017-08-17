import { Injectable } from '@angular/core';
import { PromiseExt, RespObjModel } from "../../core/http/http.service";

const GET_FOR_DATA_TABLE_URL = 'GET_FOR_DATA_TABLE_URL';
const GET_FOR_EDIT_INFO_URL = 'GET_FOR_EDIT_INFO_URL';
const GET_FOR_PUT_AWAY_URL = 'GET_FOR_PUT_AWAY_URL';

@Injectable()
export class ForSaleDataService {

  private dataTableData:any;

  constructor() {
  }

  public get(url:string, pathParams?:any, queryParams?:any) {
    return new PromiseExt(new Promise((resolve, reject)=> {
      let data;
      if (url == GET_FOR_DATA_TABLE_URL) {
        data = this.getForSaleDataTableValue(url, pathParams, queryParams);
      }else if(url == GET_FOR_EDIT_INFO_URL){
        data = this.getEditInfo(url, pathParams, queryParams);
      }else if(url == GET_FOR_PUT_AWAY_URL){
        data = this.getPutAway(url, pathParams, queryParams);
      }
      if (data) {
        setTimeout(()=> {
          resolve(new RespObjModel('0', 'ok', data));
        }, 1000);
        return;
      }
      setTimeout(()=> {
        reject(new RespObjModel('11111111', 'no data', null));
      }, 1000);
    }))

  }

  //待售列表数据请求
  public getForSaleDataTableValue(url:string, pathParams?:any, queryParams?:any) {
    if (!this.dataTableData) {
      this.dataTableData = this.dataTableDataInit(100);
    }
    return this.getDataTableValue(queryParams.page, queryParams.rows);
  }

  //获取商品信息
  public getEditInfo(url:string, pathParams?:any, queryParams?:any){
    return {};
    //return null;
  }

  //上架请求
  public getPutAway(url:string, pathParams?:any, queryParams?:any){
    return {};
    //return null;
  }





  //------------------ 数据模拟 --------------------
  dataTableDataInit(length) {
    let obj = {
      goods_id: 0,
      goods_name: '帝尊',
      goods_price: 0,
      update_time: new Date().getTime(),
    };
    let arr = [];
    for (let i = 0; i < length; i++) {
      obj.goods_id += 1;
      obj.goods_price += 1;
      obj.update_time += 1000;
      let newObj = {
        goods_id: obj.goods_id,
        goods_name: obj.goods_name+obj.goods_id,
        goods_price: obj.goods_price,
        update_time: obj.update_time,
        strategy: Math.floor(Math.random() * 6) + '',
        status: Math.floor(Math.random() * 4) + '',
      };
      arr.push(newObj);
    }
    return arr;
  }

  getDataTableValue(page, rows) {
    console.log(page);
    console.log(rows);
    console.log(this.dataTableData);
    //return null;
    return this.dataTableData.slice((page - 1) * rows, (page - 1) * rows + rows);
  }
}
