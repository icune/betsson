import { GenreType } from './movie';

export class MovieCriteria {
    ids: number[] = [];
    name: string = '';
    description: string = '';
    genres: any = {};
    rateFrom: number = 0;
    rateTo: number = 10;
    lengthFrom: number = 0;
    lengthTo: number = 5*60;
}