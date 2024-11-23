import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent implements OnInit {

  producto!: ProductoDescripcion;
  id!: string;

  constructor( private route: ActivatedRoute,
                private _productoService: ProductosService
  ) {

  }

  ngOnInit(): void {
    this.route.params.subscribe( parametros => {
      this.id = parametros['id'];
      this._productoService.getProducto(this.id).subscribe( (producto: ProductoDescripcion) => {
        this.producto = producto;
      });
    });
  }

}
