import { Component, OnInit } from '@angular/core';
import { Especialidad } from '../model/especialidad';
import { RappieduService } from '../rappiedu.service';
import { Router } from '@angular/router';

// Log In:
import { AuthService } from '../usuarios/auth.service';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import swal from 'sweetalert2';

@Component({
  selector: 'app-especialidad-create',
  templateUrl: './especialidad-create.component.html',
  styleUrls: ['./especialidad-create.component.css']
})
export class EspecialidadCreateComponent implements OnInit {

  especialidad: Especialidad = new Especialidad();

  private urlEndPoint: string = 'http://localhost:8080/api/especialidad/registrar';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, private rappieduService: RappieduService,
              private router: Router, private authService: AuthService) { }

              
  ngOnInit(): void {
  }

  private agregarAuthorizationHeader() {
    let token = this.authService.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }

  private isNoAutorizado(e): boolean {
    if (e.status == 401) {

      if (this.authService.isAuthenticated()) {
        this.authService.logout();
      }
      this.router.navigate(['/login']);
      return true;
    }
    return false;
  }

  create(Especialidad: Especialidad): Observable<Especialidad> {

    return this.http.post(this.urlEndPoint, this.especialidad, { headers: this.agregarAuthorizationHeader() })
    .pipe(
      map((response: any) => response.especialidad as Especialidad),
      catchError(e => {
        if (this.isNoAutorizado(e)) {
          return throwError(e);
        }

        if (e.status == 400) {
          return throwError(e);
        }

        console.error(e.error.mensaje);
        swal.fire(e.error.mensaje, e.error.error, 'error');
        return throwError(e);
      })
    );
  }

/*
save() {
  console.log(this.especialidad);
  this.rappieduService.createEspecialidad(this.especialidad).subscribe(
    data => this.router.navigate(['RappiEDU/Profesor/esp-list']) //luego ir a list para ver si se ha creado el producto
  )
}
*/

save() {
  console.log(this.especialidad);
  this.create(this.especialidad)
    .subscribe(
      Especialidad => {
        this.router.navigate(['RappiEDU/Profesor/esp-list']);
        swal.fire('Nueva especialidad', `La especialidad ${this.especialidad.nomEspecialidad} ha sido creado con éxito`, 'success');
      }
    );
}

}
