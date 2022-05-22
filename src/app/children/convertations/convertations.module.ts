import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ConvertationsRoutingModule } from './convertations-routing.module';
import { ConverterComponent } from './pages/converter/converter.component';


@NgModule({
  declarations: [
    ConverterComponent
  ],
  imports: [
    CommonModule,
    ConvertationsRoutingModule,
    FormsModule,
  ],
  exports: [

  ],
  bootstrap:[ConverterComponent]
})
export class ConvertationsModule { }
