import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared/shared.module';

import { DetailsComponent } from './details.component';
import { QueryComponent } from './query/query.component';
import { TotalBarComponent } from './total-bar/total-bar.component';
import { DetailsTableComponent } from './details-table/details-table.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    DetailsComponent,
    QueryComponent,
    TotalBarComponent,
    DetailsTableComponent
  ],
  exports: [
    DetailsComponent
  ]
})
export class DetailsModule { }
