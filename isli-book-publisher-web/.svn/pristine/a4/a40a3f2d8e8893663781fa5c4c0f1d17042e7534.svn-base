/**
 * Created by zhangle on 2017/3/25.
 */
import { Pipe, Input, TemplateRef, QueryList } from '@angular/core';

import { StringUtil } from '../utils';
import { TemplateRefDirective } from '../directives';

@Pipe({
  name: 'tlTemplate'
})
export class TemplateRefPipe {
  transform(value: Array<TemplateRefDirective>, name: string) : any {
    if (!value || value.length < 1 || StringUtil.isEmpty(name))   return null;
    let result: TemplateRefDirective = null;
    value.some(temRef => {
      if (temRef.name === name) {
        result = temRef;
        return true;
      }
    });
    return result && result.template;
  }
}
