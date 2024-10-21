import { Component } from '@angular/core';

@Component({
  selector: 'header-contenido',
  templateUrl: './header-contenido.component.html',
  styleUrls: ['./header-contenido.component.css']
})
export class HeaderContenidoComponent {
  isMenuHidden = false; // Menú oculto por defecto en pantallas pequeñas

  toggleMenu() {
    console.log("entramos");
    this.isMenuHidden = !this.isMenuHidden; // Alternar visibilidad del menú
  }
}
