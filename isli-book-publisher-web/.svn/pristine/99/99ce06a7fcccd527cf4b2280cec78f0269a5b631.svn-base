import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../shared';
import { FinanceSharedModule } from '../finance-shared/finance-shared.module';
import { FinanceServiceModule } from '../finance-service/finance-service.module'; 

import { CheckingDetailsComponent } from './checking-details.component';
import { DetailsOverviewComponent } from './details-overview/details-overview.component'
 
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FinanceSharedModule,
    FinanceServiceModule, 
  ],
  declarations: [ 
    CheckingDetailsComponent, 
    DetailsOverviewComponent
  ],
  exports:[
    CheckingDetailsComponent
  ]
})
export class CheckingDetailsModule { }
