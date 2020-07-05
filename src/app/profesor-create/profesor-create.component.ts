import { Component, OnInit } from '@angular/core';
import { Profesor } from '../model/profesor';
import { RappieduService } from '../rappiedu.service';
import { Router } from '@angular/router';
import { Especialidad } from '../model/especialidad';

import swal from 'sweetalert2';

@Component({
  selector: 'app-profesor-create',
  templateUrl: './profesor-create.component.html',
  styleUrls: ['./profesor-create.component.css']
})
export class ProfesorCreateComponent implements OnInit {

  profesor: Profesor = new Profesor();
  especialidades : Especialidad[] = [];
  constructor(private rappieduService: RappieduService,
              private router: Router) { }

  ngOnInit(): void {
    this.cargando();
  }

  cargando(){
    console.log("Cargando especialidades")
    this.rappieduService.getEspecialidades().subscribe(especialidades => this.especialidades = especialidades);
    console.log(this.especialidades);
  }

  save(){
    console.log(this.profesor);
    this.rappieduService.createProfesor(this.profesor).subscribe(
      data => this.router.navigate(['RappiEDU/Profesor/prof-list']));
    swal.fire('REGISTRADO', `El profesor ${this.profesor.nomProfesor}, ha sido creado con éxito!`, 'success');
  }

  compararTipo(o1:Especialidad, o2:Especialidad) : boolean{
    if (o1===undefined && o2===undefined){
      return true;
    }
     return o1 === null || o2 === null || o1 === undefined || o2 === undefined  ? false : o1.idEspecialidad === o2.idEspecialidad
  }
}
