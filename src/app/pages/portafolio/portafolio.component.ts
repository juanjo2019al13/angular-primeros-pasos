import { Component } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.css'
})
export class PortafolioComponent {

  constructor( private _productService: ProductosService) {

  }

  get productos(): Producto[]{
    return this._productService.productos;
  }

  get cargando(): boolean{
    return this._productService.cargando;
  }

}
