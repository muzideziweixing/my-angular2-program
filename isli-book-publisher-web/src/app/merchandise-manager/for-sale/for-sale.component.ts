import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmCancelBoxSubsKeyObj } from '../../app.component';
import { ForSaleDataTableComponent } from './for-sale-data-table/for-sale-data-table.component';
import { SubscriptionService } from '../../core/services/subscription.service';
import { ForSaleService } from '../services/for-sale.service';

@Component({
  selector: 'tl-for-sale',
  templateUrl: './for-sale.component.html',
  styleUrls: ['./for-sale.component.css']
})
export class ForSaleComponent implements OnInit {

  @ViewChild(ForSaleDataTableComponent) forSaleDataTableComponent:ForSaleDataTableComponent;

  public strategySelectData:any;
  public statusSelectData:any;

  private rowData:any;

  constructor(private fs:ForSaleService, private subs:SubscriptionService) {
  }

  ngOnInit() {
    this.queryFormDataInit();

    //上架-订阅;
    this.subs.subscript('putAway', (response)=> {
      this.fs.getPutAway(this.rowData.goods_id).after(()=> {
        this.subs.pubscript('loading-box', false);
      }).then((response)=> {
        this.subs.pubscript('prompts-box', '上架成功');
      }, (error)=> {
        this.subs.pubscript('handle-error', error);
      });
    });
  }

  //搜索
  search(event) {
    console.log(event);
    this.forSaleDataTableComponent.pageChange({page: 1, rows: 10}, event);
  }

  //编辑
  edit(event) {
    console.log(event);
    this.subs.pubscript('loading-box', true);
    this.fs.getEditInfo(event.goods_id).after(()=> {
      this.subs.pubscript('loading-box', false);
    }).then((response)=> {

    }, (error)=> {

    })
  }

  //上架
  putAway(event) {
    console.log(event);
    this.rowData = event;
    this.subs.pubscript('confirm-cancel-box', new ConfirmCancelBoxSubsKeyObj('putAway', '提示 : 确认上架商品吗 ?'));
  }

  //搜索组件下拉框数据初始化;
  queryFormDataInit() {
    this.strategySelectData = {
      labelName: '商品试读策略',
      value: [
        {strategy_id: '', name: '全部'},
        {strategy_id: '1', name: '无(免费)'},
        {strategy_id: '2', name: '前N章节(页)免费'},
        {strategy_id: '3', name: '限时免费'},
        {strategy_id: '4', name: '限时免费()定时'},
        {strategy_id: '3', name: '限时免费'},
        {strategy_id: '4', name: '限时免费()定时'},
      ]
    };
    this.statusSelectData = {
      labelName: '商品状态',
      value: [
        {status_id: '', name: '全部'},
        {status_id: '1', name: '商品信息缺失'},
        {status_id: '2', name: '待上架'},
        {status_id: '3', name: '已下架'},
        {status_id: '4', name: '强制下架'},
      ]
    }
  }

}
