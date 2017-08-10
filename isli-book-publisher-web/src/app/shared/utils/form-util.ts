/**
 * Created by zhangle on 2017/3/27.
 */
import { ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

export class FormUtil {

  private errMsgKey = 'errMsg';
  private _doms: any = {};

  constructor(private el: ElementRef, private fg: FormGroup, private mesgs: any) {
    this.findDoms(this.el && this.el.nativeElement && this.el.nativeElement.children);
    this.forEachControl(null, this.fg.controls, (parent: string, field: string, control: any) => {
      control.valueChanges.subscribe(data => this.onValueChanged(field, control, data));
    });
  }

  /**
   * 获取formgroup下的所有control的doms
   * @returns {any}
     */
  public get doms(): any {
    return this._doms;
  }

  /**
   * 获取指定字段的错误消息
   * @param _field
   * @returns {null}
     */
  public mesg(_field: string) {
    let _mesg = null;
    let control = this.fg.get(_field);
    if(control){
      if(!control.errors){
          return null;
      }
      return control[this.errMsgKey];
    }
    this.forEachControl(null, this.fg.controls, (parent: string, field: string, control: any) => {
      if (_field === field) {
        if(!control.errors){
          return null;
        }
        _mesg = control[this.errMsgKey];
        return false;
      }
    });
    return _mesg;
  }

  public restMesg(){
     this.forEachControl(null, this.fg.controls, (parent: string, field: string, control: any) => {
      delete control[this.errMsgKey];
    });
  }

  /**
   * 校验指定的字段
   * @param field
     */
  public focus(field: string) {
    if (!field || !this.doms[field])  return;
    setTimeout(() => {
      this.doms[field].focus();
    }, 0);
  }

  /**
   * 校验formgroup
   */
  public validate() {
    let index = 0;
    this.forEachControl(null, this.fg.controls, (parent: string, field: string, control: any) => {
      this.onValueChanged(field, control, control.value);
      if (!index && this.mesg(field)) {
        this.focus(field);
        index++;
      }
    });
  }

  /**
   * 校验指定的字段，如果错误则获取焦点
   * @param field
   */
  public validateAndFocus(_field: string): boolean {
    if (!_field || !this.doms[_field])  return true;
    let _mesg = null;
    this.forEachControl(null, this.fg.controls, (parent: string, field: string, control: any) => {
      if (_field === field) {
        this.onValueChanged(field, control, control.value);
        if ((_mesg = this.mesg(field))) {
          this.focus(field);
        }
        return false;
      }
    });
    return _mesg;
  }

  /**
   * 处理control的错误信息
   * @param field
   * @param ctrl
   * @param data
     */
  private onValueChanged(field: string, ctrl: any, data?: any) {
    if (ctrl) ctrl[this.errMsgKey] = null;
    if (!ctrl || !ctrl.errors)  return;
    const messages = this.mesgs[field];
    for (const key in ctrl.errors) {
      ctrl[this.errMsgKey] = (ctrl[this.errMsgKey]||'') + ((messages ? messages[key] : null) || '<'+field+'>['+key+']('+(ctrl.errors[key]||'false')+')') + ' ';
      break;
    }
  }

  /**
   * 遍历formgroup下的所有control
   * @param parent
   * @param controls
   * @param callback
     */
  private forEachControl(parent: string, controls: any, callback) {
    if (!controls)  return;
    for (const field in controls) {
      this.forEachControl(field, controls[field].controls, callback);
      if (callback && (callback.bind(this))(parent, field, controls[field]) === false) {
        break;
      }
    }
  }

  /**
   * 获取formgroup下的所有control的doms
   * @param children
   * @returns {null}
     */
  private findDoms(children: Array<any>) {
    if (!children || children.length < 1)   return null;
    for (let i = 0, j = children.length; i < j; i++) {
      this.findDoms(children[i].children);
      if (!children[i].attributes) return;
      for (let a = 0, b = children[i].attributes.length; a < b; a++) {
        let attr = children[i].attributes[a];
        if (attr.name && attr.name === 'formcontrolname' && attr.value) {
          this._doms[attr.value] = children[i];
        }
      }
    }
  }

}
