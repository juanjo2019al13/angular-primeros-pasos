import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';
import { Persona } from '../interfaces/persona.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada: boolean = false;

  equipo: Persona[] = [];

  constructor( private http: HttpClient) { 
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    this.http.get('assets/data/data-pagina.json').subscribe( (resp: InfoPagina) => {
      this.info = resp;
      this.cargada = true;
    });
  }

  private cargarEquipo() {
    this.http.get<Persona[]>('https://angular-html-3fa04-default-rtdb.firebaseio.com/equipo.json').subscribe( (equipo: Persona[]) => {
      this.equipo = equipo;
    });
  }
}
