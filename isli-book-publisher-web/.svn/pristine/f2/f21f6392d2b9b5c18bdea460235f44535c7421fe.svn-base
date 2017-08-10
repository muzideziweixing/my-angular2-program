import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'system', loadChildren: 'app/message-manager/system/system.module#SystemModule' },
  { path: '', redirectTo: 'system', pathMatch: 'full' },
  { path: '**', redirectTo: 'system' }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class MessageManagerModule { }
