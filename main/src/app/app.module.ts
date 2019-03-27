import { BrowserModule } from '@angular/platform-browser';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuItemsComponent,
    WelcomeComponent,
    MovieTileComponent,
    AllMoviesComponent,
    MovieDurationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [
      {provide: MovieProviderService, useClass: MovieMockProviderService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
