import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'egpCuurncy'
})
export class EgpCuurncyPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
   return `${value} EGP `;

  }

}
