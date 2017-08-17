import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../shared';
import { PurchaseServiceModule } from '../purchase-service/purchase.module'
import { OprImageDetailsModule } from '../opr-image-details/opr-image-details.module';

import { PurchaseRecordComponent } from './purchase-record.component';
import { PurchaseQueryFormComponent } from './purchase-query-form/purchase-query-form.component';
import { PurchaseDataTableTabsComponent } from './purchase-data-table-tabs/purchase-data-table-tabs.component';
import { PurchaseDataTableListsComponent } from './purchase-data-table-lists/purchase-data-table-lists.component';
import { PurchaseDataTableImageTextComponent } from './purchase-data-table-image-text/purchase-data-table-image-text.component';
import { OprDetailsComponent } from './opr-details/opr-details.component';

const routes: Routes = [
  { path: '', component: PurchaseRecordComponent },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    OprImageDetailsModule,
    PurchaseServiceModule
  ],
  declarations: [
    PurchaseRecordComponent,
    PurchaseQueryFormComponent,
    PurchaseDataTableTabsComponent,
    PurchaseDataTableListsComponent,
    PurchaseDataTableImageTextComponent,
    OprDetailsComponent
  ]
})
export class PurchaseRecordModule { }
