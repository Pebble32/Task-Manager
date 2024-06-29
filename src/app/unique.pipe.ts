import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unique'
})
export class UniquePipe implements PipeTransform {

  transform(value: any[], key: string): any[] {
    if (!Array.isArray(value) || !key) {
      return value;
    }

    const uniqueValues = value.map(item => item[key])
                              .filter((value, index, self) => self.indexOf(value) === index);

    console.log('Unique categories:', uniqueValues);
    return uniqueValues;
  }
}
