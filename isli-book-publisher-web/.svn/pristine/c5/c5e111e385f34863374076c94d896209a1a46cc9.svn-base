import { Injectable } from '@angular/core';
import { PromiseExt, RespObjModel } from "../../core/http/http.service";

const ON_SALE_URL='ON_SALE_URL';

@Injectable()
export class OnSaleDataService {

  constructor() { }

  public get(url:string,pathData?:any,queryData?:string){
    let data;
    if(url==ON_SALE_URL){
      data=this.getOnSaleDataTableValue();
    }
    return new PromiseExt(Promise.resolve(new RespObjModel('0', 'success', data)));
  }

  public getOnSaleDataTableValue(){
    return [
      {goods_id:32,goods_name:'帝尊',goods_price:5,update_time:'2017-07-28 17:00:52',strategy:'2',path:[]},
      {goods_id:32,goods_name:'帝尊',goods_price:5,update_time:'2017-07-28 17:00:52',strategy:'2',path:[]},
      {goods_id:32,goods_name:'帝尊',goods_price:5,update_time:'2017-07-28 17:00:52',strategy:'2',path:[]}
    ]
  }

}
