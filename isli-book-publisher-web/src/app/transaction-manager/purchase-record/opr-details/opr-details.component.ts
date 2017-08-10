import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tl-opr-details',
  templateUrl: './opr-details.component.html',
  styleUrls: ['./opr-details.component.css']
})
export class OprDetailsComponent implements OnInit {

  @Output() onClickClosed: EventEmitter<any> = new EventEmitter();
  @Input() dataTableDetails;

  constructor() { }

  ngOnInit() { }

  // 关闭
  clickClosed() {
    this.onClickClosed.emit();
  }

}
