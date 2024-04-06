import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  {
    path: 'input',
    children: [
      {
        path: 'list',
        component: ProductListComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [], 
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class CatalogRoutingModule { }
