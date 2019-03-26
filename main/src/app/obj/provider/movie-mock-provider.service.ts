import { Injectable } from '@angular/core';
import { MovieProviderService } from '../base/movie-provider.service';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../scheme/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieMockProviderService extends MovieProviderService{

  constructor() { super() }
  getMovies(): BehaviorSubject<Movie> {
      console.log('MovieMockProviderService');
      return new BehaviorSubject<Movie>([]);
  }
}
