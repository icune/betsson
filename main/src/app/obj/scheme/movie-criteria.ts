import { GenreType } from './movie';

export class MovieCriteria {
    ids: number[];
    name: string;
    description: string;
    genres: GenreType[] = [];
    rateFrom: number = 0;
    rateTo: number = 10;
    lengthFrom: number;
    lengthTo: number;

}