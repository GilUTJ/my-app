import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directivas',
  imports: [FormsModule],
  templateUrl: './directivas.component.html',
  styleUrl: './directivas.component.css'
})
export class DirectivasComponent {
  valor:number=0;


  edad="";
  puesto="";
  nombre="";
  genero="";
  sueldo="";
  cuatri="";

  frutas=["Banana", "Fresa", "Apple", "Aguacate"];

  // verduras =["Ejote", "Zanahoria", "Chayote", "Betabel"]

  productos =[{
    nombre:"FITO",
    tipo:"MAMIFERO",
    raza:"CHIHUAHUA",
    genero:"MACHO",
    precio:"500",
    talla:"CH"},
    {
    nombre:"ZEUS",
    tipo:"MAMIFERO",
    raza:"PIT BULL",
    genero:"MACHO",
    precio:"5000",
    talla:"G"},
    {
    nombre:"PIKACHU",
    tipo:"RAYO",
    raza:"ROEDOR",
    genero:"MACHO",
    precio:"10000",
    talla:"M"},
    {
    nombre:"SANSON",
    tipo:"AVE",
    raza:"LORO",
    genero:"HEMBRA",
    precio:"100",
    talla:"CH"}
  ];

}
