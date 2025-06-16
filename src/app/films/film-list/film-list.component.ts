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
  MatTable
} from '@angular/material/table';
import {MatCheckbox} from '@angular/material/checkbox';

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
    MatRowDef
  ],
  templateUrl: './film-list.component.html',
  styleUrl: './film-list.component.scss'
})

export class FilmListComponent {
displayedColumns: string[] = ['descricao','status','acao']

  films: Film[] = [
    { id: 1, nome: 'Interestelar', genre: 'Ficção científica', watched: false },
    { id: 2, nome: 'O Poderoso Chefão', genre: 'Crime', watched: true },
    { id: 3, nome: 'A Origem', genre: 'Ação/Suspense', watched: false }
  ];

  toggleWatched(film: Film): void {
    film.watched = !film.watched;
  }

  getStatusLabel(film: Film): string {
    return film.watched ? 'Assistido' : 'Não assistido';
  }
}

