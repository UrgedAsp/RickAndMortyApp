import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { Result, RMpersonajes } from './interfaces/RMpersonajes.interface';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  
  constructor(private http: HttpClient) {}

  private _apiURL:string = 'https://rickandmortyapi.com/api';

  // Metodo para traer la informacion de los personajes
  getPersonajes() {
    const url = `${this._apiURL}/character`;
    return this.http.get<any>(url);
  }

  // Metodo buscador de personajes
  buscarPersonaje(termino: string) {
    const url = `${this._apiURL}/character/?name=${termino}`;
    return this.http.get<any>(url);
  }

  // Metodo para traer las localizaciones
  getLocalizaciones() {
    const url = `${this._apiURL}/location`;
    return this.http.get<any>(url);
  }

  // Metodo buscador de localizaciones
  buscarLocalizacion(termino: string) {
    const url = `${this._apiURL}/location/?name=${termino}`;
    return this.http.get<any>(url);
  }

  // Metodo para traer los episodios
  getEpisodios() {
    const url = `${this._apiURL}/episode`;
    return this.http.get<any>(url);
  }

  // Metodo buscador de episodios
  buscarEpisodios(termino: string) {
    const url = `${this._apiURL}/episode/?name=${termino}`;
    return this.http.get<any>(url);
  }


}
