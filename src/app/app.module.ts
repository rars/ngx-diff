import { NgxDiffModule } from 'ngx-diff';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgxDiffModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
