import { Component, OnInit } from '@angular/core';
import { DataTableObj, PagingBoxObj } from '../../../shared';

@Component({
  selector: 'tl-checking-data-table',
  templateUrl: './checking-data-table.component.html',
  styleUrls: ['./checking-data-table.component.css']
})
export class CheckingDataTableComponent implements OnInit {

  public dataTableObj: DataTableObj;
  public pagingBoxObj: PagingBoxObj;
  public dataTableValue: Array<any>;

  constructor() { }

  ngOnInit() {
    this.dataTableInit();
    this.pagingBoxInit();
  }

  pageChange(event) {
    console.log(event);
  }

  dataTableInit() {
    this.dataTableObj = new DataTableObj([
      { template: 'date', header: '日期', ngStyle: { width: '10%' } },
      { template: 'quantity', header: '交易单数', ngStyle: { width: '30%' } },
      { template: 'total_amount', header: '交易总额', ngStyle: { width: '10%' } },
      { template: 'real_price', header: '交易收入', ngStyle: { width: '10%' } },
      { template: 'poundage', header: '交易手续费', ngStyle: { width: '10%' } },
      { template: 'oper', header: '操作', ngStyle: { width: '10%' } },
    ])
  }

  pagingBoxInit() {
    this.pagingBoxObj = new PagingBoxObj(1, 40, 10, 0, 5);
  }
}
