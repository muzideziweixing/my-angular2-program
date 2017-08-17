import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../shared';
import { FinanceServiceModule } from '../finance-service/finance-service.module';
import { CheckingDetailsModule } from '../checking-details/checking-details.module';

import { CheckingComponent } from './checking.component';
import { CheckingQueryFormComponent } from './checking-query-form/checking-query-form.component';
import { CheckingTotalComponent } from './checking-total/checking-total.component';
import { CheckingDataTableComponent } from './checking-data-table/checking-data-table.component';

const routes: Routes = [
  { path: '', component: CheckingComponent },
];
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FinanceServiceModule,
    CheckingDetailsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    CheckingComponent, 
    CheckingQueryFormComponent, 
    CheckingTotalComponent,
    CheckingDataTableComponent
  ]
})
export class CheckingModule { }
