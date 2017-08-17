import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class SubscriptionService {

  private subjects:any = {};

  constructor() { }

  //订阅--接收
  subscript(orderOpt:any, optFunc:Function) {
    if (!optFunc) {
      return;
    }
    let subjectKey = "subject" + orderOpt;
    if (!this.subjects[subjectKey]) {
      this.subjects[subjectKey] = new Subject<any>();
    }
    this.subjects[subjectKey].asObservable().subscribe(optFunc);
  }

  //订阅--发送
  pubscript(orderOpt:any, value:any) {
    let subjectKey = "subject" + orderOpt;
    if (!this.subjects[subjectKey]) {
      throw Error("no suject subscript " + orderOpt);
    }
    this.subjects[subjectKey].next(value);
  }

}
