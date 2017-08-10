import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopCenterComponent } from './shop-center.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: ShopCenterComponent },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShopCenterComponent]
})
export class ShopCenterModule { }
