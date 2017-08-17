import { Injectable } from '@angular/core';
import { AccountAllDataService } from './account-all-data.service';
import { PromiseExt, RespObjModel } from '../../core';

const GET_DATA_TABLE_VALUE_URL = 'GET_DATA_TABLE_VALUE_URL';
const GET_DATA_TABLE_LENGTH_URL = 'GET_DATA_TABLE_LENGTH_URL';
const GET_ACCOUNT_INFO_URL = 'GET_ACCOUNT_INFO_URL';
const POST_ACCOUNT_INFO_URL = 'POST_ACCOUNT_INFO_URL';
const PUT_ACCOUNT_INFO_URL = 'PUT_ACCOUNT_INFO_URL';
const DELETE_ACCOUNT_INFO_URL = 'DELETE_ACCOUNT_INFO_URL';

@Injectable()
export class AccountAllService {

  constructor(private as:AccountAllDataService) {
  }

  //获取 列表
  public getAllDataTableValue(page:number, rows:number, queryData?:any):PromiseExt<RespObjModel> {
    return this.as.get(GET_DATA_TABLE_VALUE_URL, null, {page: page, rows: rows});
  }

  //获取 列表
  public getAllDataTableLength(queryData?:any):PromiseExt<RespObjModel> {
    return this.as.get(GET_DATA_TABLE_LENGTH_URL);
  }

  //获取账户信息
  public getAccountInfo(accountId:any) {
    return this.as.get(GET_ACCOUNT_INFO_URL);
  }

  public saveAccountInfo(isPut:boolean, postData?:any) {
    if (isPut) {
      return this.putAccountInfo(postData);
    }
    return this.postAccountInfo(postData);
  }

  //创建新的账户
  public postAccountInfo(postData?:any) {
    return this.as.post(POST_ACCOUNT_INFO_URL, null, null, postData);
  }

  //更新账户信息
  public putAccountInfo(postData?:any) {
    return this.as.put(PUT_ACCOUNT_INFO_URL, null, null, postData);
  }

  //删除账户
  public deleteAccount(pathData?:any) {
    return this.as.delete(DELETE_ACCOUNT_INFO_URL, null, null);
  }
}
