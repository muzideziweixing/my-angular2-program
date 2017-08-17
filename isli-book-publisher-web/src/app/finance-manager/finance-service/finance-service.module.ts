import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceDataService } from './finance-data.service';
import { FinanceService } from './finance.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    FinanceService,
    FinanceDataService
  ]
})
export class FinanceServiceModule { }
