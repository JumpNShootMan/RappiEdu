//Imports
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'; //definir a mano
import {Especialidad} from './model/especialidad'; //definir a mano
import {Profesor} from './model/profesor'; //definir a mano
import {map} from 'rxjs/operators'; //definir a mano
import { Observable } from 'rxjs'; //definir a mano


//Inicio Servicio
@Injectable({
  providedIn: 'root'
})
export class RappieduService {
  //definir a mano
  private urlBase = 'http://localhost:8080/api';
  private httpHeaders = new HttpHeaders({'Content-type' : 'application/json'}); //definir a mano
  //inyectar http, también importarlo en app.module.ts
  constructor(private http: HttpClient) { }

  createEspecialidad(especialidad: Object) : Observable<Object>{ //para crear en create-product
    return this.http.post(this.urlBase+'/especialidad/registrar',especialidad, {headers:this.httpHeaders}); //enviando el producto al REST de STS
  }
  createProfesor(profesor: Object) : Observable<Object>{ //para crear en create-product
    return this.http.post(this.urlBase+'/profesor/registrarse',profesor, {headers:this.httpHeaders}); //enviando el producto al REST de STS
  }

  getProfesorList(): Observable<any>{ //Para llamar a la lista de productos en product-list.components.ts
    console.log('Llamando a REST: '+ this.urlBase + '/profesor/mostrar');
    return this.http.get(this.urlBase+'/profesores/mostrar').pipe( //llamado al REST de STS!
      map(response => response as Profesor[])
    );
  }

  getProfesorListId(id:number): Observable<any>{ //Para llamar a la lista de productos en product-list.components.ts
    console.log('Llamando a REST: '+ this.urlBase + '/profesor/buscar/id');
    return this.http.get(this.urlBase+'/profesor/buscar/id/'+id).pipe( //llamado al REST de STS!
      map(response => response as Profesor)
    );
  }

  getEspecialidadList(): Observable<any>{ //Para llamar a la lista de productos en product-list.components.ts
    console.log('Llamando a REST: '+ this.urlBase + '/especialidad/mostrar');
    return this.http.get(this.urlBase+'/especialidad/mostrar').pipe( //llamado al REST de STS!
      map(response => response as Especialidad[])
    );
  }

}
