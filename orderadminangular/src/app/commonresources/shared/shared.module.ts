import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionDialogComponent } from './components/action-dialog/action-dialog.component';
import { BreadCrumbComponent } from './components/bread-crumb/bread-crumb.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    ActionDialogComponent,
    BreadCrumbComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    BreadCrumbComponent,
    ActionDialogComponent
  ]
})

export class SharedModule { }
