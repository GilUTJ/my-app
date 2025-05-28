import { Routes } from '@angular/router';
import { InicioComponentComponent } from './inicio-component/inicio-component.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { ProductoComponent } from './producto/producto.component';

export const routes: Routes = [
  {path:"inicio",component:InicioComponentComponent},
  {path:"Directivas", component:DirectivasComponent},
  {path:"Empleados", component:EmpleadoComponent},
  {path:"inicioSesio", component:InicioSesionComponent},
  {path:"producto", component:ProductoComponent}
];
