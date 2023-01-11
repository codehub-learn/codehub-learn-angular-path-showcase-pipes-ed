import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customLowerCase'
})
export class CustomLowerCasePipe implements PipeTransform {

  transform(value: string): string {
    return value.toLowerCase();
  }

}
