import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared';
import { FinanceSharedModule } from '../finance-shared/finance-shared.module';
import { FinanceServiceModule } from '../finance-service/finance-service.module'; 

import { SettlementDetailsComponent } from './settlement-details.component';
import { DetailsOverviewComponent } from './details-overview/details-overview.component';
import { DetailsProofComponent } from './details-proof/details-proof.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FinanceServiceModule,
    FinanceSharedModule
  ],
  declarations: [
    SettlementDetailsComponent,
    DetailsOverviewComponent,
    DetailsProofComponent
  ],
  exports:[
    SettlementDetailsComponent
  ]
})
export class SettlementDetailsModule { }
