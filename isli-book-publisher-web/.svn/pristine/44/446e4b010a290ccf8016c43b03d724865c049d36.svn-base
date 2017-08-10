import { Component, OnInit, Input, Output, EventEmitter, ContentChildren, QueryList, ContentChild, AfterContentInit, ViewContainerRef,ElementRef  } from '@angular/core';
// import { PaginateObj } from '../paginator.component';
import { PagingBoxObj } from '../paging-box/paging-box.component';
import { TemplateRefDirective } from '../../directives';

export class ProductColumnObjs {
  constructor(
    public field?: string,
    public template?: string,
    public sortable?: boolean,
    public ngClass?:string,
    public ngStyle?:any
  ) { }
}

export class ProductListDataObj{
  constructor(
    public productColumnObjs:Array<ProductColumnObjs>
  ){}
}

@Component({
  selector: 'tl-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Output() onPageChange:EventEmitter<any>=new EventEmitter();

  @Input() productListDataObj:ProductListDataObj;
  @Input() pagingBoxObj: PagingBoxObj;
  @Input() productListValue:Array<any>;

  @ContentChildren(TemplateRefDirective) templates: QueryList<any>;

  public sortable:boolean=true;

  constructor(private ele:ElementRef) { }

  ngOnInit() { }

  pageChange(event){
    this.onPageChange.emit(event);
  }

}
