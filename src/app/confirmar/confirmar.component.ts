import { Component, OnInit } from '@angular/core';
import { Contrato } from '../model/contrato';
import { Observable } from 'rxjs';
import { RappieduService } from '../rappiedu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styleUrls: ['./confirmar.component.css']
})
export class ConfirmarComponent implements OnInit {

  contratos: Observable<Contrato>
  fId: number;
  constructor(private rappieduService: RappieduService,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  // procesarClick(){
  //   this.rappieduService.getProfesorListId(this.fId).subscribe(profesores =>this.profesores = profesores);
  // }

  reloadData(){
    console.log("Reload!!!")
    this.rappieduService.getContratoList().subscribe(contratos => this.contratos = contratos);
  }

  confirm(){
    console.log(this.contratos);
    //this.rappieduService.confirmarContrato(this.contratos).subscribe(
    data => this.router.navigate(['RappiEDU/Estudiante/con-list']) 
      //con navigate... 
      //luego ir a list para ver si se ha creado
      //el profesor
    //)
  }
}

