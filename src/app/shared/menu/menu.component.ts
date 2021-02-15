import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];    

  ngOnInit(){
    this.items = [
      {
        label: 'Personajes',
        icon: 'pi pi-users',
        routerLink: '/'
      },
      {
        label: 'Localizaciones',
        icon: 'pi pi-map',
        routerLink: 'localizaciones'
      },
      {
        label: 'Episodios',
        icon: 'pi pi-images',
        routerLink: 'episodios'
      }
    ]
  }

}