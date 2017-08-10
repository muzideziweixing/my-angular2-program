import { Component, OnInit } from '@angular/core';
import { DataTableObj, PagingBoxObj } from '../../../shared';

@Component({
  selector: 'tl-settlement-data-table',
  templateUrl: './settlement-data-table.component.html',
  styleUrls: ['./settlement-data-table.component.css']
})
export class SettlementDataTableComponent implements OnInit {

  public dataTableObj: DataTableObj;
  public pagingBoxObj: PagingBoxObj;
  public dataTableValue: Array<any>;

  constructor() { }

  ngOnInit() {
    this.dataTableInit();
    this.pagingBoxInit();
  }

  dataTableInit() {
    this.dataTableObj = new DataTableObj([
      { template: 'serial_number', header: '序号', ngStyle: { width: '9%' } },
      { template: 'settlement_date', header: '结算日期', ngStyle: { width: '20%' } },
      { template: 'settlement_order_number', header: '结算单号', ngStyle: { width: '22%' } },
      { template: 'settlement_payer', header: '结算支付方', ngStyle: { width: '13%' } },
      { template: 'settlement_amount', header: '结算金额', ngStyle: { width: '15%' } },
      { template: 'settlement_status', header: '结算状态', ngStyle: { width: '13%' } },
      { template: 'oper', header: '操作', ngStyle: { width: '8%' } },
    ])
  }

  pagingBoxInit() {
    this.pagingBoxObj = new PagingBoxObj(1, 100, 10, 0, 5);
  }
}
