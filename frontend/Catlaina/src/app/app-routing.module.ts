import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkshopComponent } from './workshop/workshop.component';
import { CreateWorkshopComponent } from './create-workshop/create-workshop.component';
import { WorkshopListComponent } from './workshop-list/workshop-list.component';

const routes: Routes = [
  {path: "", redirectTo:"workshops", pathMatch:'full'},
  {path: "workshops", component: WorkshopListComponent},
  {path: "workshop/:id", component: WorkshopComponent},
  {path: "createWorkshop", component: CreateWorkshopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
