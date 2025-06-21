import { Component } from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {FilmsService} from '../shared/films.service';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {Film} from '../shared/film';
import {Router, RouterLink} from '@angular/router';
import {FormsModule} from '@angular/forms';


@Component({
  selector: 'app-film-form',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatCardActions,
    MatButton,
    MatFormField,
    RouterLink,
    MatLabel,
    MatInput,
    FormsModule
  ],
  templateUrl: './film-form.component.html',
  styleUrl: './film-form.component.scss'
})
export class FilmFormComponent {

  film!: Film;

  constructor(private filmService: FilmsService,
  private router: Router) {
    this.initFilm()
  }

  initFilm(){
    this.film = {id: 0, name: '', genre: '', movieTime:'', watched: false}
  }

  addFilm() {
    this.filmService.addFilm(this.film);
    this.initFilm();
    this.router.navigate(['/list'])
  }

  refreshField(nomeFilme: string) {
    this.film.name = nomeFilme
    console.log(nomeFilme)
  }
}
