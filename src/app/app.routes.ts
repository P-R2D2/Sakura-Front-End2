import { Routes } from '@angular/router';
import {FilmFormComponent} from './films/film-form/film-form.component';
import {FilmListComponent} from './films/film-list/film-list.component';

export const routes: Routes = [
  {'path': 'list', component: FilmListComponent},
  {'path': 'form', component: FilmFormComponent},
];
