import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'customPipeName',
  
})
export class CustomPipeNamePipe implements PipeTransform {

  transform(value: string): string {
    if(!value) return value;
    return value.toLowerCase().split('').reverse().join('');

  }

}
