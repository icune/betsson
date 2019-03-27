import { Component, OnInit } from '@angular/core';
import { MovieCriteria } from '../../../obj/scheme/movie-criteria';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.scss']
})
export class MovieFilterComponent implements OnInit {
  criteria: MovieCriteria = new MovieCriteria();
  constructor() { }

  ngOnInit() {
  }

}
