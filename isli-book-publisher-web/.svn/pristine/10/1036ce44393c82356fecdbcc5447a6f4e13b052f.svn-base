import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'tl-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public navInfo:Array<any>;
  public rightNavInfo:Array<any>;

  constructor(private router:Router) {
  }

  ngOnInit() {
    this.navInfoInit();
    this.router.events.subscribe((event) => {
      console.log(event);
      if (event instanceof NavigationEnd) {
        let url=event.urlAfterRedirects;
        let arr=url.split('/');
        arr.splice(0,1);
        let _index=0;
        this.rightNavInfo=[];
        this.getNavInfo(arr,this.navInfo,_index,this.rightNavInfo);
      }
    });
  }

  //获取navInfo数据selected
  getNavInfo(arr,navInfo,index,rightNavInfo){
    for(let liInfo of navInfo){
      liInfo.selected=arr[index]&&(liInfo.routerLink.search(new RegExp(arr[index]))>-1)?true:false;
      if(liInfo.selected){
        rightNavInfo.push(liInfo);
      }
      if(liInfo.children&&liInfo.children.length){
        this.getNavInfo(arr,liInfo.children,index+1,rightNavInfo);
      }
    }
  }

  //导航路由-初始化数据
  navInfoInit(){
    this.navInfo=[
      {index:0,name:'门户店管理',routerLink:'/shop-manager',routerLinkActive:'',selected:false,children:[
        {index:1,name:'门户店中心',routerLink:'/shop-manager/shop-center',routerLinkActive:'routerLinkActive',selected:false,children:[]},
        {index:1,name:'门户店资料',routerLink:'/shop-manager/shop-datum',routerLinkActive:'routerLinkActive',selected:false,children:[]},
        {index:1,name:'门户店装修',routerLink:'/shop-manager/shop-decorate',routerLinkActive:'',selected:false,children:[
          {index:2,name:'当前模板',routerLink:'/shop-manager/shop-decorate/now-template',routerLinkActive:'routerLinkActive',selected:false,children:[]}
        ]}
      ]},
      {index:0,name:'商品管理',routerLink:'/merchandise-manager',routerLinkActive:'',selected:false,children:[
        {index:1,name:'新建商品',routerLink:'/merchandise-manager/create',routerLinkActive:'routerLinkActive',selected:false,children:[]},
        {index:1,name:'待售商品',routerLink:'/merchandise-manager/for-sale',routerLinkActive:'routerLinkActive',selected:false,children:[]},
        {index:1,name:'在售商品',routerLink:'/merchandise-manager/on-sale',routerLinkActive:'routerLinkActive',selected:false,children:[]}
      ]},
      {index:0,name:'交易管理',routerLink:'/transaction-manager',routerLinkActive:'',selected:false,children:[
        {index:1,name:'读者购买记录',routerLink:'/transaction-manager/purchase-record',routerLinkActive:'routerLinkActive',selected:false,children:[]}
      ]},
      {index:0,name:'统计中心',routerLink:'/statistics-center',routerLinkActive:'',selected:false,children:[
        {index:1,name:'读者下载记录',routerLink:'/statistics-center/download-record',routerLinkActive:'routerLinkActive',selected:false,children:[]}
      ]},
      {index:0,name:'财务管理',routerLink:'/finance-manager',routerLinkActive:'',selected:false,children:[
        {index:1,name:'自主对账',routerLink:'/finance-manager/checking',routerLinkActive:'routerLinkActive',selected:false,children:[]},
        {index:1,name:'自主结算',routerLink:'/finance-manager/settlement',routerLinkActive:'routerLinkActive',selected:false,children:[]}
      ]},
      {index:0,name:'消息管理',routerLink:'/message-manager',routerLinkActive:'',selected:false,children:[
        {index:1,name:'系统消息',routerLink:'/message-manager/system',routerLinkActive:'routerLinkActive',selected:false,children:[]},
      ]},
      {index:0,name:'账户管理',routerLink:'/account-manager',routerLinkActive:'',selected:false,children:[
        {index:1,name:'全部账户',routerLink:'/account-manager/all',routerLinkActive:'routerLinkActive',selected:false,children:[]}
      ]}
    ]
  }
}
