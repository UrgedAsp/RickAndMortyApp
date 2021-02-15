import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodiosComponent } from './pages/episodios/episodios.component';
import { LocalizacionesComponent } from './pages/localizaciones/localizaciones.component';
import { PersonajesComponent } from './pages/personajes/personajes.component';

const routes: Routes = [
  {
    path: '',
    component: PersonajesComponent,
    pathMatch: 'full'
  },
  {
    path: 'episodios',
    component: EpisodiosComponent
  },
  {
    path: 'localizaciones',
    component: LocalizacionesComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
