import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreateComponent} from './create/create.component';
import {DetailComponent} from './detail/detail.component';
import {EditPageComponent} from './edit-page/edit-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: 'home', component: HomePageComponent},
  {path: 'edit/:id', component: EditPageComponent},
  {path: 'create', component: CreateComponent},
  {path: 'detail/:id', component: DetailComponent},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
