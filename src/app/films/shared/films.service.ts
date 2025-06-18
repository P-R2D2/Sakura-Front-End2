import { Injectable } from '@angular/core';
import {Film} from './film';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  films!: Film[];

  constructor() {
    this.loadFilms();
  }

  private loadFilms() {
    this.films = [
      {id: 1, name: 'Interestelar', genre: 'Ficção científica', movieTime: '2hrs', watched: false},
      {id: 2, name: 'O Poderoso Chefão', genre: 'Crime', movieTime: '1.5hr', watched: true},
      {id: 3, name: 'A Origem', genre: 'Ação/Suspense', movieTime: '1hr', watched: false,},
      {id: 4, name: 'Planeta dos Macacos', genre: 'Ação', movieTime: '2hrs', watched: false},
    ];
  }

  getFilms() {
     return this.films;
  }

  addFilm(film: Film) {
    film.id = this.films[this.films.length-1].id+1
    film.watched = false;
    this.films.push(film);
  }

  removeFilm(id: number) {
    this.films = this.films.filter(film => film.id !== film.id);
  }

}
