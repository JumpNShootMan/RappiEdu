import { Component, OnInit } from '@angular/core';
import { Profesor } from '../model/profesor';
import { RappieduService } from '../rappiedu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profesor-create',
  templateUrl: './profesor-create.component.html',
  styleUrls: ['./profesor-create.component.css']
})
export class ProfesorCreateComponent implements OnInit {

  profesor: Profesor = new Profesor();
  constructor(private rappieduService: RappieduService,
              private router: Router) { }

  ngOnInit(): void {
  }

  save(){
    console.log(this.profesor);
    this.rappieduService.createProfesor(this.profesor)
    .subscribe(
      data => this.router.navigate(['/prof-list']) 
      //con navigate... 
      //luego ir a list para ver si se ha creado
      //el producto
    )
  }
}
