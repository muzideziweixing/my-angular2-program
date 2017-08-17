import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MerchandiseService } from './merchandise.service';
import { ForSaleService } from './for-sale.service';
import { OnSaleService } from './on-sale.service';

import { OnSaleDataService } from './on-sale-data.service';
import { ForSaleDataService } from './for-sale-data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    MerchandiseService,
    ForSaleService,
    OnSaleService,

    ForSaleDataService,
    OnSaleDataService
  ]
})
export class ServicesModule {
}
