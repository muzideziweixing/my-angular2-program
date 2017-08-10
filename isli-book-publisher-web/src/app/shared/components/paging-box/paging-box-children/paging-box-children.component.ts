import { Component, Input, Output, OnInit, EventEmitter, ViewContainerRef, AfterViewChecked, OnChanges } from '@angular/core';

@Component({
  selector: 'tl-paging-box-children',
  templateUrl: './paging-box-children.component.html',
  styleUrls: ['./paging-box-children.component.css']
})
export class PagingBoxChildrenComponent implements OnInit {

  @Output() onPageChange:EventEmitter<any> = new EventEmitter();

  @Input() page:number;
  @Input() totalRecords:number;
  @Input() rows:number;
  @Input() first:number;
  @Input() pageLinkSize:number;


  public pages:Array<any> = [];
  public pageOnly:string = '';

  public oldPagesLength:number;

  //获取总页数
  get totalPages() {
    if (!this.totalRecords || !this.rows) {
      return 0;
    }
    return Math.ceil(this.totalRecords / this.rows);
  }

  //获取实际pages长度;
  get pagesLength() {
    if (this.pageLinkSize) {
      return (this.totalPages < this.pageLinkSize) ? this.totalPages : this.pageLinkSize;
    }
    return 0;
  }

  //下一页设置
  set nextPages(index:any) {
    let num = Number(index) - Number(this.pageChangeIndex);
    if (this.pages[index] + num < this.totalPages) {
      this.pages.splice(0, num);
      for (let i = 1; i <= num; i++) {
        this.pages.push(this.pages[this.pages.length - 1] + 1);
      }
      return;
    }
    this.pages = [];
    for (let i = 0; i < this.pagesLength; i++) {
      this.pages.unshift(this.totalPages - i);
    }
  }

  //上一页设置
  set prePages(index:any) {
    let num = Number(this.pageChangeIndex) - Number(index);
    if (this.pages[index] - num > 1) {
      this.pages.splice(this.pageLinkSize - num, num);
      for (let i = 1; i <= num; i++) {
        this.pages.unshift(this.pages[0] - 1);
      }
      return;
    }
    this.pages = [];
    for (let i = 0; i < this.pagesLength; i++) {
      this.pages.push(i + 1);
    }
  }

  //上一页禁用标记
  get preDisabled() {
    if (!this.page || this.page == 1) {
      return true;
    }
    return false;
  }

  //下一页禁用标记
  get nextDisabled() {
    if (!this.pages || !this.pages.length) {
      return false;
    } else if (this.pages[this.pages.length - 1] == this.page) {
      return true;
    }
    return false;
  }

  //获取active下标
  get pageChangeIndex() {
    return Math.ceil(this.pageLinkSize / 2) - 1;
  }

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    let totalRecords = changes['totalRecords'] && changes['totalRecords']['currentValue'];
    if (totalRecords) {
      if (!this.pages || !this.pages.length) {
        this.pagesInit();
      } else {
        if (this.pagesLength > this.oldPagesLength) {
          this.AddPagesChange(this.pagesLength - this.oldPagesLength);
        } else {
          this.deletePagesChange(this.oldPagesLength - this.pagesLength);
        }
      }
      this.oldPagesLength = this.pagesLength;
    }
  }

  //page点击事件
  clickPage(page, index) {
    if (this.page == page) {
      return;
    }
    this.page = page;
    this.pageChange();
    if (this.pages[index] > this.pages[this.pageChangeIndex] && this.pages[this.pages.length - 1] != this.totalPages) {
      this.nextPages = index;
      return;
    }
    if (this.pages[index] < this.pages[this.pageChangeIndex] && this.pages[0] != 1) {
      this.prePages = index;
      return;
    }
  }

  //page上一页
  clickPre() {
    if (this.page - 1 < 1) {
      return;
    }
    this.page -= 1;
    if (this.page < this.pages[this.pageChangeIndex]) {
      this.prePages = this.pageChangeIndex - 1;
    }
    this.pageChange();
  }

  //page下一页
  clickNext() {
    if (this.page + 1 > this.totalPages) {
      return;
    }
    this.page += 1;
    if (this.page > this.pages[this.pageChangeIndex]) {
      this.nextPages = this.pageChangeIndex + 1;
    }
    this.pageChange();
  }

  //跳转
  clickOnly() {
    if (!Number(this.pageOnly) || Number(this.pageOnly) > this.totalPages || Number(this.pageOnly) < 1 || this.page == Number(this.pageOnly)) {
      return;
    }
    if (Number(this.pageOnly) > this.totalPages - this.pageChangeIndex) {
      this.pages = [];
      for (let i = 0; i < this.pagesLength; i++) {
        this.pages.unshift(this.totalPages - i);
      }
    } else if (Number(this.pageOnly) < this.pageChangeIndex + 1) {
      this.pages = [];
      for (let i = 0; i < this.pagesLength; i++) {
        this.pages.push(i + 1);
      }
    } else {
      this.pages = [Number(this.pageOnly)];
      for (let i = 1; i < (this.pagesLength - this.pageChangeIndex); i++) {
        this.pages.push(this.pages[this.pages.length - 1] + 1);
        if (this.pages.length <= this.pagesLength) {
          this.pages.unshift(this.pages[0] - 1);
        }
      }
    }
    for (let i = 0; i < this.pages.length; i++) {
      if (this.pages[i] == Number(this.pageOnly)) {
        this.clickPage(Number(this.pageOnly), i);
        return;
      }
    }
  }

  //分页改变函数
  pageChange() {
    this.first = this.page * this.rows;
    this.onPageChange.emit({page: this.page, first: this.first});
  }

  //_page初始化数据
  pagesInit() {
    if (this.pagesLength) {
      for (let i = 1; i <= this.pagesLength; i++) {
        console.log(i);
        this.pages.push(i);
      }
    }
  }

  //增加 改变pages长度-数据重组
  AddPagesChange(length:number) {
    for (let i = 0; i < length; i++) {
      this.pages.push(this.pages[this.pages.length - 1] + 1);
    }
  }

  //删除 改变pages长度-数据重组
  deletePagesChange(length:number) {
    this.page = (this.page > this.totalPages) ? this.totalPages : this.page;
    this.pages = [this.page];
    if(this.page > this.totalPages){
      for (let i = 1; i < this.pagesLength; i++) {
        this.pages.unshift(this.pages[this.pages.length - 1] - 1);
      }
    }else{
      for (let i = 1; i < this.pagesLength; i++) {
        let preNum=this.pages[0] - 1;
        if(preNum>0){
          this.pages.unshift(preNum);
        }else{
          this.pages.push(this.pages[this.pages.length - 1] + 1);
        }

      }
    }

  }
}
