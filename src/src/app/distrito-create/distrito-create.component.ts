import { Component, OnInit } from '@angular/core';
import {Distrito} from '../model/distrito';
import { RappieduService } from '../rappiedu.service';
import { Router } from '@angular/router';

// Log In:
import { AuthService } from '../usuarios/auth.service';
import { HttpClient, HttpHeaders, HttpRequest, HttpEvent } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import swal from 'sweetalert2';

@Component({
  selector: 'app-distrito-create',
  templateUrl: './distrito-create.component.html',
  styleUrls: ['./distrito-create.component.css']
})
export class DistritoCreateComponent implements OnInit {

  distrito: Distrito = new Distrito();

  private urlEndPoint: string = 'http://localhost:8080/api/distrito/registrar';

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient, private rappieduService: RappieduService,
              private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  // Log In:
  private agregarAuthorizationHeader() {
    let token = this.authService.token;
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'Bearer ' + token);
    }
    return this.httpHeaders;
  }

  // Log In:
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

  create(Distrito: Distrito): Observable<Distrito> {

    return this.http.post(this.urlEndPoint, this.distrito, { headers: this.agregarAuthorizationHeader() })
    .pipe(
      map((response: any) => response.distrito as Distrito),
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

  save() {
    console.log(this.distrito);
    this.create(this.distrito)
      .subscribe(
        Distrito => {
          this.router.navigate(['RappiEDU/Estudiante/dis-list']);
          swal.fire('Nuevo Distrito', `El distrito ${this.distrito.nomDistrito} ha sido creado con éxito`, 'success');
        }
      );
  }
  /*
  save() {
    console.log(this.distrito);
    this.rappieduService.createDistrito(this.distrito).subscribe(
      data=> this.router.navigate(['RappiEDU/Estudiante/dis-list']) //luego ir a list para ver si se ha creado el producto
    )
  }
  */

}
