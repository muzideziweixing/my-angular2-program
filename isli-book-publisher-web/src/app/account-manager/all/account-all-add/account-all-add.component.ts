import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { STEP } from '../all.component';

@Component({
  selector: 'tl-account-all-add',
  templateUrl: './account-all-add.component.html',
  styleUrls: ['./account-all-add.component.css']
})
export class AccountAllAddComponent implements OnInit {

  @Output() onAdd: EventEmitter<any> = new EventEmitter();
  @Output() onSave: EventEmitter<any> = new EventEmitter();
  @Output() onCancel: EventEmitter<any> = new EventEmitter();

  @Input() step:STEP;

  constructor() { }

  ngOnInit() {
  }

  // 添加
  add() {
    this.onAdd.emit();
  }

  // 保存
  save(){
    this.onSave.emit();
  }

  // 取消
  cancel() {
    this.onCancel.emit();
  }
}
