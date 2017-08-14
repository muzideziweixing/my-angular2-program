import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
// import { MessageServiceComponent } from './message-service/message-service.component';

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
  // declarations: [MessageServiceComponent]
})
export class MessageManagerModule { }
