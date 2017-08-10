import { Component, OnInit } from '@angular/core';
import { DropDownBoxObj } from '../../../shared';

@Component({
  selector: 'tl-checking-query-form',
  templateUrl: './checking-query-form.component.html',
  styleUrls: ['./checking-query-form.component.css']
})
export class CheckingQueryFormComponent implements OnInit {

  public dropDownBoxObj: DropDownBoxObj;
  public status: string = '';
  public start_time: string = '';
  public end_time: string = '';

  constructor() {
  }

  ngOnInit() {
    this.dropDownBoxInit();
  }

  dropDownBoxInit() {
    this.dropDownBoxObj = new DropDownBoxObj(200, 26);
  }

}
