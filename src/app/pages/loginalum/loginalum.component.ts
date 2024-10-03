import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';  //servicio de autenticación

@Component({
  selector: 'app-loginalum',
  templateUrl: './loginalum.component.html',
  styleUrls: ['./loginalum.component.scss'],
})
export class LoginalumComponent implements OnInit {

  formularioLogin: FormGroup;   
  mensajeError: string = ""; // Variable para el mensaje de error

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private authService: AuthService  
  ) {
    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {}

  atras() {
    this.router.navigate(['/home']);
  }

  resta() {
    this.router.navigate(['/restablecer']);
  }

  inicioalumno() {
    if (this.formularioLogin.valid) {
      const nombreUsuario = this.formularioLogin.get('nombre')?.value;
      const passwordUsuario = this.formularioLogin.get('password')?.value;

  
      if (this.authService.loginAlumno(nombreUsuario, passwordUsuario)) {
        this.mensajeError = ""; 
        this.router.navigate(['/inicioal'], { queryParams: { nombre: nombreUsuario } });
      } else {
        this.mensajeError = "Nombre de usuario o contraseña incorrectos.";
      }
    } else {
      this.formularioLogin.markAllAsTouched();
      this.mensajeError = "Por favor, complete todos los campos de nombre de usuario y contraseña.";
    }
  }

}