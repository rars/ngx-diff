import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StyleCalculatorService {
  public getLineNumberWidth(maxLineNumber: number): string {
    const numChars = `${maxLineNumber}`.length;
    return `calc(${numChars}ch + var(--ngx-diff-line-number-width-dynamic-padding))`;
  }
}
