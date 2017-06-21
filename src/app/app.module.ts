import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AppComponent }  from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './home/home.component'; //import home components
import { AboutComponent } from './about/about.component'; //import about component
import { ListComponent } from './list/list.component'; 
import { HaveComponent } from './details/have/have.component';
import { NeedComponent } from './details/need/need.component';
import { PgComponent } from './details/pg/pg.component';

import { routing }  from './app.routing';
@NgModule({
  imports:      [ 
			BrowserModule,
			FormsModule,
			HttpModule,
			JsonpModule,
			MaterialModule,
			BrowserAnimationsModule,		
			routing
		],
  declarations: [ 
			AppComponent, 
			AboutComponent, HomeComponent, ListComponent, HaveComponent, NeedComponent, PgComponent
		],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
