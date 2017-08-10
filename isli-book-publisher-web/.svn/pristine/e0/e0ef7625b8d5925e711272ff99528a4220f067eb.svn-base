import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'shop-center', loadChildren: 'app/shop-manager/shop-center/shop-center.module#ShopCenterModule' },
  { path: 'shop-datum', loadChildren: 'app/shop-manager/shop-datum/shop-datum.module#ShopDatumModule' },
  { path: 'shop-decorate', loadChildren: 'app/shop-manager/shop-decorate/shop-decorate.module#ShopDecorateModule' },
  { path: '', redirectTo: 'shop-center', pathMatch: 'full' },
  { path: '**', redirectTo: 'shop-center' }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class ShopManagerModule { }
