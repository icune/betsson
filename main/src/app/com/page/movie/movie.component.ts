import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../../../obj/scheme/movie';
import { MovieProviderService } from '../../../obj/base/movie-provider.service';
import { MovieCriteria } from '../../../obj/scheme/movie-criteria';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  movie: BehaviorSubject<Movie> = new BehaviorSubject(null);

  constructor(
      private route: ActivatedRoute,
      private movieProvider: MovieProviderService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.key) {
        let movieCriteria = new MovieCriteria();
        movieCriteria.ids = [parseInt(params.key)];
        this.movieProvider.getMovies(movieCriteria).subscribe(movies => {
          if (movies && movies.length)
            this.movie.next(movies[0]);
        })
      }
    })
  }

}
