import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando: boolean = true;
  productos: Producto[] = [];

  constructor( private http: HttpClient ) { 
    this.cargarProductos();
  }

  cargarProductos() {
    this.http.get<Producto[]>('https://angular-html-3fa04-default-rtdb.firebaseio.com/productos_idx.json').subscribe( (productos: Producto[]) => {
      this.productos = productos;
      this.cargando = false;
      console.log(productos);
    });
  }
}
