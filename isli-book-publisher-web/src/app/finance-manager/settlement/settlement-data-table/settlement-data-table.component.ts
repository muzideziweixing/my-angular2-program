import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataTableObj } from '../../../shared';

@Component({
  selector: 'tl-settlement-data-table',
  templateUrl: './settlement-data-table.component.html',
  styleUrls: ['./settlement-data-table.component.css']
})
export class SettlementDataTableComponent implements OnInit {
  @Output() onPageChange: EventEmitter<any> = new EventEmitter();
  @Output() onClickDetails: EventEmitter<any> = new EventEmitter();

  @Input() pagingBoxObj;
  @Input() dataTableValue;

  public dataTableObj: DataTableObj;

  constructor() { }

  ngOnInit() {
    this.dataTableInit();
  }

  clickDetails(rowData) {
    this.onClickDetails.emit(rowData);
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

}

