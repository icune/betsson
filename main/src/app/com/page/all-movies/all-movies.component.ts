import { Component, OnInit } from '@angular/core';
import { MovieProviderService } from '../../../obj/base/movie-provider.service';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss']
})
export class AllMoviesComponent implements OnInit {

  constructor(public movieProvider: MovieProviderService) { }

  ngOnInit() {
      this.movieProvider.getMovies();
  }

}
