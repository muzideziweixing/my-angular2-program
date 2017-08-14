import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnSaleComponent } from './on-sale.component';
import { OnSaleDataTableComponent } from './on-sale-data-table/on-sale-data-table.component';
import { SharedModule } from '../../shared/shared.module';
import { ServicesModule } from '../services/services.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: OnSaleComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ServicesModule
  ],
  declarations: [OnSaleComponent, OnSaleDataTableComponent]
})
export class OnSaleModule {
}
