import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkshopComponent } from './workshop/workshop.component';
import { CreateWorkshopComponent } from './create-workshop/create-workshop.component';
import { WorkshopListComponent } from './workshop-list/workshop-list.component';

const routes: Routes = [
  {path: "workshops", component: WorkshopListComponent},
  {path: "workshop", component: WorkshopComponent},
  {path: "createWorkshop", component: CreateWorkshopComponent},
  {path: "", redirectTo:"workshops", pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
