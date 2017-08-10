/**
 * Created by lyj on 2017/4/18.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'stockStatusPipe'
})
export class StockStatusPipe implements  PipeTransform {
    transform(value: any):any {
        switch(value) {
            case 'on_sale':
                value="在售商品";
                break;
            case 'for_sale':
                value="待售商品";
                break;
            case 'stock':
                value="全部";
                break;
            default:
                value="其他未知状态";
        }
        return value;
    }
}

