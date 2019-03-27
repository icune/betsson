export enum GenreType {
    action = "action",
    adventure = "adventure",
    biography = "biography",
    comedy = "comedy",
    crime = "crime",
    drama = "drama",
    history = "history",
    mystery = "mystery",
    scifi = "scifi",
    sport = "sport",
    thriller = "thriller"
};

export class Movie {
    id: number;
    key: string;
    name: string;
    description: string;
    genres: GenreType[] = [];
    rate: number;
    length: number;//in seconds
    img: string;
}

export class MovieRepository {
    private convertRaw(movieRaw: any): Movie {
        let movie = new Movie();
        for(let k in movieRaw)
            movie[k] = movieRaw[k];

        movie.id =  parseInt(movieRaw.id);
        movie.rate =  parseFloat(movieRaw.rate);
        movie.length = ((len: string): number => {
            let mtc = len.match(/\d+/g);
            if (mtc.length != 2) {
                return 0;
            } else {
                return parseInt(mtc[0])*60 + parseInt(mtc[1]);
            }
        })(movieRaw.length);
        return movie;
    }
    public convertFromRaw(arr: any): Movie[] {
        return arr.map(this.convertRaw);
    }
}