import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MovieCriteria } from '../../../obj/scheme/movie-criteria';
import { MovieProviderService } from '../../../obj/base/movie-provider.service';
import { Movie } from '../../../obj/scheme/movie';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieCriteriaModifier } from '../../../obj/scheme/movie-criteria.modifier';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public movies: BehaviorSubject<Movie[]> = new BehaviorSubject(null);
  public criteriaSubject: BehaviorSubject<MovieCriteria>;
  public criteriaUpdater: BehaviorSubject<MovieCriteria> = new BehaviorSubject(new MovieCriteria());

  constructor(
      public movieProvider: MovieProviderService,
      public router: Router,
      public activatedRoute: ActivatedRoute
  ) {
    this.criteriaSubject = new BehaviorSubject(null);
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
        let mcm = new MovieCriteriaModifier();
        this.criteriaUpdater.next(mcm.fromQuery(params));
    });
    this.criteriaSubject.subscribe((criteria: MovieCriteria) => {
      let mcm = new MovieCriteriaModifier();
      this.updateQuery(mcm.toQuery(criteria));
      this.movieProvider.getMovies(criteria).subscribe(movies => {
        this.movies.next(movies);
      })
    });

  }

  updateQuery(params: object) {
    this.router.navigate([], {
        relativeTo: this.activatedRoute,
        queryParamsHandling: "merge",
        queryParams: params
    });
  }

}
