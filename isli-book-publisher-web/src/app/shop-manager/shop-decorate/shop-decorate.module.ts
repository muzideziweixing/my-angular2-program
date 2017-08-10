import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'now-template', loadChildren: 'app/shop-manager/shop-decorate/now-template/now-template.module#NowTemplateModule' },
  { path: '', redirectTo: 'now-template', pathMatch: 'full' },
  { path: '**', redirectTo: 'now-template' }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class ShopDecorateModule { }
