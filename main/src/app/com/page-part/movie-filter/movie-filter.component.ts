import { Component, Input, OnInit } from '@angular/core';
import { MovieCriteria } from '../../../obj/scheme/movie-criteria';
import { MovieProviderService } from '../../../obj/base/movie-provider.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.scss']
})
export class MovieFilterComponent implements OnInit {
  @Input()
  criteriaSubject: BehaviorSubject<MovieCriteria>;
  criteria: MovieCriteria = new MovieCriteria();
  constructor(
      public movieProvider: MovieProviderService
  ) { }

  displayDurationLabel(num: number) {
    return Math.floor(num/60) + ':' + num % 60;
  }

  clear() {
    this.criteria = new MovieCriteria();
    this.submit();
  }

  ngOnInit() {
    this.submit();
  }

  submit() {
    this.criteriaSubject.next(this.criteria);
  }

}
