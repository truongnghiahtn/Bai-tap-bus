import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BaiTapDatGheModule} from './bai-tap-dat-ghe/bai-tap-dat-ghe.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,BaiTapDatGheModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
