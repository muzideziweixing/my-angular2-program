import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared/shared.module';

import { RecordComponent } from './record.component';
import { SearchComponent } from './search/search.component';
import { ConditionComponent } from './condition/condition.component';
import { ListComponent } from './list/list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    RecordComponent,
    SearchComponent,
    ConditionComponent,
    ListComponent
  ],
  exports: [
    RecordComponent
  ]
})
export class ReCordModule { }
