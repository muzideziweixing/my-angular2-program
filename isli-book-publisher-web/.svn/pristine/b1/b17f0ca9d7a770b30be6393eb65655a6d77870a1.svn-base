import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'tl-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.css']
})

export class ConditionComponent implements OnInit {

  @Output() onClickTitle: EventEmitter<any> = new EventEmitter();
  @Output() onClickNumber: EventEmitter<any> = new EventEmitter();
  @Output() onClickTime: EventEmitter<any> = new EventEmitter();

  public isClickedFlag: string = 'clickTime';   // 默认按时间

  constructor() { }

  ngOnInit() { }

  // 按书名
  clickTitle() {
    this.onClickTitle.emit({ rowData: 'clickTitle' });
    this.isClickedFlag = 'clickTitle';
  }

  // 按次数
  clickNumber() {
    this.onClickNumber.emit({ rowData: 'clickTime' });
    this.isClickedFlag = 'clickNumber';
  }

  // 按时间
  clickTime() {
    this.onClickTime.emit({ rowData: 'clickTime' });
    this.isClickedFlag = 'clickTime';
  }
}


