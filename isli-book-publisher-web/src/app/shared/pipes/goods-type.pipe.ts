import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'goodsType'
})
export class GoodsTypePipe implements PipeTransform {

    transform(value:any, args?:any):any {
        if(value==1){
            return '图书';
        }
        return '';
    }

}
