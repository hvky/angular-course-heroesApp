import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform( heroe: Heroe ): string {
<<<<<<< HEAD

    if( !heroe.id && !heroe.alt_img ) {
      return `assets/no-image.png`
    } else if ( heroe.alt_img ) {
      return heroe.alt_img;
    } else {
      return `assets/heroes/${ heroe.id }.jpg`;
    }

=======
    return `assets/heroes/${ heroe.id }.jpg`;
>>>>>>> 7bd690766eec92c392bfac259a9090354659ea3c
  }

}
