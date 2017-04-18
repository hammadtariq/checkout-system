import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { RouterModule, PreloadAllModules, RouteReuseStrategy } from '@angular/router';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule'},
  // { path: '**', redirectTo: '/dashboard' }
  // { path: 'detail/:id', component: HeroDetailComponent },
  // { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
