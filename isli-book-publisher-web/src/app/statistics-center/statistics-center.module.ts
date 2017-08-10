import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'download-record', loadChildren: 'app/statistics-center/download-record/download-record.module#DownloadRecordModule' },
  { path: '', redirectTo: 'download-record', pathMatch: 'full' },
  { path: '**', redirectTo: 'download-record' }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StatisticsCenterModule { }
