import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemComponent } from './system.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared';

const routes: Routes = [
  { path: '', component: SystemComponent },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [SystemComponent]
})
export class SystemModule { }
