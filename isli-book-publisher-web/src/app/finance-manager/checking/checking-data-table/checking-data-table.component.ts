import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataTableObj} from '../../../shared';

@Component({
  selector: 'tl-checking-data-table',
  templateUrl: './checking-data-table.component.html',
  styleUrls: ['./checking-data-table.component.css']
})
export class CheckingDataTableComponent implements OnInit {

  @Output() onPageChange: EventEmitter<any> = new EventEmitter();
  @Output() onClickDetails: EventEmitter<any> = new EventEmitter();

  @Input() dataTableValue;
  @Input() pagingBoxObj;

  public dataTableObj: DataTableObj;

  constructor() { }

  ngOnInit() {
    this.dataTableInit();
  }

  // 详情
  clickDetails(rowData) {
    this.onClickDetails.emit(rowData); 
  }

  // 分页
  pageChange(event) {
    this.onPageChange.emit(event);
  }

  // 表格初始化
  dataTableInit() {
    this.dataTableObj = new DataTableObj([
      { template: 'date', header: '日期', ngStyle: { width: '20%' } },
      { template: 'trade_number', header: '交易单数', ngStyle: { width: '17%' } },
      { template: 'trade_total', header: '交易总额', ngStyle: { width: '18%' } },
      { template: 'trade_income', header: '交易收入', ngStyle: { width: '18%' } },
      { template: 'trade_charge', header: '交易手续费', ngStyle: { width: '18%' } },
      { template: 'oper', header: '操作', ngStyle: { width: '9%' } },
    ])
  }
}
