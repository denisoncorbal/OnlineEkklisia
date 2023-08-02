import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './pages/church/create/create.component';
import { ListComponent } from './pages/church/list/list.component';

const routes: Routes = [
  { path: 'church/create', component: CreateComponent },
  { path: 'church/list', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
