import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tl-account-table',
  templateUrl: './account-table.component.html',
  styleUrls: ['./account-table.component.css']
})
export class AccountTableComponent implements OnInit {

  @Input() dataTableInfo:any;

  constructor() { }

  ngOnInit() {
  }

  getDisabled(privileges){
    for(let obj of privileges){
      if(obj.selected){
        return false;
      }
    }
    return true;
  }



}
