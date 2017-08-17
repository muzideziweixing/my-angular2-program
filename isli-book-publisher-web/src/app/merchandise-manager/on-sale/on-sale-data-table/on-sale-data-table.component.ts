import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OnSaleService } from '../../services/on-sale.service';
import { DataTableObj, PagingBoxObj } from '../../../shared';

@Component({
  selector: 'tl-on-sale-data-table',
  templateUrl: './on-sale-data-table.component.html',
  styleUrls: ['./on-sale-data-table.component.css']
})
export class OnSaleDataTableComponent implements OnInit {

  @Output() onEdit:EventEmitter<any> = new EventEmitter();
  @Output() onSoldOut:EventEmitter<any> = new EventEmitter();

  public dataTableObj:DataTableObj;
  public pagingBoxObj:PagingBoxObj;

  public dataTableValue:Array<any>;

  public queryParams:any;

  constructor(
    private os:OnSaleService
  ) {}

  ngOnInit() {
    this.dataTableInit();
    this.pagingBoxInit();
    this.pageChange({page: 1, rows: 7});
  }

  //分页
  pageChange(event,queryParams?:any) {
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

  //下架
  soldOut(event, rowData) {
    this.onSoldOut.emit(rowData);
  }

  //获取商品上架路径的labelName
  getPathName(id) {
    if (id == 0) {
      return '门户店主页';
    } else if (id == 1) {
      return '关注我的';
    } else if (id == 2) {
      return '门户店推荐';
    }
  }

  //获取下架按钮disabled值
  getsSoldOutDisabled(path) {
    for (let obj of path) {
      if (obj.selected) {
        return false;
      }
    }
    return true;
  }

  //checkBox返回事件;
  selectedFn(event, obj) {
    obj.selected = event;
  }

  //列表 dataTable数据请求;
  getDataTableValue(page:number, rows:number, queryParams?:any) {
    this.os.getOnSaleDataTableValue(page, rows, queryParams).then((response)=> {
      console.log(response);
      this.dataTableValue = response.data;
    })
  }

  //列表初始化;
  dataTableInit() {
    this.dataTableObj = new DataTableObj([
      {template: 'serial_number', header: '序号', ngStyle: {width: '10%'}},
      {template: 'goods_name', header: '商品名称', ngStyle: {width: '30%'}},
      {template: 'goods_price', header: '商品价格', ngStyle: {width: '13%'}},
      {template: 'strategy', header: '商品试读策略', ngStyle: {width: '25%'}},
      {template: 'path', header: '商品上架路径', ngStyle: {width: '13%'}},
      {template: 'oper', header: '操作', ngStyle: {width: '9%'}}
    ]);
  }

  //分页初始化;
  pagingBoxInit() {
    this.pagingBoxObj = new PagingBoxObj(1, 100, 7, 0, 5);
  }
}
