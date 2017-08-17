import { Component, OnInit, ViewChild } from '@angular/core';
import { AccountAllService } from '../services/account-all.service';
import { SubscriptionService } from '../../core/services/subscription.service';
import { CreateNewAccountComponent } from './create-new-account/create-new-account.component';
import { ConfirmCancelBoxSubsKeyObj } from '../../app.component';

export const enum STEP{ DATATABLE,CREATE }

@Component({
  selector: 'tl-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  @ViewChild(CreateNewAccountComponent) creteNewCpt: CreateNewAccountComponent;

  public accountInfo:any;
  public step:STEP=STEP.DATATABLE;

  private rowData:any;

  constructor(
    private as:AccountAllService,
    private subs:SubscriptionService
  ) {}

  ngOnInit() {

    //删除账户-订阅;
    this.subs.subscript('deleteAccount', (response)=> {
      this.as.deleteAccount(this.rowData.account_id).after(()=> {
        this.subs.pubscript('loading-box', false);
      }).then((response)=> {
        this.subs.pubscript('prompts-box', '删除成功');
      }, (error)=> {
        this.subs.pubscript('handle-error', error);
      });
    });
  }

  // 添加
  add(event) {
    this.accountInfo=undefined;
    this.step=STEP.CREATE;
  }

  // 保存
  save(event){
    this.subs.pubscript('loading-box', true);
    this.creteNewCpt.submit().then((submitData)=>{
      this.as.saveAccountInfo(!!this.accountInfo,submitData).after(()=>{
        this.subs.pubscript('loading-box', false);
      }).then((response)=>{
        this.subs.pubscript('prompts-box', '保存成功');
        this.step=STEP.DATATABLE;
      },(error)=>{
        this.subs.pubscript('handle-error', error);
      })
    });
  }

  // 取消
  cancel(event){
    this.step=STEP.DATATABLE;
  }

  // 编辑
  edit(event) {
    this.subs.pubscript('loading-box', true);
    this.as.getAccountInfo(event).after(()=>{
      this.subs.pubscript('loading-box', false);
    }).then((response)=>{
      this.accountInfo=response.data||null;
      this.step=STEP.CREATE;
    },(error)=>{
      this.subs.pubscript('handle-error', error);
    });
  }

  // 删除
  delete(event) {
    console.log(event);
    this.rowData=event;
    this.subs.pubscript('confirm-cancel-box', new ConfirmCancelBoxSubsKeyObj('deleteAccount', '提示 : 确认删除账户吗 ?'));
  }

}
