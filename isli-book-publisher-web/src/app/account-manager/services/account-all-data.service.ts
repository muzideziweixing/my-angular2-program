import { Injectable } from '@angular/core';
import { PromiseExt, RespObjModel } from "../../core/http/http.service";

const GET_DATA_TABLE_VALUE_URL = 'GET_DATA_TABLE_VALUE_URL';
const GET_DATA_TABLE_LENGTH_URL = 'GET_DATA_TABLE_LENGTH_URL';
const GET_ACCOUNT_INFO_URL = 'GET_ACCOUNT_INFO_URL';
const POST_ACCOUNT_INFO_URL = 'POST_ACCOUNT_INFO_URL';
const PUT_ACCOUNT_INFO_URL = 'PUT_ACCOUNT_INFO_URL';
const DELETE_ACCOUNT_INFO_URL = 'DELETE_ACCOUNT_INFO_URL';

@Injectable()
export class AccountAllDataService {

  private dataTableData:any;

  constructor() {
  }

  public get(url:string, pathParams?:any, queryParams?:any) {
    return new PromiseExt(new Promise((resolve, reject)=> {
      let data;
      if (url == GET_DATA_TABLE_VALUE_URL) {
        data = this.getAllDataTableValue(url, pathParams, queryParams);
      } else if (url == GET_DATA_TABLE_LENGTH_URL) {
        data = this.getAllDataTableLength(url, pathParams, queryParams);
      } else if (url == GET_ACCOUNT_INFO_URL) {
        data = this.getAccountInfo(url, pathParams, queryParams);
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

  public post(url:string, pathParams?:any, queryParams?:any, postParams?:any) {
    return new PromiseExt(new Promise((resolve, reject)=> {
      let data;
      if (url == POST_ACCOUNT_INFO_URL) {
        data = this.postAccountInfo(url, pathParams, queryParams, postParams);
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

  public put(url:string, pathParams?:any, queryParams?:any, postParams?:any) {
    return new PromiseExt(new Promise((resolve, reject)=> {
      let data;
      if (url == PUT_ACCOUNT_INFO_URL) {
        data = this.putAccountInfo(url, pathParams, queryParams, postParams);
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

  public delete(url:string, pathParams?:any, queryParams?:any) {
    return new PromiseExt(new Promise((resolve, reject)=> {
      let data;
      if (url == DELETE_ACCOUNT_INFO_URL) {
        data = this.deleteAccount(url, pathParams, queryParams);
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

  //获取 列表Value
  public getAllDataTableValue(url:string, pathParams?:any, queryParams?:any) {
    if (!this.dataTableData) {
      this.dataTableData = this.dataTableDataInit(100);
    }
    return this.getDataTable(queryParams.page, queryParams.rows);
  }

  //获取 列表Length
  public getAllDataTableLength(url:string, pathParams?:any, queryParams?:any) {
    if (!this.dataTableData) {
      this.dataTableData = this.dataTableDataInit(100);
    }
    return this.dataTableData.length;
  }

  //获取账户信息
  public getAccountInfo(url:string, pathParams?:any, queryParams?:any) {
    return 'GET_ACCOUNT_INFO_URL';
    //return {};
  }

  //创建新的账户
  public postAccountInfo(url:string, pathParams?:any, queryParams?:any, postParams?:any) {
    return 'POST_ACCOUNT_INFO_URL';
    //return null;
  }

  //更新账户信息
  public putAccountInfo(url:string, pathParams?:any, queryParams?:any, postParams?:any) {
    return 'PUT_ACCOUNT_INFO_URL';
    //return null;
  }

  //删除账户
  public deleteAccount(url:string, pathParams?:any, queryParams?:any) {
    return 'DELETE_ACCOUNT_INFO_URL';
    //return null
  }


  dataTableDataInit(length) {
    let obj = {account_id: 0, account_title: '账户名称', account_role: '0', update_time: new Date().getTime()};
    let arr = [];
    for (let i = 0; i < length; i++) {
      obj.account_id += 1;
      obj.update_time += 1000;
      let newObj = {
        account_id: obj.account_id,
        account_title: obj.account_title,
        account_role: Math.floor(Math.random()*3)+'',
        update_time: obj.update_time
      };
      arr.push(newObj);
    }
    return arr;
  }


  getDataTable(page, rows) {
    return this.dataTableData.slice((page-1)*rows,(page-1)*rows+rows);
    //return null;
  }


}
