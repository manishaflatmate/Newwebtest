import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'; //import home components
import { AboutComponent } from './about/about.component'; //import about component
import { ListComponent } from './list/list.component'; //import list component
import { HaveComponent } from './details/have/have.component';
import { NeedComponent } from './details/need/need.component';
import { PgComponent } from './details/pg/pg.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'list', component: ListComponent },
  { path: 'have', component: HaveComponent },
  { path: 'need', component: NeedComponent },
  { path: 'pg', component: PgComponent },
  { path: '', component: HomeComponent, pathMatch: 'full'} // redirect to home page on load
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

