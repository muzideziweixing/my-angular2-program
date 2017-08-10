import { Component, OnInit } from '@angular/core';
import { CommonFuncService } from '../../../shared';

@Component({
  selector: 'tl-create-new-account',
  templateUrl: './create-new-account.component.html',
  styleUrls: ['./create-new-account.component.css']
})
export class CreateNewAccountComponent implements OnInit {

  public accountPrivilege:string='0';
  public dataTableInfo:any;
  public administratorsInfo:any;
  public operationManagerInfo:any;
  public financeManagerInfo:any;

  public qtOnly:boolean;
  public imgUrl:string='/assets/images/defalAccount.png';

  constructor() { }

  ngOnInit() {
    this.dataTableInit();
  }

  selectedFn0(event){
    this.dataTableInfo=CommonFuncService.clone(this.administratorsInfo);
  }

  selectedFn1(event){
    this.dataTableInfo=CommonFuncService.clone(this.operationManagerInfo);
  }

  selectedFn2(event){
    this.dataTableInfo=CommonFuncService.clone(this.financeManagerInfo);
  }

  dataTableInit(){
    this.administratorsInfo=[
      {name:'门户店管理',privileges:[{name:'编辑门户店资料',selected:true,disabled:true},{name:'编辑门户店样式',selected:true,disabled:true}]},
      {name:'商品管理',privileges:[{name:'新建、编辑商品基本信息,删除商品',selected:true,disabled:true},{name:'编辑商品销售信息、上/下架管理',selected:true,disabled:true}]},
      {name:'统计中心',privileges:[{name:'查看读者下载记录',selected:true,disabled:true}]},
      {name:'交易管理',privileges:[{name:'查看读者购买记录',selected:true,disabled:true}]},
      {name:'财务管理',privileges:[{name:'查看账单、申请结算',selected:true,disabled:true}]},
      {name:'消息管理',privileges:[{name:'查看用户/系统消息',selected:true,disabled:true}]},
      {name:'账户管理',privileges:[{name:'新建、删除管理员、变更权限',selected:true,disabled:true},{name:'编辑管理员账户资料',selected:true,disabled:true}]},
      {name:'泛媒关联运营编辑',privileges:[{name:'使用泛媒关联出版者客户端,在图书中进行内容标识、目标审核',selected:true,disabled:true}]},
    ];
    this.operationManagerInfo=[
      {name:'门户店管理',privileges:[{name:'编辑门户店资料',selected:true,disabled:false},{name:'编辑门户店样式',selected:true,disabled:false}]},
      {name:'商品管理',privileges:[{name:'新建、编辑商品基本信息,删除商品',selected:true,disabled:true},{name:'编辑商品销售信息、上/下架管理',selected:true,disabled:false}]},
      {name:'统计中心',privileges:[{name:'查看读者下载记录',selected:true,disabled:false}]},
      {name:'交易管理',privileges:[{name:'查看读者购买记录',selected:true,disabled:false}]},
      {name:'财务管理',privileges:[{name:'查看账单、申请结算',selected:false,disabled:true}]},
      {name:'消息管理',privileges:[{name:'查看用户/系统消息',selected:true,disabled:false}]},
      {name:'账户管理',privileges:[{name:'新建、删除管理员、变更权限',selected:false,disabled:true},{name:'编辑管理员账户资料',selected:true,disabled:true}]},
      {name:'泛媒关联运营编辑',privileges:[{name:'使用泛媒关联出版者客户端,在图书中进行内容标识、目标审核',selected:true,disabled:true}]},
    ];
    this.financeManagerInfo=[
      {name:'门户店管理',privileges:[{name:'编辑门户店资料',selected:false,disabled:true},{name:'编辑门户店样式',selected:false,disabled:true}]},
      {name:'商品管理',privileges:[{name:'新建、编辑商品基本信息,删除商品',selected:false,disabled:true},{name:'编辑商品销售信息、上/下架管理',selected:false,disabled:true}]},
      {name:'统计中心',privileges:[{name:'查看读者下载记录',selected:false,disabled:true}]},
      {name:'交易管理',privileges:[{name:'查看读者购买记录',selected:false,disabled:true}]},
      {name:'财务管理',privileges:[{name:'查看账单、申请结算',selected:true,disabled:false}]},
      {name:'消息管理',privileges:[{name:'查看用户/系统消息',selected:true,disabled:true}]},
      {name:'账户管理',privileges:[{name:'新建、删除管理员、变更权限',selected:false,disabled:true},{name:'编辑管理员账户资料',selected:true,disabled:true}]},
      {name:'泛媒关联运营编辑',privileges:[{name:'使用泛媒关联出版者客户端,在图书中进行内容标识、目标审核',selected:false,disabled:true}]},
    ];
    this.dataTableInfo=CommonFuncService.clone(this.administratorsInfo);
  }

}
