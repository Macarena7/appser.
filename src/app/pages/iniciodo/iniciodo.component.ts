import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-iniciodo',
  templateUrl: './iniciodo.component.html',
  styleUrls: ['./iniciodo.component.scss'],
})
export class IniciodoComponent  implements OnInit {

  nombreUsuario: string | null = '';

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  
    this.route.queryParams.subscribe(params => {
    this.nombreUsuario = params['nombre'] || 'Usuario';
    });
  }

  asignadocente() {
    this.router.navigate(['/asigndocente']);
  }


  cerrarSesion() {
    // Redirige a la página de home
    this.router.navigate(['/home']);
  }
  
}
