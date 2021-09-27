import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {PrincipalFormComponent} from "./components/principal-form/principal-form.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'form', component: PrincipalFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
