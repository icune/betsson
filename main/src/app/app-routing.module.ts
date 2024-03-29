import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './com/page/welcome/welcome.component';
import { AllMoviesComponent } from './com/page/all-movies/all-movies.component';
import { MovieComponent } from './com/page/movie/movie.component';
import { SearchComponent } from './com/page/search/search.component';

const routes: Routes = [
    {path: '', component: WelcomeComponent},
    {path: 'all-movies', component: AllMoviesComponent},
    {path: 'movie/:key', component: MovieComponent},
    {path: 'search', component: SearchComponent},
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}