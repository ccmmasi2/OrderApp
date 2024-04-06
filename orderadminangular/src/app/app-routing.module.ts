import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './modules/catalog/product-list/product-list.component';

const routes: Routes = [ 
  {
    path: '',
    component: ProductListComponent
  }, 
  {
    path: 'input',
    loadChildren: () =>
      //import('@modules/catalog/catalog.module').then((m) => m.InputModule), 
  }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
