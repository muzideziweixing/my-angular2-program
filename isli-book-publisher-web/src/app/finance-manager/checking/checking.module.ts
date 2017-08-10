import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckingComponent } from './checking.component';
import { RouterModule, Routes } from '@angular/router';
import { CheckingQueryFormComponent } from './checking-query-form/checking-query-form.component';
import { CheckingDataTableComponent } from './checking-data-table/checking-data-table.component';
import { SharedModule } from '../../shared';

const routes: Routes = [
  { path: '', component: CheckingComponent },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [CheckingComponent, CheckingQueryFormComponent, CheckingDataTableComponent]
})
export class CheckingModule { }
