import { Injectable } from '@angular/core';
import { MovieProviderService } from '../base/movie-provider.service';
import { BehaviorSubject } from 'rxjs';
import { Movie, MovieRepository } from '../scheme/movie';
import { MovieCriteria } from '../scheme/movie-criteria';
import { movies } from './movie-mock.data';

@Injectable({
  providedIn: 'root'
})
export class MovieMockProviderService extends MovieProviderService{

  constructor() { super() }
  getMovies(criteria: MovieCriteria = null): BehaviorSubject<Movie[]> {
      let bs =  new BehaviorSubject<Movie[]>(null);
      this.loadMockData(bs, criteria);
      return bs;
  }

  loadMockData(bs: BehaviorSubject<Movie[]>, criteria: MovieCriteria) {
      let mRep = new MovieRepository();
      setTimeout(() => {
          bs.next(
              this.filterByCriteria(
                  mRep.convertFromRaw(movies),
                  criteria
              )
          )
      }, Math.random()*1000);
  }

  filterByCriteria(movies: Movie[], criteria: MovieCriteria): Movie[] {
      if (criteria === null) {
          return movies;
      } else {
          return [];
      }
  }

}
