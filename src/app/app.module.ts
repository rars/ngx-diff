import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgxDiffModule } from 'ngx-diff';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxDiffModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
