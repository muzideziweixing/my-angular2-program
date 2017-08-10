import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'create',loadChildren:'app/merchandise-manager/create/create.module#CreateModule'},
  {path:'for-sale',loadChildren:'app/merchandise-manager/for-sale/for-sale.module#ForSaleModule'},
  {path:'on-sale',loadChildren:'app/merchandise-manager/on-sale/on-sale.module#OnSaleModule'},
  {path:'',redirectTo:'create',pathMatch:'full'},
  {path:'**',redirectTo:'create'}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class MerchandiseManagerModule { }
