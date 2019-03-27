import { Component, OnInit } from '@angular/core';
import { MovieProviderService } from '../../../obj/base/movie-provider.service';
import { Movie } from '../../../obj/scheme/movie';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss']
})
export class AllMoviesComponent implements OnInit {
  movies: BehaviorSubject<Movie[]> = new BehaviorSubject([]);

  constructor(public movieProvider: MovieProviderService) { }

  ngOnInit() {
      this.movieProvider.getMovies().subscribe((movies: Movie[]) => {
        this.movies.next(movies);
      });
  }

}
