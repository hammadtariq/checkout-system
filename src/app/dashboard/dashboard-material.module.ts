import { NgModule } from '@angular/core';
import {
  MdTabsModule, MdToolbarModule, MdSidenavModule, MdIconModule, MdSlideToggleModule, MdListModule,
  MdMenuModule, MdButtonModule, MdGridListModule, MdCardModule, MdInputModule, MdCheckboxModule
} from '@angular/material';

@NgModule({
  imports: [
    MdSlideToggleModule,
    MdTabsModule,
    MdToolbarModule,
    MdIconModule,
    MdMenuModule,
    MdSidenavModule,
    MdButtonModule,
    MdGridListModule,
    MdCardModule,
    MdInputModule,
    MdCheckboxModule,
    MdListModule,
  ],
  exports: [
    MdListModule,
    MdSlideToggleModule,
    MdTabsModule,
    MdToolbarModule,
    MdIconModule,
    MdMenuModule,
    MdSidenavModule,
    MdButtonModule,
    MdGridListModule,
    MdCardModule,
    MdInputModule,
    MdCheckboxModule
  ],
})
export class DashboardMaterialModule { }
