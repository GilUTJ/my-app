import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EncabezadoComponent } from './encabezado/encabezado.component';

@Component({

//Identificador de componentes para ser utilizado en un archivo HTML
  selector: 'app-root',
  
  //Imvocacion o adiccion de librerias, modulos y componentes a nuestro proyecto
  imports: [RouterOutlet, EncabezadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
