import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseDataService } from './purchase-data.service'
import { PurchaseService } from './purchase.service'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    PurchaseDataService,
    PurchaseService
  ]
})
export class PurchaseServiceModule { }
