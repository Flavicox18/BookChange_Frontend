import { Component } from '@angular/core';

@Component({
  selector: 'app-agregar-libro',
  templateUrl: './agregar-libro.component.html',
  styleUrls: ['./agregar-libro.component.scss']
})
export class AgregarLibroComponent {
  terminoBusqueda: string = '';
  buscar() {
    // Lógica de búsqueda aquí, por ejemplo, puedes hacer una llamada a un servicio
    // y actualizar los resultados en this.resultados
    // this.resultados = servicio.buscarLibrosPorISBN(this.terminoBusqueda);
  }
  cancelar() {
    // Aquí puedes implementar la lógica para cancelar el registro.
    window.alert('Seguro que desea cancelar?');
  }

  guardar() {
    // Aquí puedes implementar la lógica para guardar los datos del registro.
    window.alert('Libro agregado con exito!!!');
  }
}
