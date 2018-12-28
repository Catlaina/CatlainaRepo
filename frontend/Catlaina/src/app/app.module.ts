import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

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
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
