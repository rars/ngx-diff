import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lineNumber',
})
export class LineNumberPipe implements PipeTransform {
  public transform(value: number | null): string {
    return value === null ? '-' : `${value}`;
  }
}
