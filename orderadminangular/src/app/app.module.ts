import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/header/header.component';
import { CatalogModule } from './modules/catalog/catalog.module';
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './modules/home/home/home.component';
import { MainpageComponent } from './layout/mainpage/mainpage.component';
import { SharedModule } from './modules/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MainpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CatalogModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
