import { Component } from '@angular/core';

@Component({
  selector: 'app-solicitud-intercambio',
  templateUrl: './solicitud-intercambio.component.html',
  styleUrls: ['./solicitud-intercambio.component.scss']
})
export class SolicitudIntercambioComponent {
  cancelar() {
    // Aquí puedes implementar la lógica para cancelar el registro.
    window.alert('Seguro que desea cancelar?');
  }

  guardar() {
    // Aquí puedes implementar la lógica para guardar los datos del registro.
    window.alert('Solicitud enviada con exito!!!');
  }
}
