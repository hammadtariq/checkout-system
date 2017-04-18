import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
// import { ViewWorkContainer } from "./view-works/view-works.container";
// import { EditWorkContainer } from "./edit-works/edit-works.container";
// import { SearchWorkContainer } from "./search-works/search-works.container";

@NgModule({
  imports: [
    RouterModule.forChild([
      // {
      //   path: ':id',
      //   component: ViewWorkContainer,
      // },
      // {
      //   path: ':id/edit',
      //   component: EditWorkContainer,
      // },
      {
        path: '',
        component: DashboardComponent,
        children: [
          // {
          //     path: '',
          //     component: SearchWorkComponent
          // }
        ]
      },
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule {
}
