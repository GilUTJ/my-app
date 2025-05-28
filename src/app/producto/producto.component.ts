import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-producto',
  imports: [FormsModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
// Atributos
  producto={
    codigo:"",
    nombre:"",
    descripcion:"",
    existencia:"",
    precio:""
  }

  // metodos
  guadarProducto(){
  //      if(this.producto.codigo=="" ||
  //        this.producto.nombre=="" ||
  //        this.producto.descripcion=="" ||
  //        this.producto.existencia=="" ||
  //        this.producto.precio==""){
  //      alert("Todos los campos estan llenos");
  //        }
  //       else{
  //   alert("Voy a guardar el producto");
  //   this.limpiar();
  // }
    if(this.producto.codigo!="" &&
      this.producto.nombre!="" &&
      this.producto.descripcion!="" &&
      this.producto.existencia!="" &&
      this.producto.precio!=""
    ){
      alert("Todos los campos estan llenos");

    }else{
    alert("Voy a guardar el producto");
    this.limpiar();
  }
}

  limpiar(){
    this.producto.codigo="";
    this.producto.nombre="";
    this.producto.descripcion="";
    this.producto.existencia="";
    this.producto.precio="";
  }
}
