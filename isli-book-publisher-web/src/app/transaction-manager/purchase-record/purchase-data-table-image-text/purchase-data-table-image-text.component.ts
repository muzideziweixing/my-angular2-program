import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { PaginateObj } from '../../../shared';

@Component({
  selector: 'tl-purchase-data-table-image-text',
  templateUrl: './purchase-data-table-image-text.component.html',
  styleUrls: ['./purchase-data-table-image-text.component.css']
})
export class PurchaseDataTableImageTextComponent implements OnInit {

  @Output() onPageChange: EventEmitter<any> = new EventEmitter();
  @Output() onClickImgDetails: EventEmitter<any> = new EventEmitter();

  @Input() pagingBoxObj;
  // @Input() keywords: string;
  @Input() imageListValue; 

  constructor() { }

  ngOnInit() { }

  clickImgDetails(rowData) {
    this.onClickImgDetails.emit(rowData);
  }

  // 分页
  pageChange(event) {
    this.onPageChange.emit(event);
  } 
}
