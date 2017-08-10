import { Component, OnInit, Input, Output, EventEmitter, ContentChildren, QueryList, ContentChild, AfterContentInit, ViewContainerRef, ElementRef  } from '@angular/core';
import { PagingBoxObj } from '../paging-box/paging-box.component';
import { TemplateRefDirective } from '../../directives';

export class DataColumnObj {
  constructor(
    public header: string,
    public field?: string,
    public template?: string,
    public sortable?: boolean,
    public ngClass?:string,
    public ngStyle?:any
  ) { }
}

export class DataTableObj{
  constructor(
    public columnObjs:Array<DataColumnObj>
  ){}
}

@Component({
  selector: 'tl-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  @Output() onPageChange:EventEmitter<any>=new EventEmitter();

  @Input() dataTableObj:DataTableObj;
  @Input() pagingBoxObj: PagingBoxObj;
  @Input() dataTableValue:Array<any>;

  @ContentChildren(TemplateRefDirective) templates: QueryList<any>;

  public sortable:boolean=true;

  constructor(private ele:ElementRef) { }

  ngOnInit() {
  }

  //升序
  getSort(bool){
    if(!bool){
      return;
    }
    this.sortable=!this.sortable;
    let len=this.dataTableValue.length;
    let arr=[];
    for(let i=0;i<len;i++){
      arr[i]=this.dataTableValue[i];
    }
    for(let i=0;i<len;i++){
      this.dataTableValue[len-i-1]=arr[i];
    }
  }

  pageChange(event){
    this.onPageChange.emit(event);
  }

}
