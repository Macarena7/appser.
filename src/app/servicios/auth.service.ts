import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private docentes = [
    { nombre: 'hanamichi', password: '12345' },
  ];

  private alumnos = [
    { nombre: 'rukawa', password: '54321' },
  ];

  constructor() {}

  // Método para verificar docente
  loginDocente(nombre: string, password: string): boolean {
    return this.docentes.some(
      (docente) => docente.nombre === nombre && docente.password === password
    );
  }

  // Método para verificar alumno
  loginAlumno(nombre: string, password: string): boolean {
    return this.alumnos.some(
      (alumno) => alumno.nombre === nombre && alumno.password === password
    );
  }
}