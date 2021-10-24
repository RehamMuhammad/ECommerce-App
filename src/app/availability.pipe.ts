import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'availability'
})
export class AvailabilityPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
     let  v = ""
    value === 0 ? v ="Not available in Stock" : "In Stock"

    
    return v;

  }

}
