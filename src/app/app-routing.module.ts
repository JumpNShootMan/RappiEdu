import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EspecialidadListComponent} from './especialidad-list/especialidad-list.component';
import {EspecialidadCreateComponent} from './especialidad-create/especialidad-create.component'
import {ProfesorCreateComponent} from './profesor-create/profesor-create.component';
import {ProfesorListComponent} from './profesor-list/profesor-list.component';

const routes: Routes = [
  {path: '', redirectTo: 'prof', pathMatch:'full'},
  {path: 'prof-list', component: ProfesorListComponent},
  {path: 'prof-new', component: ProfesorCreateComponent},
  {path: 'esp-list', component: EspecialidadListComponent},
  {path: 'esp-new', component: EspecialidadCreateComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
