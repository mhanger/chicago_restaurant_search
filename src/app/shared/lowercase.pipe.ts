import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'lowercase'
})
export class LowercasePipe implements PipeTransform {
  transform(value: string) {
    if (typeof value != 'undefined') {   
    value = value.replace('|', '<br>');
    value = value.toLowerCase();
    return value;
    }

  }
}