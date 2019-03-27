import { GenreType, Movie } from './movie';
import { MovieCriteria } from './movie-criteria';

class MovieCriteriaFilter {
    public name(val: string, movie: Movie) {
        return movie.name.toLowerCase().indexOf(val.toLowerCase()) != -1;
    }
    public description(val: string, movie: Movie) {
        return movie.description.toLowerCase().indexOf(val.toLowerCase()) != -1;
    }
    public genres(val: Map<GenreType, boolean>, movie: Movie) {
        for(let k in val) {
            if (val[k] && movie.genres.indexOf(k as GenreType) == -1) {
                return false;
            }
        }
        return true;
    }
    public rateFrom(val: number, movie: Movie) {
        return movie.rate >= val;
    }
    public rateTo(val: number, movie: Movie) {
        return movie.rate <= val;
    }
    public lengthFrom(val: number, movie: Movie) {
        return movie.length >= val;
    }
    public lengthTo(val: number, movie: Movie) {
        return movie.length <= val;
    }
}

export class MovieFilter {
    public filterIt(movies: Movie[], criteria: MovieCriteria): Movie[] {
        if (criteria === null) {
            return movies;
        }
        let filters = [
            'name',
            'description',
            'genres',
            'rateFrom',
            'rateTo',
            'lengthFrom',
            'lengthTo',
        ];
        let mcf = new MovieCriteriaFilter();
        return movies.filter(movie => {
            for(let filter of filters) {
                if (!mcf[filter](criteria[filter], movie)) {
                    return false;
                }
            }
            return true;
        });
    }
}