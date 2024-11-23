import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
              private _productService: ProductosService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(parametros => {
      console.log(parametros['termino']);
      this._productService.buscarProductos(parametros['termino']);
    });
  }

  get productos(): Producto[]{
    return this._productService.productosFiltrado;
  }

  get cargando(): boolean{
    return this._productService.cargando;
  }
}
