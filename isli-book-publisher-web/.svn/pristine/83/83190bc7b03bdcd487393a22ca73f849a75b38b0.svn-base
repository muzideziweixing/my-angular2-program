import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

export class ImageMagnifyBoxObj{

  private component:ImageMagnifyBoxComponent;

  constructor(
    public width:string,
    public height:string,
    public _visible:boolean=false,
    public imgUrl?:string
  ){}

  set visible(value){
    if(value&&this.component&&!this.component.ifImageMagnifyBox){
      this.component.ifImageMagnifyBox=true;
    }
    this._visible=value;
  }

  get visible(){
    return this._visible;
  }
}

@Component({
  selector: 'tl-image-magnify-box',
  templateUrl: './image-magnify-box.component.html',
  styleUrls: ['./image-magnify-box.component.css']
})
export class ImageMagnifyBoxComponent implements OnInit {

  @Output() onImageMagnifyClose:EventEmitter<any> = new EventEmitter();

  @Input() imageMagnifyBoxObj;

  public ifImageMagnifyBox:boolean=false;

  constructor() { }

  ngOnInit() {
    this.imageMagnifyBoxObj.component=this;
  }

  imageMagnifyClose(){
    this.imageMagnifyBoxObj.visible=false;
  }

}
