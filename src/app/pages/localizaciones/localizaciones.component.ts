import { Component, OnInit } from '@angular/core';
import { RickMortyService } from '../../rick-morty.service';

@Component({
  selector: 'app-localizaciones',
  templateUrl: './localizaciones.component.html',
  styleUrls: ['./localizaciones.component.css']
})
export class LocalizacionesComponent implements OnInit {

 // Variables AutoComplete
 selectedLocalizacion: any;
 localizacionAC: any[] = [];
 localizaciones: any[] = []
 filteredLocalizaciones: any[] = [];

 // Variables Busqueda
 termino: any ;
 hayError: boolean = false;
 botonError: boolean = false

 constructor(private rickmortyService: RickMortyService) { }

 ngOnInit() {        
     this.rickmortyService.getLocalizaciones()
     .subscribe(localizaciones=> {
                this.localizacionAC = localizaciones.results;
                this.localizaciones = localizaciones.results;
                for(let i = 0; i < this.localizaciones.length; i++){
                  let arrayResidents = this.localizaciones[i].residents;
                  this.localizaciones[i].residents = arrayResidents.length;
                }
              }
      ,(err=> {
                this.localizacionAC = [];
                this.localizaciones = []
              }
      ))

 }

 filterLocalizacion(event : any) {
     let filtered : any[] = [];
     let query = event.query;

     for(let i = 0; i < this.localizacionAC.length; i++) {
       let localizacion = this.localizacionAC[i];
       if (localizacion.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
         filtered.push(localizacion);
       }
     }

     this.filteredLocalizaciones = filtered
 }

 buscarLocalizacion(termino: any){

   this.botonError = true;
   this.localizaciones = []
   this.hayError = false;
   this.termino = termino.name;

   this.rickmortyService.buscarLocalizacion(this.termino)
   .subscribe(localizacion=> {
    this.localizaciones = localizacion.results
    for(let i = 0; i < this.localizaciones.length; i++){
      let arrayResidents = this.localizaciones[i].residents;
      this.localizaciones[i].residents = arrayResidents.length;
    }
    }
  ,(err=> {
    this.localizaciones = []
  }
  ))

 }

 restaurarDatos(){
   this.botonError = false;
   this.localizaciones = this.localizacionAC;
 }

}
