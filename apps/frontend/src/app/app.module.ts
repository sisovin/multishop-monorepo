import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { apiClient, formValidators } from '@multishop/shared-utils';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    apiClient,
    formValidators
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
