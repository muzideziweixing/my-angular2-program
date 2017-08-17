import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { downloadServiceModule } from '../download-service/download-service.module';
import { DetailsModule } from './details/details.module';
import { ReCordModule } from './record/record.module';

import { DownloadRecordComponent } from './download-record.component';

import { DownloadServiceDataService } from '../download-service/download-service-data.service';
import { DownloadServicesService } from '../download-service/download-services.service';

const routes: Routes = [
  { path: '', component: DownloadRecordComponent },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DetailsModule,
    ReCordModule,
    downloadServiceModule,
    RouterModule.forChild(routes)
  ], 
  declarations: [
    DownloadRecordComponent,
  ]
})
export class DownloadRecordModule { }
