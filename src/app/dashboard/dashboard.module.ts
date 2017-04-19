import { NgModule } from '@angular/core';

import { ProductComponent } from '../product/product.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardMaterialModule } from './dashboard-material.module';

@NgModule({
  imports: [
    DashboardRoutingModule,
    DashboardMaterialModule
  ],
  exports: [],
  declarations: [DashboardComponent, ProductComponent],
  providers: [],
})
export class DashboardModule { }
