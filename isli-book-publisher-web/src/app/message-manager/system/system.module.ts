import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemComponent } from './system.component';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../shared';
import { MessageModule } from '../message-service/message.module'

const routes: Routes = [
  { path: '', component: SystemComponent },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MessageModule
  ],
  declarations: [
    SystemComponent
  ]
})
export class SystemModule { }
