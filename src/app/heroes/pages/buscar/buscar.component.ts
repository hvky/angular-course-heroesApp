import { Component } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { Heroe } from '../../interfaces/heroes.interface';

import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent {

  termino: string = '';
  heroes: Heroe[] = [];
  heroeSleccionado!: Heroe | undefined;

  constructor( private heroesService: HeroesService ) { }

  buscando(): void {
    this.heroesService.getSugerencias( this.termino.trim() )
      .subscribe( heroe => this.heroes = heroe );
  }

  opcionSeleccionada( event: MatAutocompleteSelectedEvent ): void {
    if(!event.option.value) {
      this.heroeSleccionado = undefined;
      return
    };

    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;

    this.heroesService.getHeroePorId( heroe.id! )
      .subscribe( heroe => this.heroeSleccionado = heroe )
  }

}
