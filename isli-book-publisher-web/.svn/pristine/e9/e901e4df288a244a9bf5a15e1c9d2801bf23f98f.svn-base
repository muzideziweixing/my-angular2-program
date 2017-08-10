import { Injectable } from '@angular/core';
import { PromiseExt, RespObjModel } from "../../core/http/http.service";

const FOR_SALE_URL='FOR_SALE_URL';

@Injectable()
export class ForSaleDataService {

  constructor() { }

  public get(url:string,pathData?:any,queryData?:string){
    let data;
    if(url==FOR_SALE_URL){
      data=this.getForSaleDataTableValue();
    }
    return new PromiseExt(Promise.resolve(new RespObjModel('0', 'success', data)));
  }

  public getForSaleDataTableValue(){
    return [
      {goods_id:32,goods_name:'帝尊',goods_price:5,update_time:'2017-07-28 17:00:52',strategy:'2',status:'0'},
      {goods_id:32,goods_name:'帝尊',goods_price:5,update_time:'2017-07-28 17:00:52',strategy:'2',status:'1'},
      {goods_id:32,goods_name:'帝尊',goods_price:5,update_time:'2017-07-28 17:00:52',strategy:'2',status:'2'}
    ]
  }
}
