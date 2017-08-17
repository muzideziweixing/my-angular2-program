import { Injectable } from '@angular/core';
import { PromiseExt, RespObjModel } from '../../core';

import { getArrData, checkTotalBarInfo, getArrData2, statementDetailsInfo, checkStatementInfo, getArrData3, SettlementProofInfo } from './data';

const CHECkTABLELISTURL = 'checkTableListURL';                            // 自主对账 - 列表
const CHECKTOTALBARINFOURL = 'checkTotalBarInfoURL';                      // 自主对账 - total
const CHECKSTATEMENTVALUEURL = 'checkStatementvalueURL';                  // 自主对账 - 对账单概览
const CHECKSTATEMENTDETAILSURL = 'CheckStatementDetailsURL';              // 对账单明细
const CHECKDETAILSTABLEVALUEURL = 'CheckDetailsTableValueURL';            // 自主对账 - 详情列表
const SETTLEMENTTABLELISTURL = 'settlementTableListURL';                  // 自主结算 - 列表
const SETTLEMENTDETAILSTABLEVALUEURL = 'settlementDetailsTableValueURL';  // 自主结算 - 详情列表
const SETTLEMENTSTATEMENTDETAILSURL = 'settlementStatementDetailsURL';    // 结算单明细
const SETTLEMENTPROOFINFOURL = 'settlementProofInfoURL';                  // 结算凭证

@Injectable()
export class FinanceDataService {

  private checkTableValue = getArrData();
  private checkDetailsTableValue = getArrData2();
  private checkTotalBarInfo = checkTotalBarInfo;
  private statementDetailsInfo = statementDetailsInfo;
  private checkStatementInfo = checkStatementInfo;
  private settlementTableValue = getArrData3();
  private SettlementProofInfo = SettlementProofInfo;

  constructor() { }

  public get(url: string, pathParams?: any, queryParams?: any): PromiseExt<RespObjModel> {
    let data;
    if (url === CHECkTABLELISTURL) {
      data = this.getCheckTableValue(queryParams);
    } else if (url === CHECKTOTALBARINFOURL) {
      data = this.getCheckTotalBarValue();
    } else if (url === CHECKDETAILSTABLEVALUEURL) {
      data = this.getCheckDetailsTableValue(queryParams);
    } else if (url === CHECKSTATEMENTDETAILSURL) {
      data = this.getCheckStatementDetails(queryParams);
    } else if (url === CHECKSTATEMENTVALUEURL) {
      data = this.getCheckStatementValue(queryParams);
    } else if (url === SETTLEMENTTABLELISTURL) {
      data = this.getSettlementTableValue(queryParams);
    } else if (url === SETTLEMENTDETAILSTABLEVALUEURL) {
      data = this.getSettlementDetailsTableValue(queryParams);
    } else if (url === SETTLEMENTSTATEMENTDETAILSURL) {
      data = this.getSettlementStatementDetails(queryParams);
    } else if (url === SETTLEMENTPROOFINFOURL) {
      data = this.getSettlementProofInfo(queryParams);
    }
    return new PromiseExt(Promise.resolve(new RespObjModel('0', 'success', data)));
  }

  // 自主对账 - 交易总额
  public getCheckTotalBarValue() {
    console.log(this.checkTableValue)
    return this.checkTotalBarInfo;
  }

  // 自主对账 列表
  public getCheckTableValue(queryParams: any) {
    console.log('--------check queryParams--------');
    console.log(queryParams);
    let start = (queryParams.page - 1) * queryParams.rows;
    let end = start + queryParams.rows;
    let arr = this.getArr(this.checkTableValue, queryParams);
    return { arr: arr.slice(start, end), length: arr.length };
  }

  // 对账单概览
  public getCheckStatementValue(id) {
    return this.checkStatementInfo;
  }

  // 对账单明细
  public getCheckStatementDetails(id) {
    return this.statementDetailsInfo;
  }

  // 自主对账 - 详情列表
  public getCheckDetailsTableValue(queryParams: any) {
    console.log('--------check details queryParams--------');
    console.log(queryParams);
    let start = (queryParams.page - 1) * queryParams.rows;
    let end = start + queryParams.rows;
    let arr = this.getArr(this.checkDetailsTableValue, queryParams);
    return { arr: arr.slice(start, end), length: arr.length };
  }

  // 自主结算 列表
  public getSettlementTableValue(queryParams: any) {
    console.log('--------settlement queryParams--------');
    console.log(queryParams);
    let start = (queryParams.page - 1) * queryParams.rows;
    let end = start + queryParams.rows;
    let arr = this.getArr(this.settlementTableValue, queryParams);
    return { arr: arr.slice(start, end), length: arr.length };
  }

  // 结算单明细
  public getSettlementStatementDetails(id) {
    return this.statementDetailsInfo;
  }

  // 结算凭证
  public getSettlementProofInfo(id) { 
    return this.SettlementProofInfo;
  }

  // 自主结算 - 详情列表
  public getSettlementDetailsTableValue(queryParams: any) {
    console.log('--------settlement details queryParams--------');
    console.log(queryParams);
    let start = (queryParams.page - 1) * queryParams.rows;
    let end = start + queryParams.rows;
    let arr = this.getArr(this.checkDetailsTableValue, queryParams);
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


