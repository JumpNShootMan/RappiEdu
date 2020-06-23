import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EspecialidadCreateComponent } from './especialidad-create/especialidad-create.component';
import { EspecialidadListComponent } from './especialidad-list/especialidad-list.component';
import { ProfesorListComponent } from './profesor-list/profesor-list.component';
import { ProfesorCreateComponent } from './profesor-create/profesor-create.component';
//Para llamar a REST...
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { EstudianteCreateComponent } from './estudiante-create/estudiante-create.component';
import { EstudianteListComponent } from './estudiante-list/estudiante-list.component';
import { DistritoListComponent } from './distrito-list/distrito-list.component';
import { DistritoCreateComponent } from './distrito-create/distrito-create.component';
import { ServicioCreateComponent } from './servicio-create/servicio-create.component';
import { ServicioListComponent } from './servicio-list/servicio-list.component';
//

@NgModule({
  declarations: [
    AppComponent,
    EspecialidadCreateComponent,
    EspecialidadListComponent,
    ProfesorListComponent,
    ProfesorCreateComponent,
    EstudianteCreateComponent,
    EstudianteListComponent,
    DistritoListComponent,
    DistritoCreateComponent,
    ServicioCreateComponent,
    ServicioListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
