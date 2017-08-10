/**
 * Created by zhangle on 2017/3/22.
 */
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export class CalendarObj {

  constructor(
    public defaultDate: Date = new Date(),
    public dateFormat: string = 'yy-mm-dd',
    public placeholder?: string,
    public disabled?: boolean,
    public minDate?: Date,
    public maxDate?: Date,
    public showTime?:boolean,
    public showSeconds?:boolean,
    public monthNavigator?:boolean,
    public yearNavigator?:boolean,
    public readonly?:boolean,
    public showOtherMonths?:boolean
  ) { }

}

const CALENDAR = {
    firstDayOfWeek: 0,
    dayNames: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    dayNamesShort: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    dayNamesMin:["日", "一", "二", "三", "四", "五", "六"],
    monthNames: [ "1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月" ],
    monthNamesShort: [ "1", "2", "3", "4", "5", "6","7", "8", "9", "10", "11", "12" ]
};

@Component({
  selector: 'tl-calendar',
  template: `
        <p-calendar [ngModel]="value" (ngModelChange)="changValue($event)"
          [defaultDate]="calendarObj.defaultDate"
          [placeholder]="calendarObj.placeholder"
          [disabled]="calendarObj.disabled"
          [dateFormat]="calendarObj.dateFormat"
          [minDate]="calendarObj.minDate"
          [maxDate]="calendarObj.maxDate"
          [showTime]="calendarObj.showTime"
          [showSeconds]="calendarObj.showSeconds"
          [locale]="calendarData"
          [yearRange]="'1970:' + currentYear"
          [showOtherMonths]="calendarObj.showOtherMonths"
          [monthNavigator]="calendarObj.monthNavigator" 
          [yearNavigator]="calendarObj.yearNavigator"
          [readonlyInput]="calendarObj.readonly"
          (onBlur)="onInputBlur($event)"
        ></p-calendar>
    `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CalendarComponent),
      multi: true
    }
  ]
})
export class CalendarComponent implements ControlValueAccessor {

  onChange: Function = () => {};
  onTouched: Function = () => {};

  value: Date;
  @Input() calendarObj: CalendarObj;

  @Output() calendarObjChange: EventEmitter<any> = new EventEmitter();

  calendarData = CALENDAR;

  public currentYear;

  constructor(){
    this.currentYear = '' + new Date().getFullYear();
  }

  changValue(event) {
    this.value = event;
    this.onChange(event);
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  onInputBlur(event) {
    this.onTouched(event);
  }

  writeValue(value) {
    this.value = value;
  }
}
