import { Injectable } from '@angular/core';
import { PromiseExt, RespObjModel } from "../../core/http/http.service";

const DATA_TABLE_URL='DATA_TABLE_URL';
const ADD_URL='ADD_URL';
const ACCOUNT_INFO_URL='ACCOUNT_INFO_URL';
const DELETE_URL='DELETE_URL';

@Injectable()
export class AccountAllDataService {

  constructor() { }

  public get(url:string,pathData?:any,queryData?:string){
    let data;
    if(url==DATA_TABLE_URL){
      data=this.getAllDataTableValue();
    }else  if(url==ACCOUNT_INFO_URL){
      data=this.getAccountInfo();
    }else  if(url==DELETE_URL){
      data='DELETE_URL';
    }
    return new PromiseExt(Promise.resolve(new RespObjModel('0', 'success', data)));
  }

  public post(url:string,pathData?:any,queryData?:string,postData?:any){
    let data;
    if(url==ADD_URL){
      data='ALL_ADD_URL';
    }
    return new PromiseExt(Promise.resolve(new RespObjModel('0', 'success', data)));
  }

  public getAllDataTableValue(){
    return [
      {account_id:32,account_title:'帝尊',account_role:'超级管理员',update_time:'2017-07-28 17:00:52'},
      {account_id:32,account_title:'帝尊',account_role:'超级管理员',update_time:'2017-07-28 17:00:52'},
      {account_id:32,account_title:'帝尊',account_role:'超级管理员',update_time:'2017-07-28 17:00:52'}
    ]
  }

  public getAccountInfo(){
    return {};
  }

}
