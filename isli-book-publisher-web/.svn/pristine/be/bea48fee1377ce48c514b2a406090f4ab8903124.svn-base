import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create.component';
import { RouterModule, Routes } from '@angular/router';
import { NewMerchandiseInfoComponent } from './new-merchandise-info/new-merchandise-info.component';
import { MerchandiseSaleInfoComponent } from './merchandise-sale-info/merchandise-sale-info.component';
import { CreateService } from './create.service';
import { SharedModule } from '../../shared';

const routes: Routes = [
  { path: '', component: CreateComponent },
];
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  providers: [CreateService],
  declarations: [
    CreateComponent,
    NewMerchandiseInfoComponent,
    MerchandiseSaleInfoComponent
  ]
})
export class CreateModule { }
