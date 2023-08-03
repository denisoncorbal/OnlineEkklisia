import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { CreateComponent } from './pages/church/create/create.component';
import { ListComponent } from './pages/church/list/list.component';
import { EditComponent } from './pages/church/edit/edit.component';
import { DeleteComponent } from './pages/church/delete/delete.component';

const routes: Routes = [
  { path: 'church/create', component: CreateComponent },
  { path: 'church/list', component: ListComponent },
  { path: 'church/edit/:churchId', component: EditComponent },
  { path: 'church/delete/:churchId', component: DeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [provideRouter(routes, withComponentInputBinding())]
})
export class AppRoutingModule { }
