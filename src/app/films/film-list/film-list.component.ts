import { Component } from '@angular/core';
import {Film} from '../shared/film';
import {MatCard, MatCardTitle} from '@angular/material/card';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable, MatTableDataSource
} from '@angular/material/table';
import {MatCheckbox} from '@angular/material/checkbox';
import {FilmsService} from '../shared/films.service';
import {MatFabButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatTooltip} from '@angular/material/tooltip';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-film-list',
  imports: [
    MatCard,
    MatCardTitle,
    MatHeaderCell,
    MatCell,
    MatTable,
    MatCheckbox,
    MatHeaderRow,
    MatRow,
    MatColumnDef,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatIcon,
    MatFabButton,
    MatTooltip,
    RouterLink
  ],
  templateUrl: './film-list.component.html',
  styleUrl: './film-list.component.scss'
})

export class FilmListComponent {
  dataSource = new MatTableDataSource<Film>();

  constructor(private filmService: FilmsService) {
    this.dataSource.data = this.filmService.getFilms();
  }

  displayedColumns: string[] = ['descricao','genero','duracao','status','acao']


  toggleWatched(film: Film): void {
    film.watched = !film.watched;
  }

  getStatusLabel(film: Film): string {
    return film.watched ? 'Assistido' : 'Não assistido';
  }
}

