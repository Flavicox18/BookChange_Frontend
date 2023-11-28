import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ver-perfil',
  templateUrl: './ver-perfil.component.html',
  styleUrls: ['./ver-perfil.component.scss']
})
export class VerPerfilComponent {
  generoSeleccionado = false;

  toggleGenero() {
    this.generoSeleccionado = !this.generoSeleccionado;
  }

  @ViewChild('carruselContainer') carruselContainer!: ElementRef;

  elementosPorVista = 5;

  libros = [
    {titulo: '100 años de soledad', autor: 'Gabriel García Márquez', imagen: './assets/img/Libro1.webp'},
    {titulo: 'Harry Potter y la piedra filosofal', autor: 'J. K. Rowling', imagen: './assets/img/Libro2.webp'},
    {titulo: 'Los Juegos del Hambre en Llamas', autor: 'Suzzane Collins', imagen: './assets/img/Libro3.webp'},
    {titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', imagen: './assets/img/Libro4.jpg'},
    {titulo: 'El Principito', autor: 'Antoine de Saint-Exupéry', imagen: './assets/img/Libro5.webp'},
  ];

  moverCarrusel(direccion: number): void {
    const container = this.carruselContainer.nativeElement as HTMLElement;
    const scrollAmount = container.clientWidth / this.elementosPorVista * direccion;
    container.scrollBy({left: scrollAmount, behavior: 'smooth'});
  }

  cancelar() {
    // Aquí puedes implementar la lógica para cancelar el registro.
    window.alert('Seguro que desea cerrar su sesion?');
  }
}
