import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { DownloadRecordComponent } from './download-record.component';

import { RecordComponent } from './record/record.component';
import { SearchComponent } from './record/search/search.component';
import { ConditionComponent } from './record/condition/condition.component';
import { ListComponent } from './record/list/list.component';

import { DetailsComponent } from './details/details.component';
import { QueryComponent } from './details/query/query.component';

import { DownloadServiceDataService } from '../download-service/download-service-data.service';
import { DownloadServicesService } from '../download-service/download-services.service';
import { DetailsTableComponent } from './details/details-table/details-table.component';
import { TotalBarComponent } from './details/total-bar/total-bar.component';

const routes: Routes = [
  { path: '', component: DownloadRecordComponent },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    DownloadServicesService,
    DownloadServiceDataService
  ],
  declarations: [
    DownloadRecordComponent,
    RecordComponent,
    SearchComponent,
    ConditionComponent,
    ListComponent,
    DetailsComponent,
    QueryComponent,
    DetailsTableComponent,
    TotalBarComponent,
  ]
})
export class DownloadRecordModule { }
