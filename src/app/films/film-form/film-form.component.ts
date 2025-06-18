import { Component } from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {FilmsService} from '../shared/films.service';
import {MatFormField} from '@angular/material/input';
import {Film} from '../shared/film';
import {RouterLink} from '@angular/router';


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
    RouterLink
  ],
  templateUrl: './film-form.component.html',
  styleUrl: './film-form.component.scss'
})
export class FilmFormComponent {
  film: Film = {id: 0, name: '', genre: '', movieTime:'', watched: false};
  constructor(private filmService: FilmsService) {

  }
}
