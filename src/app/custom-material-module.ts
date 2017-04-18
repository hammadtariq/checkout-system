import { NgModule } from '@angular/core';
import { MdButtonModule, MdCardModule, MdInputModule, MdCheckboxModule } from '@angular/material';

@NgModule({
  imports: [
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdCheckboxModule,
  ],
  exports: [
    MdButtonModule,
    MdCardModule,
    MdInputModule,
    MdCheckboxModule
  ],
})
export class CustomMaterialModule { }
