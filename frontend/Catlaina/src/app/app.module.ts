import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkshopActivityComponent } from './workshop-activity/workshop-activity.component';
import { WorkshopActivitiesComponent } from './workshop-activities/workshop-activities.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkshopActivityComponent,
    WorkshopActivitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
