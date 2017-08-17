import { Component, OnInit, HostListener } from '@angular/core';

import { SubscriptionService } from './core';

import { LoadingBoxObj, PromptsBoxObj, ConfirmCancelBoxObj } from './shared';

export class ConfirmCancelBoxSubsKeyObj{
  constructor(
    public subsKey:string,
    public name:string
  ){}
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public loadingBoxObj:LoadingBoxObj;
  public promptsBoxObj:PromptsBoxObj;
  public confirmCancelBoxObj:ConfirmCancelBoxObj;

  private subsKey:string;

  constructor(private subs:SubscriptionService){
  }

  ngOnInit(){
    this.loadingBoxInit();
    this.promptsBoxInit();
    this.confirmCancelBoxInit();
    this.subs.subscript('loading-box',(bool:boolean)=>{
      this.showLoadingBox(bool);
    });
    this.subs.subscript('prompts-box',(name:string)=>{
      this.showPromptBox(name);
    });
    this.subs.subscript('confirm-cancel-box',(confirmCancelBoxSubsKeyObj:ConfirmCancelBoxSubsKeyObj)=>{
      this.subsKey=confirmCancelBoxSubsKeyObj.subsKey;
      this.showConfirmCancelBox(confirmCancelBoxSubsKeyObj.name);
    });
    this.subs.subscript('handle-error',(error:any)=>{
      this.handleError(error)
    });
  }

  //确认 confirm-cancel-box确认取消弹出框
  clickYes(event){
    this.showLoadingBox(true);
    this.subs.pubscript(this.subsKey,true);
  }

  //取消 confirm-cancel-box确认取消弹出框
  clickNo(event){
    //this.subs.pubscript(this.subsKey,false);
  }

  //------------------------ start 阻止页面select事件 input除外-------------------------------
  @HostListener("document:selectstart", ["$event"])
  selectstart(event){
    return this.preventSelect(event);
  }
  @HostListener("document:contextmenu", ["$event"])
  contextmenu(event){
    return this.preventSelect(event);
  }
  @HostListener("document:dblclick", ["$event"])
  dblclick(event){
    return this.preventSelect(event);
  }
  @HostListener("document:dragstart", ["$event"])
  dragstart(event){
    return this.preventSelect(event);
  }
  preventSelect(event){
    return event.target['tagName']==='INPUT';
  }
  //------------------------ end 阻止页面select事件 -------------------------------

  //请求异常处理函数
  handleError(error, errorName?:string) {
    if (!error) {
      //this.showPromptBox('操作失败!',true);
      this.showConfirmCancelBox(errorName || '提示 : 操作失败', true);
    }
    if (!error.code || error.code == '99999999') {
      //this.showPromptBox('网络异常!',true);
      this.showConfirmCancelBox(errorName || '提示 : 网络异常 , 请稍后重试', true);
      return;
    } else if (error.code != '0') {
      //this.showPromptBox('系统异常!',true);
      this.showConfirmCancelBox(errorName || '提示 : 系统异常 , 请稍后重试', true);
      return;
    }
  }

  //显示加载菊花
  showLoadingBox(bool:boolean) {
    this.loadingBoxObj.visible = bool;
  }

  //显示提示框
  showPromptBox(name?:string, error?:boolean) {
    if (name) {
      this.promptsBoxObj.name = name;
    }
    if (error) {
      this.promptsBoxObj.error = error;
    }
    this.promptsBoxObj.visible = true;
  }

  //显示确认取消弹出框
  showConfirmCancelBox(name?:string, error?:boolean) {
    if (name) {
      this.confirmCancelBoxObj.header = name;
    }
    this.confirmCancelBoxObj.btnYes = error ? undefined : '确认';
    this.confirmCancelBoxObj.btnNo = error ? '关闭' : '取消';
    this.confirmCancelBoxObj.visible = true;
  }

  //加载菊花初始化
  loadingBoxInit() {
    this.loadingBoxObj = new LoadingBoxObj();
  }

  //提示框初始化
  promptsBoxInit() {
    this.promptsBoxObj = new PromptsBoxObj('操作失败');
  }

  //确认取消弹出框初始化
  confirmCancelBoxInit() {
    this.confirmCancelBoxObj = new ConfirmCancelBoxObj('确认删除', '确认', '取消');
  }

}
