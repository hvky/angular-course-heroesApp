export interface Heroe {
  alter_ego:        string;
  characters:       string;
  first_appearance: string;
  publisher:        Publisher;
  superhero:        string;
  id?:              string;
  alt_img?:         string;
 }

 export enum Publisher {
  DCComics = "DC Comics",
  MarvelComics = "Marvel Comics",
 }
