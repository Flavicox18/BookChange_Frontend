import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {LibroLista} from "../../models/LibroLista";
import {LibrosService} from "../../services/libros.service";

@Component({
  selector: 'app-main-principal',
  templateUrl: './main-principal.component.html',
  styleUrls: ['./main-principal.component.scss']
})
export class MainPrincipalComponent implements OnInit{

  librosDisponibles: LibroLista[] = [];

  constructor(private librosService: LibrosService) { }

  ngOnInit(): void {
    this.obtenerLibrosDisponibles();
  }
  obtenerLibrosDisponibles(): void {
    this.librosService.listarLibrosDisponibles().subscribe(
      (libros: LibroLista[]) => {
        this.librosDisponibles = libros;
        console.log("datos :",this.librosDisponibles)
      },
      (error) => {
        console.error('Error al obtener libros disponibles:', error);
        // Manejo de error: podrías mostrar un mensaje al usuario o realizar alguna acción adicional.
      }
    );
  }
}
