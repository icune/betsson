import { MovieCriteria } from './movie-criteria';

export class MovieCriteriaModifier {
    public toQuery(criteria: MovieCriteria): any {
        if (criteria === null) {
            return {};
        }
        let ret: any = {};
        for(let k in criteria) {
            ret[k] = criteria[k];
        }
        ret.genres = [];
        for(var k in criteria.genres) {
            if (criteria.genres[k])
                ret.genres.push(k);
        }
        ret.genres = ret.genres.join(',');
        return ret;
    }
    public fromQuery(query: any): MovieCriteria {
        let fillableStr = [
            'name',
            'description'
        ];

        let fillableNum = [
            'rateFrom',
            'rateTo',
            'lengthFrom',
            'lengthTo',
        ];

        let crit = new MovieCriteria();

        for(let k of fillableStr)
            if (query[k])
                crit[k] = query[k];

        for(let k of fillableNum)
            if (query[k])
                crit[k] = parseFloat(query[k]);

        if (query.genres) {
            let spl = query.genres.split(',').filter(e=>e);
            for(let splP of spl)
                crit.genres[splP] = true;
        }

        return crit;
    }
}