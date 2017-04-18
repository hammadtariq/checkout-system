import { NgModule } from '@angular/core';

import { ProductComponent } from '../product/product.component';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    DashboardRoutingModule
  ],
  exports: [],
  declarations: [DashboardComponent, ProductComponent],
  providers: [],
})
export class DashboardModule { }
