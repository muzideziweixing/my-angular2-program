import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmCancelBoxSubsKeyObj } from '../../app.component';
import { OnSaleDataTableComponent } from './on-sale-data-table/on-sale-data-table.component';
import { OnSaleService } from '../services/on-sale.service';
import { SubscriptionService } from '../../core/services/subscription.service';

@Component({
  selector: 'tl-on-sale',
  templateUrl: './on-sale.component.html',
  styleUrls: ['./on-sale.component.css']
})
export class OnSaleComponent implements OnInit {

  @ViewChild(OnSaleDataTableComponent) onSaleDataTableComponent:OnSaleDataTableComponent;

  public strategySelectData: any;
  public pathSelectData: any;
  public dataTableValue: Array<any>;

  private rowData:any;

  constructor(
    private os:OnSaleService,
    private subs:SubscriptionService
  ) {}

  ngOnInit() {
    this.queryFormDataInit();

    //下架-订阅;
    this.subs.subscript('soldOut', (response)=> {
      this.os.getSoldOut(this.rowData.goods_id).after(()=> {
        this.subs.pubscript('loading-box', false);
      }).then((response)=> {
        this.subs.pubscript('prompts-box', '下架成功');
      }, (error)=> {
        this.subs.pubscript('handle-error', error);
      });
    });
  }

  // 搜索
  search(event) {
    console.log(event);
    this.onSaleDataTableComponent.pageChange({page: 1, rows: 10}, event);
  }

  //编辑
  edit(event){
    console.log(event);
    this.subs.pubscript('loading-box', true);
    this.os.getEditInfo(event.goods_id).after(()=> {
      this.subs.pubscript('loading-box', false);
    }).then((response)=> {

    }, (error)=> {

    })
  }

  //下架
  soldOut(event){
    console.log(event);
    this.rowData = event;
    this.subs.pubscript('confirm-cancel-box', new ConfirmCancelBoxSubsKeyObj('soldOut', '提示 : 确认下架商品吗 ?'));
  }

  //确认取消弹框 - 确认
  clickYes(event){
    //this.showLoadingBox(true);
    //this.as.deleteAccount(event).after(()=>{
    //  this.showLoadingBox(false);
    //}).then((response)=>{
    //  this.showPromptBox('下架成功');
    //},(error)=>{
    //  this.handleError(error);
    //});

  }

  //确认取消弹框 - 取消
  clickNo(event){

  }

  // 搜索组件下拉框数据初始化;
  queryFormDataInit() {
    this.strategySelectData = {
      labelName: '商品试读策略',
      value: [
        { strategy_id: '', name: '全部' },
        { strategy_id: '1', name: '无(免费)' },
        { strategy_id: '2', name: '前N章节(页)免费' },
        { strategy_id: '3', name: '限时免费' },
        { strategy_id: '4', name: '限时免费()定时' }
      ]
    };
    this.pathSelectData = {
      labelName: '商品上架路径',
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
