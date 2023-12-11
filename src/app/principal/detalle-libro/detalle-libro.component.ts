import {Component, OnInit} from '@angular/core';
import {LibroLista} from "../../models/LibroLista";
import {ActivatedRoute} from "@angular/router";
import {LibrosService} from "../../services/libros.service";

@Component({
  selector: 'app-detalle-libro',
  templateUrl: './detalle-libro.component.html',
  styleUrls: ['./detalle-libro.component.scss']
})

export class DetalleLibroComponent implements OnInit {

    libro: LibroLista | undefined;

    constructor(
        private route: ActivatedRoute,
        private librosService: LibrosService
    ) { }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            const libroId = Number(params.get('id'));
            if (!isNaN(libroId)) {
                this.obtenerDetallesLibro(libroId);
            }
        });
    }

    obtenerDetallesLibro(libroId: number): void {
        this.librosService.detallesLibro(libroId).subscribe(
            (libro: LibroLista) => {
                this.libro = libro;
                console.log("Detalles del libro:", this.libro);
            },
            (error) => {
                console.error('Error al obtener detalles del libro:', error);
                // Manejo de error
            }
        );
    }
}
