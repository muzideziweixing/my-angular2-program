import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForSaleComponent } from './for-sale.component';
import { RouterModule, Routes } from '@angular/router';
import { ForSaleDataTableComponent } from './for-sale-data-table/for-sale-data-table.component';
import { SharedModule } from '../../shared/shared.module';
import { ServicesModule } from '../services/services.module';

const routes: Routes = [
  { path: '', component: ForSaleComponent },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ServicesModule
  ],
  declarations: [ForSaleComponent, ForSaleDataTableComponent]
})
export class ForSaleModule { }
