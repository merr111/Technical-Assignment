import { NgModule, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'DateFormatter',
  standalone: true,
})
export class CustomDatePipe implements PipeTransform {

  transform(value: any): string {
    if (value instanceof Date) {
      const IntlDateFormat = new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        month: 'short',
        day: '2-digit',
        year: 'numeric'
      });
      return IntlDateFormat.format(value);
    } else {
      return value ? value : 'Invalid input';
    }
  }

}

