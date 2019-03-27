import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MovieCriteria } from '../../../obj/scheme/movie-criteria';
import { MovieProviderService } from '../../../obj/base/movie-provider.service';
import { Movie } from '../../../obj/scheme/movie';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public movies: BehaviorSubject<Movie[]> = new BehaviorSubject(null);
  public criteriaSubject: BehaviorSubject<MovieCriteria>;
  constructor(public movieProvider: MovieProviderService) {
    this.criteriaSubject = new BehaviorSubject(null);
  }

  ngOnInit() {
    this.criteriaSubject.subscribe((criteria: MovieCriteria) => {
      this.movieProvider.getMovies(criteria).subscribe(movies => {
        this.movies.next(movies);
      })
    })
  }

}
