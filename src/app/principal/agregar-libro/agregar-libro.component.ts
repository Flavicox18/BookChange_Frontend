import {Component} from '@angular/core';
import {LibrosService} from "../../services/libros.service";
import {Libros} from "../../models/Libros";
import {Route, Router} from "@angular/router";


@Component({
  selector: 'app-agregar-libro',
  templateUrl: './agregar-libro.component.html',
  styleUrls: ['./agregar-libro.component.scss']
})
export class AgregarLibroComponent{

  isbn: string = '';
  libroResultado: any;
  error: string | null = null;

  nombreLibro: string = '';
  generoLibro: string = '';
  fechaLibro: string = '';
  editorialLibro: string = '';
  autorLibro: string = '';
  sinopsisLibro: string = '';
  fotoLibro: string = '';
  isbnLibro: number = 0;
  estadoLibro: string = '';

  // Aquí puedes inicializar las propiedades del modelo según sea necesario
  nuevoLibro: Libros = new Libros();
  constructor(private librosService: LibrosService, private router:Router) {
  }

  buscar(): void {

    console.log("ISBN:", this.isbn)

    this.librosService.buscarLibroPorIsbn(this.isbn).subscribe(
      (libro) => {
        this.libroResultado = libro;

        console.log("libro Encontrado por ISBN:",this.libroResultado)
        console.log("Nombre:",this.libroResultado.nombre)
        console.log("Genero:",this.libroResultado.genero)
        console.log("Fecha Lanzamiento:",this.libroResultado.fechaLanzamiento)
        console.log("Editorial:",this.libroResultado.editorial)
        console.log("Autor:",this.libroResultado.autor)
        console.log("sinopsis:",this.libroResultado.sinopsis)
        console.log("foto:",this.libroResultado.foto)

        if (this.libroResultado.nombre === null ){this.libroResultado.nombre = ''}
        if (this.libroResultado.genero === null ){this.libroResultado.genero = ''}
        if (this.libroResultado.fechaLanzamiento === null ){this.libroResultado.fechaLanzamiento = ''}
        if (this.libroResultado.editorial === null ){this.libroResultado.editorial = ''}
        if (this.libroResultado.autor === null ){this.libroResultado.autor = ''}
        if (this.libroResultado.sinopsis === null ){this.libroResultado.sinopsis = ''}
        if (this.libroResultado.foto === null ){this.libroResultado.foto = ''}

        console.log("Genero:",this.libroResultado.genero)

        this.nombreLibro=this.libroResultado.nombre
        this.generoLibro=this.libroResultado.genero
        this.fechaLibro=this.libroResultado.fechaLanzamiento
        this.editorialLibro=this.libroResultado.editorial
        this.autorLibro=this.libroResultado.autor
        if (this.libroResultado.sinopsis && this.libroResultado.sinopsis.length > 250) {
          this.sinopsisLibro = this.libroResultado.sinopsis.substring(0, 250); // Recortar la sinopsis a 250 caracteres
        } else {
          this.sinopsisLibro = this.libroResultado.sinopsis; // Sinopsis dentro del límite
        }
        this.fotoLibro=this.libroResultado.foto
        this.isbnLibro=this.libroResultado.isbn

        this.error = null;
      },
      (error) => {
        this.error = 'Error al buscar el libro.';
        this.libroResultado = null;
      }
    );
  }
  cancelar() {
    // Aquí puedes implementar la lógica para cancelar el registro.
    window.alert('Seguro que desea cancelar?');
  }

  guardar() {

    // Asigna los datos al modelo Registrarse
    this.nuevoLibro.nombre = this.nombreLibro;
    this.nuevoLibro.autor = this.autorLibro;
    this.nuevoLibro.genero = this.generoLibro;
    this.nuevoLibro.editorial = this.editorialLibro;
    this.nuevoLibro.isbn = this.isbnLibro;
    this.nuevoLibro.estado = this.estadoLibro;
    this.nuevoLibro.fechaLanzamiento = this.fechaLibro;
    this.nuevoLibro.sinopsis = this.sinopsisLibro;
    this.nuevoLibro.foto = this.fotoLibro;

    console.log("datos: ", this.nuevoLibro)

    // Puedes asignar los valores del formulario al nuevoLibro u obtenerlos de otro lugar
    // Esto depende de cómo estás manejando los datos en tu componente
    this.librosService.agregarLibro(this.nuevoLibro).subscribe(
      () => {
        window.alert('Libro agregado con éxito!!!');
        // this.router.navigate(['/principal/verLibro']);
      },
      (error) => {
        window.alert('Error al agregar el libro.');
        console.error(error);
      }
    );
  }
}
