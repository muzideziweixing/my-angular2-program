import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared';

import { OprImageDetailsComponent } from '../opr-image-details/opr-image-details.component';
import { OprImgDetailsTableComponent } from '../opr-image-details/opr-img-details-table/opr-img-details-table.component';
import { OprImgDetailsQueryComponent } from '../opr-image-details/opr-img-details-query/opr-img-details-query.component';
import { OprImgDetailsTotalComponent } from '../opr-image-details/opr-img-details-total/opr-img-details-total.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
    ],
    declarations: [
        OprImageDetailsComponent,
        OprImgDetailsTableComponent,
        OprImgDetailsQueryComponent,
        OprImgDetailsTotalComponent
    ],
    exports: [
        OprImageDetailsComponent
    ]
})
export class OprImageDetailsModule { }
