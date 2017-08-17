import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { NavModule } from './nav/nav.module';
import { SharedModule } from './shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'shop-manager',loadChildren:'app/shop-manager/shop-manager.module#ShopManagerModule'},
  {path:'merchandise-manager',loadChildren:'app/merchandise-manager/merchandise-manager.module#MerchandiseManagerModule'},
  {path:'transaction-manager',loadChildren:'app/transaction-manager/transaction-manager.module#TransactionManagerModule'},
  {path:'statistics-center',loadChildren:'app/statistics-center/statistics-center.module#StatisticsCenterModule'},
  {path:'finance-manager',loadChildren:'app/finance-manager/finance-manager.module#FinanceManagerModule'},
  {path:'message-manager',loadChildren:'app/message-manager/message-manager.module#MessageManagerModule'},
  {path:'account-manager',loadChildren:'app/account-manager/account-manager.module#AccountManagerModule'},
  {path:'',redirectTo:'shop-manager',pathMatch:'full'},
  {path:'**',redirectTo:'shop-manager'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NavModule,
    RouterModule.forRoot(routes),
    CoreModule.forRoot(),
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
