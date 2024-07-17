import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform<Q>(array: Q[], sortBy: string,order?:string): Q [] {
    if (!Array.isArray(array)) {
      return array;
    }
    array = array.sort((a:any, b:any) => {
      let sortA = a[sortBy];
      let sortB = b[sortBy];

      return sortB - sortA;
    });
    return array;
  }

}
