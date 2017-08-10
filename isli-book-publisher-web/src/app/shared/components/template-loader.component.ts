/**
 * Created by zhangle on 2017/3/25.
 */
import { Component, ViewContainerRef, Input, Output, TemplateRef, OnInit, OnDestroy, EmbeddedViewRef,AfterViewChecked,ElementRef } from '@angular/core';

@Component({
  selector: 'tl-templateLoader',
  template: ``
})
export class TemplateLoaderComponent implements OnInit, OnDestroy {

  @Input() templates: TemplateRef<any>;

  @Input() data: any;
  @Input() templateName: string;
  @Input() index: number;

  view: EmbeddedViewRef<any>;

  constructor(public viewContainer: ViewContainerRef) {}

  ngOnInit() {
    if(!this.templates||!this.templateName){
      return;
    }
    let index=0;
    let getView=(obj)=>{
      if(obj.name==this.templateName){
        this.view = this.viewContainer.createEmbeddedView(
          obj.template,
          {'\$implicit': Object.assign(this.data,{_index:this.index})}
        );
      }
    };
    let templateForEach=(template)=>{
      if(!template){
        return;
      }
      getView(template);
      index++;
      templateForEach(this.templates[index])
    };
    templateForEach(this.templates[index]);
  }

  ngOnDestroy() {
    if (this.view) this.view.destroy();
  }
}
