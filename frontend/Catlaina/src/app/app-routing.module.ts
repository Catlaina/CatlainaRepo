import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkshopComponent } from './workshop/workshop.component';
import { CreateWorkshopComponent } from './create-workshop/create-workshop.component';

const routes: Routes = [
  {path: "workshop", component: WorkshopComponent},
  {path: "createWorkshop", component: CreateWorkshopComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
