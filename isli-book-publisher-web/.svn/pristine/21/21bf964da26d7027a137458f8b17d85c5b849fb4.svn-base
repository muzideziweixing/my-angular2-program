import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettlementComponent } from './settlement.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared';
import { SettlementQueryFormComponent } from './settlement-query-form/settlement-query-form.component';
import { SettlementDataTableComponent } from './settlement-data-table/settlement-data-table.component';

const routes: Routes = [
  { path: '', component: SettlementComponent },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [SettlementComponent, SettlementQueryFormComponent, SettlementDataTableComponent]
})
export class SettlementModule { }
