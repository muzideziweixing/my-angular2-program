import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'all',loadChildren:'app/account-manager/all/all.module#AllModule'},
  {path:'',redirectTo:'all',pathMatch:'full'},
  {path:'**',redirectTo:'all'}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class AccountManagerModule { }
