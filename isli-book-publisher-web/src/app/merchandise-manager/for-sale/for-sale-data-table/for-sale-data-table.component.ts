import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ForSaleService } from '../../services/for-sale.service';
import { DataTableObj, PagingBoxObj } from '../../../shared';

@Component({
  selector: 'tl-for-sale-data-table',
  templateUrl: './for-sale-data-table.component.html',
  styleUrls: ['./for-sale-data-table.component.css']
})
export class ForSaleDataTableComponent implements OnInit {

  @Output() onEdit:EventEmitter<any> = new EventEmitter();
  @Output() onPutAway:EventEmitter<any> = new EventEmitter();

  @Input() queryParams:any;

  public dataTableValue:Array<any>;
  public dataTableObj:DataTableObj;
  public pagingBoxObj:PagingBoxObj;

  constructor(private fs:ForSaleService) {
  }

  ngOnInit() {
    this.dataTableInit();
    this.pagingBoxInit();
    this.pageChange({page: 1, rows: 10});
  }

  //分页
  pageChange(event,queryParams?) {
    console.log(event);
    if(queryParams){
      this.queryParams=queryParams;
    }
    this.pagingBoxObj.page=event.page;
    this.pagingBoxObj.first=event.first;
    this.dataTableValue=undefined;
    this.getDataTableValue(this.pagingBoxObj.page, this.pagingBoxObj.rows, this.queryParams);
  }

  //编辑
  edit(event, rowData) {
    console.log('edit');
    this.onEdit.emit(rowData);
  }

  //上架
  putAway(event, rowData) {
    console.log('soldOut');
    this.onPutAway.emit(rowData);
  }


  //列表 dataTable数据请求
  getDataTableValue(page:number, rows:number, queryParams?:any) {
    this.fs.getForSaleDataTableValue(page, rows, queryParams).then((response)=> {
      console.log(response);
      this.dataTableValue = response.data;
    })
  }

  //列表 dataTable初始化
  dataTableInit() {
    this.dataTableObj = new DataTableObj([
      {template: 'serial_number', header: '序号', ngStyle: {width: '10%'}},
      {template: 'goods_name', header: '商品名称', ngStyle: {width: '30%'}},
      {template: 'goods_price', header: '商品价格', ngStyle: {width: '13%'}},
      {template: 'strategy', header: '商品试读策略', ngStyle: {width: '25%'}},
      {template: 'status', header: '商品状态', ngStyle: {width: '13%'}},
      {template: 'oper', header: '操作', ngStyle: {width: '9%'}}
    ]);
  }

  //分页 初始化
  pagingBoxInit() {
    this.pagingBoxObj = new PagingBoxObj(1, 100, 10, 0, 5);
  }
}
