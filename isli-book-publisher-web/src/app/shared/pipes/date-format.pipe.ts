import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value){
      return '';
    }
    return value.replace('T', ' ').replace(/\+.*/, '');
  }

}
