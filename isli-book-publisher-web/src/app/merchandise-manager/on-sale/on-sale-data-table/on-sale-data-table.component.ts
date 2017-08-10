import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataTableObj, PaginateObj, PagingBoxObj } from '../../../shared';

@Component({
  selector: 'tl-on-sale-data-table',
  templateUrl: './on-sale-data-table.component.html',
  styleUrls: ['./on-sale-data-table.component.css']
})
export class OnSaleDataTableComponent implements OnInit {

  @Input() dataTableValue: Array<any>;

  public dataTableObj: DataTableObj;
  public pagingBoxObj: PagingBoxObj;

  constructor() { }

  ngOnInit() {
    this.dataTableInit();
    this.pagingBoxInit();
  }

  pageChange(event) {
    console.log(event);
  }

  //编辑
  edit(event){
    console.log('edit');
  }

  //下架
  soldOut(event){
    console.log('soldOut');
  }

  //列表初始化;
  dataTableInit() {
    this.dataTableObj = new DataTableObj([
      { template: 'serial_number', header: '序号', ngStyle: { width: '10%' } },
      { template: 'goods_name', header: '商品名称', ngStyle: { width: '30%' } },
      { template: 'goods_price', header: '商品价格', ngStyle: { width: '13%' } },
      { template: 'strategy', header: '商品试读策略', ngStyle: { width: '25%' } },
      { template: 'path', header: '商品上架路径', ngStyle: { width: '13%' } },
      { template: 'oper', header: '操作', ngStyle: { width: '9%' } }
    ]);
  }

  //分页初始化;
  pagingBoxInit() {
    this.pagingBoxObj = new PagingBoxObj(1, 100, 10, 0, 5);
  }
}
