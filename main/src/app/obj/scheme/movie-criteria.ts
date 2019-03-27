import { GenreType } from './movie';

export class MovieCriteria {
    ids: number[];
    name: string;
    description: string;
    genres: GenreType[] = [];
    rateFrom: number;
    rateTo: number;
    lengthFrom: number;
    lengthTo: number;

}