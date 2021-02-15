import { Component, OnInit } from '@angular/core';
import { RickMortyService } from '../../rick-morty.service';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.css']
})
export class EpisodiosComponent implements OnInit {

 
  // Variables AutoComplete
  selectedEpisodio: any;
  episodiosAC: any[] = [];
  episodios: any[] = []
  filteredEpisodios: any[] = [];

  // Variables Busqueda
  termino: any ;
  hayError: boolean = false;
  botonError: boolean = false

  constructor(private rickmortyService: RickMortyService) { }

  ngOnInit() {        
      this.rickmortyService.getEpisodios()
      .subscribe
      (episodios=> {
        this.episodiosAC = episodios.results;
        this.episodios = episodios.results;
        for(let i = 0; i < this.episodios.length; i++){
          let arrayCharacters = this.episodios[i].characters;
          this.episodios[i].characters = arrayCharacters.length;
        }
      }
      ,(err=> this.episodiosAC = []))
  }

  filterEpisodio(event : any) {
      let filtered : any[] = [];
      let query = event.query;

      for(let i = 0; i < this.episodiosAC.length; i++) {
        let episodio = this.episodiosAC[i];
        if (episodio.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
          filtered.push(episodio);
        }
      }
      this.filteredEpisodios = filtered
  }

  buscarEpisodio(termino: any){

    this.botonError = true;
    this.episodios = []
    this.hayError = false;
    this.termino = termino.name;

    this.rickmortyService.buscarEpisodios(this.termino)
    .subscribe(
      episodios=> {
        this.episodios = episodios.results;
        for(let i = 0; i < this.episodios.length; i++){
          let arrayCharacters = this.episodios[i].characters;
          this.episodios[i].characters = arrayCharacters.length;
        }
      }
      ,(err=> {this.episodios = []}))

  }

  restaurarDatos(){
    this.botonError = false;
    this.episodios = this.episodiosAC;
  }

  buscarYouTube(episode: string){
    return window.open(`https://www.youtube.com/results?search_query=rick+and+morty+${episode}`)
  }

}
