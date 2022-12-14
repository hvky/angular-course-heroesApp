import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';

import { HeroesService } from '../../services/heroes.service';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 4px;
    }
  `]
})
export class AgregarComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  };

  constructor( private heroesService: HeroesService,
               private activatedRoute: ActivatedRoute,
               private router: Router ) { }

  ngOnInit(): void {

    if ( !this.router.url.includes('editar') ) return;

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.heroesService.getHeroePorId( id ) )
      )
      .subscribe( heroe => this.heroe = heroe )

  }

  guardar(): void {
    if( this.heroe.superhero.trim().length === 0 ) return;

    if ( this.heroe.id ) {
      this.heroesService.actualizarHeroe( this.heroe )
        .subscribe( console.log )
      return;
    } else {
      this.heroesService.agregarHeroe( this.heroe )
        .subscribe( heroe => this.router.navigate(['/heroes/editar', heroe.id]) )
    }
  }

  borrar(): void {
    this.heroesService.borrarHeroe( this.heroe.id! ).subscribe( resp => this.router.navigate([ '/heroes' ]) )
  }
}
