import { Injectable } from '@angular/core';

import { FinanceDataService } from './finance-data.service';
import {
  CheckTableValueObj, SearchCheckTableValueObj, CheckDetailsTableValueObj, CheckStatementDetailsObj,
  CheckStatementObj, SearchSettlementTableValueObj, SettlementTableValueObj
} from './finance.model';

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
export class FinanceService {

  constructor(private http: FinanceDataService) { }

  // 自主对账 - 列表
  getCheckTableValue(page: number, rows: number, args?: SearchCheckTableValueObj) {
    return this.http.get(
      CHECkTABLELISTURL,
      null,
      Object.assign({ page: page, rows: rows }, args)
    ).then((respObj: CheckTableValueObj) => {
      return respObj;
    });
  }

  // 自主对账 - total
  getCheckTotalBarValue() {
    return this.http.get(
      CHECKTOTALBARINFOURL,
      null,
      null
    )
  }

  // 自主对账 - 对账单概览
  getCheckStatementValue(id) {
    return this.http.get(
      CHECKSTATEMENTVALUEURL,
      { id: id },
      null
    )
  }

  // 对账单明细
  getCheckStatementDetails(id) {
    return this.http.get(
      CHECKSTATEMENTDETAILSURL,
      { id: id },
      null
    )
  }

  // 自主对账 - 详情列表
  getCheckDetailsTableValue(id: string, page: number, rows: number) {
    return this.http.get(
      CHECKDETAILSTABLEVALUEURL,
      { id: id },
      Object.assign({ page: page, rows: rows })
    ).then((respObj: CheckDetailsTableValueObj) => {
      return respObj;
    });
  }

  // 自主结算 - 列表
  getSettlementTableValue(page: number, rows: number, args?: SearchSettlementTableValueObj) {
    return this.http.get(
      SETTLEMENTTABLELISTURL,
      null,
      Object.assign({ page: page, rows: rows }, args)
    ).then((respObj: SettlementTableValueObj) => {
      return respObj;
    });
  }

  // 自主结算 - 详情列表
  getSettlementDetailsTableValue(id: string, page: number, rows: number) {
    return this.http.get(
      SETTLEMENTDETAILSTABLEVALUEURL,
      { id: id },
      Object.assign({ page: page, rows: rows })
    ).then((respObj: CheckDetailsTableValueObj) => {
      return respObj;
    });
  }

  // 自主结算 - 结算凭证
  getSettlementProofInfo(id) {
    return this.http.get(
      SETTLEMENTPROOFINFOURL,
      { id: id },
      null
    )
  }

  // 结算单明细
  getSettlementStatementDetails(id){
    return this.http.get(
      SETTLEMENTSTATEMENTDETAILSURL,
      { id: id },
      null
    )
  }
}
