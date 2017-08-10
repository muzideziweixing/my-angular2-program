import { Component, OnInit } from '@angular/core';
import { AccountAllService } from '../services/account-all.service';

export const enum STEP{ DATATABLE,CREATE }

@Component({
  selector: 'tl-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  public accountInfo:any;
  public dataTableValue:Array<any>;
  public step:STEP=STEP.DATATABLE;

  constructor(
    private as:AccountAllService
  ) {}

  ngOnInit() {
    this.getDataTableValue();
  }

  // 分页
  pageChange(event) {

  }

  // 添加
  add(event) {
    this.accountInfo=undefined;
    this.step=STEP.CREATE;
  }

  // 保存
  save(event){
    this.as.postAddAccount(event).then((response)=>{
      this.step=STEP.DATATABLE;
      console.log(response);
    })
  }

  // 取消
  cancel(event){
    this.step=STEP.DATATABLE;
  }

  // 编辑
  edit(event) {
    this.as.getAccountInfo(event).then((response)=>{
      this.accountInfo=response.data;
      this.step=STEP.CREATE;
    });
  }

  // 删除
  delete(event) {
    this.as.getAccountInfo(event).then((response)=>{
      console.log(event);
      console.log(response);
    });
  }

  // 列表 dataTable数据请求
  getDataTableValue(){
    this.as.getAllDataTableValue().then((response)=>{
      console.log(response);
      this.dataTableValue=response.data;
    })
  }
}
