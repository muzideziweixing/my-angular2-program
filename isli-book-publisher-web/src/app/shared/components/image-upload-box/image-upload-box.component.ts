import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tl-image-upload-box',
  templateUrl: './image-upload-box.component.html',
  styleUrls: ['./image-upload-box.component.css']
})
export class ImageUploadBoxComponent implements OnInit {

  @Output() onQTFileChange:EventEmitter<any> = new EventEmitter();
  @Output() onInputFileChange:EventEmitter<any> = new EventEmitter();

  @Input() buttonName:string;
  @Input() qtOnly:any;

  constructor() {
  }

  ngOnInit() {
  }

  //input调用图片上传
  imgUpLoad(event){
    this.onInputFileChange.emit(event);
  }

  //QT调用图片上传
  qtUploadImage(){
    this.onQTFileChange.emit();
  }
}
