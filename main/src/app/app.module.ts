import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { GestureConfig } from '@angular/material';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './com/page-part/header/header.component';
import { MaterialModule } from './obj/material.module';
import { MenuItemsComponent } from './com/page-part/menu-items/menu-items.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './com/page/welcome/welcome.component';
import { MovieTileComponent } from './com/page-part/movie-tile/movie-tile.component';
import { AllMoviesComponent } from './com/page/all-movies/all-movies.component';
import { MovieProviderService } from './obj/base/movie-provider.service';
import { MovieMockProviderService } from './obj/provider/movie-mock-provider.service';
import { MovieDurationPipe } from './obj/pipe/movie-duration.pipe';
import { MovieComponent } from './com/page/movie/movie.component';
import { SearchComponent } from './com/page/search/search.component';
import { MovieFilterComponent } from './com/page-part/movie-filter/movie-filter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuItemsComponent,
    WelcomeComponent,
    MovieTileComponent,
    AllMoviesComponent,
    MovieDurationPipe,
    MovieComponent,
    SearchComponent,
    MovieFilterComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
      {provide: MovieProviderService, useClass: MovieMockProviderService},
      { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
