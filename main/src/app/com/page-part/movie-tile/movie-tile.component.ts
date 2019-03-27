import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../../obj/scheme/movie';

@Component({
  selector: 'app-movie-tile',
  templateUrl: './movie-tile.component.html',
  styleUrls: ['./movie-tile.component.scss']
})
export class MovieTileComponent implements OnInit {
  @Input()
  movie: Movie = null;
  @Input()
  fullPage: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
