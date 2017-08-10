import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllComponent } from './all.component';
import { AccountAllAddComponent } from './account-all-add/account-all-add.component';
import { AccountAllDataTableComponent } from './account-all-data-table/account-all-data-table.component';
import { SharedModule } from '../../shared';
import { ServicesModule } from '../services/services.module';
import { RouterModule, Routes } from '@angular/router';
import { CreateNewAccountComponent } from './create-new-account/create-new-account.component';
import { AccountPrivilegesComponent } from './create-new-account/account-privileges/account-privileges.component';
import { AccountTableComponent } from './create-new-account/account-table/account-table.component';

const routes: Routes = [
  { path: '', component: AllComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ServicesModule
  ],
  declarations: [AllComponent, AccountAllAddComponent, AccountAllDataTableComponent, CreateNewAccountComponent, AccountPrivilegesComponent, AccountTableComponent]
})
export class AllModule { }
