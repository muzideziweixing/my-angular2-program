import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; 

const routes: Routes = [
  { path: 'checking', loadChildren: 'app/finance-manager/checking/checking.module#CheckingModule' },
  { path: 'settlement', loadChildren: 'app/finance-manager/settlement/settlement.module#SettlementModule' },
  { path: '', redirectTo: 'checking', pathMatch: 'full' },
  { path: '**', redirectTo: 'checking' }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ] 
})
export class FinanceManagerModule { }
