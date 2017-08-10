import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataTableObj, PagingBoxObj } from '../../../shared';

@Component({
  selector: 'tl-for-sale-data-table',
  templateUrl: './for-sale-data-table.component.html',
  styleUrls: ['./for-sale-data-table.component.css']
})
export class ForSaleDataTableComponent implements OnInit {

  @Input() dataTableValue: Array<any>;

  public dataTableObj: DataTableObj;
  public pagingBoxObj: PagingBoxObj;

  constructor() { }

  ngOnInit() {
    this.dataTableInit();
    this.pagingBoxInit();
  }

  //分页
  pageChange(event) {
    console.log(event);
  }

  //编辑
  edit(event){
    console.log('edit');
  }

  //上架
  putAway(event){
    console.log('soldOut');
  }


  //列表 dataTable初始化
  dataTableInit() {
    this.dataTableObj = new DataTableObj([
      { template: 'serial_number', header: '序号', ngStyle: { width: '10%' } },
      { template: 'goods_name', header: '商品名称', ngStyle: { width: '30%' } },
      { template: 'goods_price', header: '商品价格', ngStyle: { width: '13%' } },
      { template: 'strategy', header: '商品试读策略', ngStyle: { width: '25%' } },
      { template: 'status', header: '商品状态', ngStyle: { width: '13%' } },
      { template: 'oper', header: '操作', ngStyle: { width: '9%' } }
    ]);
  }

  //分页 初始化
  pagingBoxInit() {
    this.pagingBoxObj = new PagingBoxObj(1, 100, 10, 0, 5);
  }
}
