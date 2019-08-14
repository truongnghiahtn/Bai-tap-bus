import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaiTapDatGheComponent } from './bai-tap-dat-ghe.component';
import { DanhSachGheComponent } from './danh-sach-ghe/danh-sach-ghe.component';
import { ItemGheComponent } from './item-ghe/item-ghe.component';



@NgModule({
  declarations: [BaiTapDatGheComponent, DanhSachGheComponent, ItemGheComponent],
  exports:[BaiTapDatGheComponent],
  imports: [
    CommonModule
  ]
})
export class BaiTapDatGheModule { }
