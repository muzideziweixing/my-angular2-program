import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'freightAddress'
})
export class FreightAddressPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.area_name + ',' + value.address;
  }

}
