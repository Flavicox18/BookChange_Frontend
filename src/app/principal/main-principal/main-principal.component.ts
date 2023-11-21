import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-principal',
  templateUrl: './main-principal.component.html',
  styleUrls: ['./main-principal.component.scss']
})
export class MainPrincipalComponent {
  @ViewChild('carruselContainer') carruselContainer!: ElementRef;

  elementosPorVista = 5;

  libros = [
    { titulo: '100 años de soledad', autor: 'Gabriel García Márquez', imagen: './assets/img/Libro1.webp' },
    { titulo: 'Harry Potter y la piedra filosofal', autor: 'J. K. Rowling', imagen: './assets/img/Libro2.webp' },
    { titulo: 'Los Juegos del Hambre en Llamas', autor: 'Suzzane Collins', imagen: './assets/img/Libro3.webp' },
    { titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', imagen: './assets/img/Libro4.jpg' },
    { titulo: 'El Principito', autor: 'Antoine de Saint-Exupéry', imagen: './assets/img/Libro5.webp' },
  ];
  moverCarrusel(direccion: number): void {
    const container = this.carruselContainer.nativeElement as HTMLElement;
    const scrollAmount = container.clientWidth / this.elementosPorVista * direccion;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}
