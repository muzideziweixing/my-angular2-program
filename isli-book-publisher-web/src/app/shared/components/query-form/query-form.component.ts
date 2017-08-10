import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DropDownBoxObj } from '../drop-down-box/drop-down-box.component';

@Component({
  selector: 'tl-query-form',
  templateUrl: './query-form.component.html',
  styleUrls: ['./query-form.component.css']
})
export class QueryFormComponent implements OnInit {

  @Output() onSearch:EventEmitter<any> = new EventEmitter();

  @Input() firstSelectData:any;
  @Input() secondSelectData:any;

  public dropDownBoxObj:DropDownBoxObj;

  public searchName:string = '';
  public strategy:string = '';
  public status:string = '';


  constructor() {
  }

  ngOnInit() {
    this.dropDownBoxInit();
  }

  clickSearch(){
    this.onSearch.emit({searchName:this.searchName,strategy:this.strategy,status:this.status});
  }

  //下拉组件初始化
  dropDownBoxInit() {
    this.dropDownBoxObj = new DropDownBoxObj(200, 26);
  }


}
