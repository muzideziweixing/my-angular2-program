import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataTableObj } from '../../../shared';

@Component({
  selector: 'tl-purchase-data-table-lists',
  templateUrl: './purchase-data-table-lists.component.html',
  styleUrls: ['./purchase-data-table-lists.component.css']
})
export class PurchaseDataTableListsComponent implements OnInit {

  @Output() onPageChange: EventEmitter<any> = new EventEmitter();
  @Output() onClickDetails: EventEmitter<any> = new EventEmitter();

  @Input() dataTableValue;
  @Input() pagingBoxObj;

  public dataTableObj: DataTableObj;

  constructor() { }

  ngOnInit() {
    this.dataTableInit();
  }

  // 分页
  pageChange(event) {
    this.onPageChange.emit(event);
  }

  // 详情
  clickDetails(rowData) {
    this.onClickDetails.emit(rowData);
  }

  // 列表初始化
  dataTableInit() {
    this.dataTableObj = new DataTableObj([
      { template: 'serial_number', field: 'serial_number', header: '序号', ngStyle: { width: '10%' } },
      { template: 'goods_name', field: 'goods_name', header: '商品名称', ngStyle: { width: '30%' } },
      { template: 'goods_price', field: 'goods_price', header: '商品价格', ngStyle: { width: '10%' } },
      { template: 'real_price', field: 'real_price', header: '交易价格', ngStyle: { width: '10%' } },
      { template: 'now_earnings', field: 'now_earnings', header: '本次收益', ngStyle: { width: '10%' } },
      { template: 'fmr_earnings', field: 'fmr_earnings', header: '泛媒收益', ngStyle: { width: '10%' } },
      { template: 'poundage', field: 'poundage', header: '交易手续费', ngStyle: { width: '10%' } },
      { template: 'oper', header: '操作', ngStyle: { width: '10%' } },
    ])
  }
}
