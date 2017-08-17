import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataTableObj} from '../../../shared';

@Component({
  selector: 'tl-details-table',
  templateUrl: './details-table.component.html',
  styleUrls: ['./details-table.component.css']
})
export class DetailsTableComponent implements OnInit {

  @Output() onPageChange: EventEmitter<any> = new EventEmitter(); 

  @Input() dataTableValue;
  @Input() pagingBoxObj;

  public dataTableObj: DataTableObj;

  constructor() { }

  ngOnInit() {
    this.dataTableInit();
    console.log('-----------datatable value--------');
    console.log(this.dataTableValue);
  } 

  // 分页
  pageChange(event) {
    this.onPageChange.emit(event);
  }

  // 表格初始化
  dataTableInit() {
    this.dataTableObj = new DataTableObj([
      { template: 'number', header: '序号', ngStyle: { width: '8%' } },
      { template: 'order_num', header: '订单编号', ngStyle: { width: '16%' } },
      { template: 'goods_name', header: '商品名称', ngStyle: { width: '16%' } },
      { template: 'goods_price', header: '商品价格', ngStyle: { width: '10%' } },
      { template: 'trade_price', header: '交易价格', ngStyle: { width: '10%' } },
      { template: 'earnings', header: '本次收益', ngStyle: { width: '10%' } },
      { template: 'trade_fee', header: '交易手续费', ngStyle: { width: '10%' } },
      { template: 'earnings_ratio', header: '收益比例', ngStyle: { width: '10%' } },
      { template: 'platform_earnings', header: '平台收益', ngStyle: { width: '10%' } },
    ])
  }
}
