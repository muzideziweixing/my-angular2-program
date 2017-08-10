import { Component, OnInit } from '@angular/core';
import { MerchandiseService } from '../services/merchandise.service';

@Component({
  selector: 'tl-for-sale',
  templateUrl: './for-sale.component.html',
  styleUrls: ['./for-sale.component.css']
})
export class ForSaleComponent implements OnInit {

  public strategySelectData: any;
  public statusSelectData: any;
  public dataTableValue:Array<any>;

  constructor(
    private ms:MerchandiseService
  ) {}

  ngOnInit() {
    this.queryFormDataInit();
    this.getDataTableValue();
  }

  //搜索
  search(event) {
    console.log(event);
  }

  //列表 dataTable数据请求
  getDataTableValue(){
    this.ms.getForSaleDataTableValue().then((response)=>{
      console.log(response);
      this.dataTableValue=response.data;
    })
  }



  //搜索组件下拉框数据初始化;
  queryFormDataInit() {
    this.strategySelectData = {
      labelName: '商品试读策略',
      value: [
        { strategy_id: '', name: '全部' },
        { strategy_id: '1', name: '无(免费)' },
        { strategy_id: '2', name: '前N章节(页)免费' },
        { strategy_id: '3', name: '限时免费' },
        { strategy_id: '4', name: '限时免费()定时' },
        { strategy_id: '3', name: '限时免费' },
        { strategy_id: '4', name: '限时免费()定时' },
      ]
    };
    this.statusSelectData = {
      labelName: '商品状态',
      value: [
        { status_id: '', name: '全部' },
        { status_id: '1', name: '商品信息缺失' },
        { status_id: '2', name: '待上架' },
        { status_id: '3', name: '已下架' },
        { status_id: '4', name: '强制下架' },
      ]
    }
  }

}
