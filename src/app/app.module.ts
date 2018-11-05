import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { MisVehiculosComponent } from './Componentes/mis-vehiculos/mis-vehiculos.component';
import { AgregarVehiculoComponent } from './Componentes/agregar-vehiculo/agregar-vehiculo.component';
import { ClienteService } from './Servicios/Cliente/cliente.service';

const appRoutes: Routes = [
  { path:'misVehiculos', component: MisVehiculosComponent },
  { path:'crear', component: AgregarVehiculoComponent },
  /**{ path: '**', component: PageNotFoundComponent }*/
];
@NgModule({
  declarations: [
    AppComponent,
    MisVehiculosComponent,
    AgregarVehiculoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
