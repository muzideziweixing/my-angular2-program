import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tl-purchase-data-table-tabs',
  templateUrl: './purchase-data-table-tabs.component.html',
  styleUrls: ['./purchase-data-table-tabs.component.css']
})
export class PurchaseDataTableTabsComponent implements OnInit {

  @Output() onTabChangeList: EventEmitter<any> = new EventEmitter();
  @Output() onTabChangeImageText: EventEmitter<any> = new EventEmitter();

  @Input() purchaseTabsFlags;
  @Input() tabTotalInfo;

  constructor() { }

  ngOnInit() { }

  // 列表
  tabChangeList() {
    this.onTabChangeList.emit();
  }

  // 图文
  tabChangeImageText() {
    this.onTabChangeImageText.emit();
  }
}
