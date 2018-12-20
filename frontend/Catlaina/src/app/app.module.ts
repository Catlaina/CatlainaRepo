import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkshopActivityComponent } from './workshop-activity/workshop-activity.component';
import { WorkshopActivitiesComponent } from './workshop-activities/workshop-activities.component';
import { WorkshopComponent } from './workshop/workshop.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkshopActivityComponent,
    WorkshopActivitiesComponent,
    WorkshopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
