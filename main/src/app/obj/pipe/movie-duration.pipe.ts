import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movieDuration'
})
export class MovieDurationPipe implements PipeTransform {

  transform(value: number, args?: any): string {
    let hrs = Math.floor(value / 60);
    let minutes = value % 60;
    return (hrs ? hrs + ' hr. ' : '') + minutes + ' min.'
  }

}
