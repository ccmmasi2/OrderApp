import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowMessageComponent } from './show-message/show-message.component';
import { FormsModule } from '@angular/forms';
import { GenerateOrderComponent } from './generate-order/generate-order.component';

@NgModule({
  declarations: [
    ShowMessageComponent,
    GenerateOrderComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ShowMessageComponent,
    GenerateOrderComponent
  ]
})

export class SharedModule { }
