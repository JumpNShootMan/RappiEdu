import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../model/estudiante';
import { RappieduService } from '../rappiedu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-estudiante-create',
  templateUrl: './estudiante-create.component.html',
  styleUrls: ['./estudiante-create.component.css']
})
export class EstudianteCreateComponent implements OnInit {

  estudiante: Estudiante = new Estudiante();
  constructor(private rappieduService: RappieduService,
              private router: Router) { }

  ngOnInit(): void {
  }

  save(){
    console.log(this.estudiante);
    this.rappieduService.createEstudiante(this.estudiante).subscribe(
      data => this.router.navigate(['/estu-list']) //luego ir a list para ver si se ha creado el producto
    )
  }
}
