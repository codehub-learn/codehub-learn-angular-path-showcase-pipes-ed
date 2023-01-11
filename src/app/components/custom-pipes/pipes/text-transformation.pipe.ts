import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTransformation'
})
export class TextTransformationPipe implements PipeTransform {

  transform(value: string, type: string = "default"): string {
    if(type === "upper") return value.toUpperCase();
    else if (type === "lower") return  value.toLowerCase();
    else return value;
  }

}
