import { Component, OnInit, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { trigger, state, style, transition, animate } from '@angular/animations'

export class DropDownBoxObj{
  constructor(
    public width:number=200,
    public height:number=26,
    public rows:number=5,
  ){}
}

@Component({
  selector: 'tl-drop-down-box',
  templateUrl: './drop-down-box.component.html',
  styleUrls: ['./drop-down-box.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropDownBoxComponent),
      multi: true
    }
  ],
  animations: [
    trigger('dialogState', [
      state('hidden', style({
        'max-height':'0'
      })),
      state('visible', style({
        'max-height':'156px'
      })),
      transition('visible => hidden', animate('300ms ease-out')),
      transition('hidden => visible', animate('300ms ease-out'))
    ])
  ],
})
export class DropDownBoxComponent implements OnInit {

  @Output() selectedFn:EventEmitter<any> = new EventEmitter();

  @Input() dropDownBoxObj:DropDownBoxObj;
  @Input() dropDownBoxValue:Array<any>;
  @Input() keyName:string;
  @Input() keyId:string;
  @Input() placeholder:string;

  public index:number;
  public mouseEnterFlag:boolean;
  public _toggleFlag:boolean;
  public animationFlag:boolean;

  public onChange: Function = () => { };
  public onTouched: Function = () => { };

  private _value:string;

  constructor() {
  }

  ngOnInit() {
  }

  registerOnChange(fn) {
    this.onChange = fn;
  }

  registerOnTouched(fn) {
    this.onTouched = fn;
  }

  writeValue(value) {
    this._value=value;
    //if(this.dropDownBoxValue&&this.dropDownBoxValue.length){
    //  for(let i = 0;i < this.dropDownBoxValue.length;i++){
    //    if(this.dropDownBoxValue[i][this.keyId]==this._value){
    //      this.index=i;
    //      return;
    //    }
    //  }
    //}
  }

  set value(value){
    this._value=value;
    try{
      this.onChange(value);
    }catch(error){
      return;
    }
    this.selectedFn.emit(value);
  }

  get value(){
    if(this.dropDownBoxValue&&this.dropDownBoxValue.length&&this._value){
      for(let obj of this.dropDownBoxValue){
        if(obj[this.keyId]==this._value){
          return obj[this.keyName];
        }
      }
    }
    return this.placeholder;
  }

  set toggleFlag(value){
    if(value){
      this._toggleFlag=value;
    }else{
      setTimeout(()=>{
        this._toggleFlag=value;
      },300);
    }
    this.animationFlag=value;
  }

  get toggleFlag(){
    return this._toggleFlag;
  }

  positionMouseLeave(){
    this.toggleFlag=false;
  }

  clickToggle(){
    this.toggleFlag=!this.toggleFlag;
  }

  select(obj,i){
    this.toggleFlag=!this.toggleFlag;
    if(this.index==i){
      return;
    }
    this.index=i;
    this.value=obj[this.keyId];
  }

  onMouseEnter(index){
    this.mouseEnterFlag=true;
  }

  onMouseLeave(){
    this.mouseEnterFlag=false;
  }

  get ngStylePosition(){
    return {
      'width':this.dropDownBoxObj&&(this.dropDownBoxObj.width+'px'),
      'height':this.dropDownBoxObj&&(this.dropDownBoxObj.height+'px'),
    }
  }

  get ngStyleDiv(){
    //console.log('-----------------');
    //console.log(this.dropDownBoxObj);
    //console.log(this.dropDownBoxObj&&(this.dropDownBoxObj.width-2+'px'));
    return {
      'width':this.dropDownBoxObj&&(this.dropDownBoxObj.width-2+'px'),
      'height':this.dropDownBoxObj&&(this.dropDownBoxObj.height-2+'px'),
    }
  }

  get ngStyleInput(){
    return {
      'width':this.dropDownBoxObj&&(this.dropDownBoxObj.width-34+'px'),
      'height':this.dropDownBoxObj&&(this.dropDownBoxObj.height-2+'px'),
      'line-height':this.dropDownBoxObj&&(this.dropDownBoxObj.height-2+'px')
    }
  }

  get ngStyleUl(){
    return {
      'width':this.dropDownBoxObj&&(this.dropDownBoxObj.width-2+'px'),
      'max-height':this.dropDownBoxObj&&((this.dropDownBoxObj.height-2)*this.dropDownBoxObj.rows+'px'),
    }
  }

  get ngStyleLi(){
    return {
      'height':this.dropDownBoxObj&&(this.dropDownBoxObj.height+2+'px'),
      'line-height':this.dropDownBoxObj&&(this.dropDownBoxObj.height+2+'px')
    }
  }

  get ulHeight(){
    //if(!this.dropDownBoxObj){
    //  return '0px';
    //}
    //console.log(this.dropDownBoxObj.height*this.dropDownBoxObj.rows+'px');
    ////return this.dropDownBoxObj.height*this.dropDownBoxObj.rows+'px';
    return '130px';
  }

}
