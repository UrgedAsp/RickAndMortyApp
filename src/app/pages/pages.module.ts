import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonajesComponent } from './personajes/personajes.component';
import { LocalizacionesComponent } from './localizaciones/localizaciones.component';
import { EpisodiosComponent } from './episodios/episodios.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EpisodiosComponent,
    LocalizacionesComponent,
    PersonajesComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    HttpClientModule,
    FormsModule
  ]
})
export class PagesModule { }
