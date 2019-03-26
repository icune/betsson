import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './com/page/welcome/welcome.component';
import { AllMoviesComponent } from './com/page/all-movies/all-movies.component';

const routes: Routes = [
    {path: '', component: WelcomeComponent},
    {path: 'all-movies', component: AllMoviesComponent},
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}