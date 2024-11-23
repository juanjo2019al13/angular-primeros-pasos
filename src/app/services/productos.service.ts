import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';
import { ProductoDescripcion } from '../interfaces/producto-descripcion.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private query: string = 'https://angular-html-3fa04-default-rtdb.firebaseio.com/';

  cargando: boolean = true;
  productos: Producto[] = [];
  productosFiltrado: Producto[] = [];

  constructor( private http: HttpClient ) { 
    this.cargarProductos();
  }

  cargarProductos() {

    return new Promise<void>( (resolve, reject) => {
      this.http.get<Producto[]>(`${this.query}productos_idx.json`).subscribe( (productos: Producto[]) => {
        this.productos = productos;
        this.cargando = false;
        resolve();
      });
    });

  }

  getProducto(id: string){
    return this.http.get<ProductoDescripcion>(`${this.query}productos/${id}.json`);
  }

  buscarProductos(termino: string){

    if (this.productos.length === 0) {

      this.cargarProductos().then(()=>{
        this.FiltrarProductos(termino);
      });

    }else{
      this.FiltrarProductos(termino);
    }
  }

  private FiltrarProductos(termino: string) {
    this.productosFiltrado = [];
    this.productos.forEach(producto => {
      if (producto.categoria?.indexOf(termino)! >= 0 || producto.titulo?.toLocaleLowerCase().indexOf(termino)! >= 0) {
        this.productosFiltrado.push(producto);
      }
    });
  }

}
