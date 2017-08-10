import { Injectable } from '@angular/core';
import { OnSaleDataService } from './on-sale-data.service';
import { ForSaleDataService } from './for-sale-data.service';

const ON_SALE_URL='ON_SALE_URL';
const FOR_SALE_URL='FOR_SALE_URL';

@Injectable()
export class MerchandiseService {

  constructor(
    private http_on:OnSaleDataService,
    private http_for:ForSaleDataService
  ) {}

  public getOnSaleDataTableValue(queryData?:any){
    return this.http_on.get(ON_SALE_URL,null,null);
  }

  public getForSaleDataTableValue(queryData?:any){
    return this.http_for.get(FOR_SALE_URL,null,null);
  }

}
