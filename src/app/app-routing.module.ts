import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

<<<<<<< HEAD
=======
// Componentes:
>>>>>>> master
import {EspecialidadListComponent} from './especialidad-list/especialidad-list.component';
import {EspecialidadCreateComponent} from './especialidad-create/especialidad-create.component'

import {ProfesorCreateComponent} from './profesor-create/profesor-create.component';
import {ProfesorListComponent} from './profesor-list/profesor-list.component';
import {EstudianteComponent} from './estudiante/estudiante.component';
import {ProfesorComponent} from './profesor/profesor.component';
import {HomepageComponent} from './homepage/homepage.component';
import {EstudianteCreateComponent} from './estudiante-create/estudiante-create.component';
import {EstudianteListComponent} from './estudiante-list/estudiante-list.component';
import {DistritoCreateComponent} from './distrito-create/distrito-create.component';
import {DistritoListComponent} from './distrito-list/distrito-list.component';

import {EstudianteCreateComponent} from './estudiante-create/estudiante-create.component';
import {EstudianteListComponent} from './estudiante-list/estudiante-list.component';

const routes: Routes = [
<<<<<<< HEAD
  {path: '', redirectTo: 'prof', pathMatch:'full'},
  
  {path: 'prof-list', component: ProfesorListComponent},
  {path: 'prof-new', component: ProfesorCreateComponent},

  {path: 'esp-list', component: EspecialidadListComponent},
  {path: 'esp-new', component: EspecialidadCreateComponent},

  {path: 'estu-list', component: EstudianteListComponent},
  {path: 'estu-new', component: EstudianteCreateComponent},

=======
  {path: '', redirectTo: 'RappiEDU', pathMatch:'full'},
  {path: 'RappiEDU', component: HomepageComponent},
  {path: 'RappiEDU/Profesor', component: ProfesorComponent},
  {path: 'RappiEDU/Estudiante', component: EstudianteComponent},
  {path: 'RappiEDU/Profesor/prof-list', component: ProfesorListComponent},
  {path: 'RappiEDU/Profesor/prof-new', component: ProfesorCreateComponent},
  {path: 'RappiEDU/Estudiante/estu-list', component: EstudianteListComponent},
  {path: 'RappiEDU/Estudiante/estu-new', component: EstudianteCreateComponent},
  {path: 'RappiEDU/Profesor/esp-list', component: EspecialidadListComponent},
  {path: 'RappiEDU/Profesor/esp-new', component: EspecialidadCreateComponent},
  {path: 'RappiEDU/Estudiante/dis-list', component: DistritoListComponent},
  {path: 'RappiEDU/Estudiante/dis-new', component: DistritoCreateComponent},
>>>>>>> master
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
