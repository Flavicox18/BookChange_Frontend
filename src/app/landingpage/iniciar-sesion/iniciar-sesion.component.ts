import { Component, OnInit } from '@angular/core';
import { AuthenticationService} from "../../services/authentication.service";
import { IniciarSesion} from "../../models/iniciarSesion";
import { FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "../../services/login.service";
import {LoginRequest} from "../../models/loginRequest";

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.scss']
})
export class IniciarSesionComponent {
  loginError: string = "";
  formularioSesion = this.formBuilder.group({
    correo: ['', [Validators.required, Validators.email]],
    contrasena: ['', Validators.required],
  })

  constructor(private formBuilder: FormBuilder, private router: Router, private loginService: LoginService) {
  }

  ngOnInit(): void {
  }

  get correo() {
    return this.formularioSesion.controls.correo;
  }

  get contrasena() {
    return this.formularioSesion.controls.contrasena;
  }

  login() {
    if (this.formularioSesion.valid) {
      this.loginError = "";
      this.loginService.login(this.formularioSesion.value as LoginRequest).subscribe({
        next: (userData) => {
          console.log(userData);
        },
        error: (errorData) => {
          console.error(errorData);
          this.loginError = errorData;
        },
        complete: () => {
          console.info("Login completo");
          this.router.navigateByUrl('/principal');
          this.formularioSesion.reset();
        }
      })

    }
    else{
      this.formularioSesion.markAllAsTouched();
      alert("Error al ingresar los datos.");
    }

    //          CODIGO ANTERIOR

    /*constructor(private authService: AuthenticationService, private fb: FormBuilder, private router: Router) {
      this.formularioSesion = this.fb.group({
        correo: ['', [Validators.required, Validators.email]],
        contrasena: ['', Validators.required]
      });
    }

    iniciarSesion() {
      const formulario = this.formularioSesion;

      if (formulario && formulario.valid) {
        const correo = formulario.get('correo')?.value;
        const contrasena = formulario.get('contrasena')?.value;

        if (correo && contrasena) {
          this.authService.iniciarSesion(correo, contrasena)
            .subscribe(
              (response) => {
                // Manejar la respuesta exitosa, por ejemplo, redirigir a otra página.
                console.log('Inicio de sesión exitoso:', response);
                this.router.navigate(['/principal']);
              },
              (error) => {
                // Manejar el error, por ejemplo, mostrar un mensaje de error al usuario.
                console.error('Error al iniciar sesión:', error);
                window.alert('Credenciales incorrectas, Intente de nuevo')

                if (error instanceof ErrorEvent) {
                  // Si es un error de red o cliente
                  console.error('Error de red o cliente:', error.message);
                } else if (error.error instanceof ProgressEvent) {
                  // Si la respuesta no se pudo analizar correctamente
                  console.error('Error de análisis de respuesta:', error.message);
                } else {
                  // Si la respuesta se recibió, pero contiene un error del servidor
                  console.error('Error del servidor:', error.error);
                }
              }
            );
        }
      }*/

  }
}
