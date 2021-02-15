import { Component, OnInit } from '@angular/core';
import { RickMortyService } from '../../rick-morty.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
})
export class PersonajesComponent implements OnInit{

  // Variables AutoComplete
  selectedPersonaje: any;
  personajesAC: any[] = [];
  personajes: any[] = []
  filteredPersonajes: any[] = [];

  // Variables Busqueda
  termino: any ;
  hayError: boolean = false;
  botonError: boolean = false

  constructor(private rickmortyService: RickMortyService) { }

  ngOnInit() {        
      this.rickmortyService.getPersonajes()
      .subscribe(personajes=> {this.personajesAC = personajes.results; this.personajes = personajes.results}
                ,(err=> this.personajesAC = []))
  }

  filterPersonaje(event : any) {
      let filtered : any[] = [];
      let query = event.query;

      for(let i = 0; i < this.personajesAC.length; i++) {
        let personaje = this.personajesAC[i];
        if (personaje.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
          filtered.push(personaje);
        }
      }
      this.filteredPersonajes = filtered
  }

  buscarPersonaje(termino: any){

    this.botonError = true;
    this.personajes = []
    this.hayError = false;
    this.termino = termino.name;

    this.rickmortyService.buscarPersonaje(this.termino).subscribe(personajes=> this.personajes = personajes.results
      ,(err=> {this.personajes = []}))

  }

  restaurarDatos(){
    this.botonError = false;
    this.personajes = this.personajesAC;
  }

}
