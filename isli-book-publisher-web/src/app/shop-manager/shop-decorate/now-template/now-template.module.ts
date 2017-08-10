import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NowTemplateComponent } from './now-template.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: NowTemplateComponent },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NowTemplateComponent]
})
export class NowTemplateModule { }
