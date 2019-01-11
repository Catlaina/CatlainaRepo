import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkshopActivityComponent } from './workshop-activity/workshop-activity.component';
import { WorkshopActivitiesComponent } from './workshop-activities/workshop-activities.component';
import { WorkshopComponent } from './workshop/workshop.component';
import { CreateWorkshopComponent } from './create-workshop/create-workshop.component';
import { WorkshopListComponent } from './workshop-list/workshop-list.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkshopActivityComponent,
    WorkshopActivitiesComponent,
    WorkshopComponent,
    CreateWorkshopComponent,
    WorkshopListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation:false}),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
