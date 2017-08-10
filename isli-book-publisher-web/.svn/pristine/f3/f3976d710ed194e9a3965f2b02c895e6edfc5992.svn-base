import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'tl-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CheckBoxComponent),
      multi: true
    }
  ]
})
export class CheckBoxComponent implements OnInit {

  @Output() onSelectedFn:EventEmitter<any> = new EventEmitter();

  @Input() labelName:string;
  @Input() disabled:boolean;

  public onChange: Function = () => { };
  public onTouched: Function = () => { };
  public _value:boolean;

  constructor() { }

  ngOnInit() {
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
    this._value = value;
  }

  set value(value){
    if(value==null||value==undefined){
      return;
    }
    this._value=value;
    try{
      this.onChange(value);
    }catch(error){
      return;
    }
    this.onSelectedFn.emit(value);
  }

  get value(){
    return this._value
  }

}
