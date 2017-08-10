import { Injectable } from '@angular/core';

let UUID = {};

@Injectable()
export class CommonFuncService {

  constructor() { }

  public static clone(object: any){
    if(object==null){
      return object;
    }else if(object instanceof Array){
      return CommonFuncService.cloneArray(object);
    }else if(typeof object == 'object'){
      return CommonFuncService.cloneObject(object);
    }else{
      return object;
    }
  }

  private static cloneObject(object){
    let result = new Object();
    for(let name in object){
      result [name] = CommonFuncService.clone(object[name]);
    }
    return result;
  }

  private static cloneArray(object){
    let result = [];
    for(let ob of object){
      result.push(CommonFuncService.clone(ob));
    }
    return result;
  }

  public static makeUUID(){
    let id = '' + parseInt('' + Math.random() * 100000, 10);
    while(UUID[id]){
      id = '' + parseInt('' + Math.random() * 100000, 10);
    }
    UUID[id] = 1;
    return id;
  }
  
}
