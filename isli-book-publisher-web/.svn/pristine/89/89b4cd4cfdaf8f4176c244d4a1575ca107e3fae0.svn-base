import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'purchase-record', loadChildren: 'app/transaction-manager/purchase-record/purchase-record.module#PurchaseRecordModule' },
  { path: '', redirectTo: 'purchase-record', pathMatch: 'full' },
  { path: '**', redirectTo: 'purchase-record' }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class TransactionManagerModule { }
