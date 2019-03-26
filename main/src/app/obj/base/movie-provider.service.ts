import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../scheme/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieProviderService {
  constructor() { }
  getMovies(): BehaviorSubject<Movie> {
      console.log('MovieProviderService');
      return new BehaviorSubject<Movie>([]);
  }
}
