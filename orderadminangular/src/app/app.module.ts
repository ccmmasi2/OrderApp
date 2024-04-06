import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './commonresources/layout/header/header.component';
import { MainPageComponent } from './commonresources/layout/main-page/main-page.component';
import { CatalogModule } from './modules/catalog/catalog.module';
import { MaterialModule } from './commonresources/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { EventService } from './commonresources/services/EventService';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CatalogModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})

export class AppModule { }
