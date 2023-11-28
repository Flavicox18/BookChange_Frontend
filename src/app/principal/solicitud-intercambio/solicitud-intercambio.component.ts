import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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


  formulario = this.fb.group({
    fecha: [null, [Validators.required, this.fechaMinimaValidator()]],
    duracion: [null, [Validators.required, Validators.min(1), Validators.max(365)]],
    periodo: ['dias', [Validators.required]],
    mensaje: [null, [Validators.required, Validators.maxLength(255)]],
  });

  constructor(private fb: FormBuilder) {
    this.formulario.get('periodo')?.valueChanges.subscribe(periodo => {
      const duracionControl = this.formulario.get('duracion');

      if (periodo === 'dias') {
        duracionControl?.setValidators([Validators.required, Validators.min(1), Validators.max(365)]);
      } else if (periodo === 'semanas') {
        duracionControl?.setValidators([Validators.required, Validators.min(1), Validators.max(52)]);
      } else if (periodo === 'meses') {
        duracionControl?.setValidators([Validators.required, Validators.min(1), Validators.max(12)]);
      }

      duracionControl?.updateValueAndValidity();
    });
  }

  obtenerMensajeErrorDuracion(): string {
    const duracionControl = this.formulario.get('duracion');

    if (duracionControl?.hasError('required')) {
      return 'La duración es obligatoria.';
    }

    if (duracionControl?.hasError('min')) {
      return 'La duración debe ser mayor o igual a 1.';
    }

    if (duracionControl?.hasError('max')) {
      const maximo = duracionControl.getError('max').max;

      return `La duración debe ser menor o igual a ${maximo}.`;
    }

    return '';
  }

  // Validador para la fecha mínima (hoy)
  fechaMinimaValidator() {
    return (control: { value: Date }) => {
      const fechaSeleccionada = control.value;
      const fechaMinima = new Date(); // Hoy

      if (fechaSeleccionada && fechaSeleccionada < fechaMinima) {
        return { fechaMinima: true };
      }

      return null;
    };
  }


}
