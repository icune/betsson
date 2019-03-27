import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../scheme/movie';
import { MovieCriteria } from '../scheme/movie-criteria';

@Injectable({
  providedIn: 'root'
})
export class MovieProviderService {
  constructor() { }
  getMovies(criteria: MovieCriteria = null): BehaviorSubject<Movie[]> {
      return new BehaviorSubject<Movie[]>([]);
  }
}
