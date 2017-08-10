import { Injectable } from '@angular/core';
import { AccountAllDataService } from './account-all-data.service';

const DATA_TABLE_URL='DATA_TABLE_URL';
const ADD_URL='ADD_URL';
const ACCOUNT_INFO_URL='ACCOUNT_INFO_URL';
const DELETE_URL='DELETE_URL';

@Injectable()
export class AccountAllService {

  constructor(
    private as:AccountAllDataService
  ) {}

  //获取 列表
  public getAllDataTableValue(queryData?:any){
    return this.as.get(DATA_TABLE_URL);
  }

  //获取账户信息
  public getAccountInfo(accountId:any){
    return this.as.get(ADD_URL);
  }

  //创建账户
  public postAddAccount(postData){
    return this.as.post(ACCOUNT_INFO_URL,null,null,postData);
  }

  //删除账户
  public getDeleteAccount(postData){
    return this.as.get(DELETE_URL,null,null);
  }
}
