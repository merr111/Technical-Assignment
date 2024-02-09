import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatCalendarCellCssClasses, MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-fourth-task',
  templateUrl: './fourth-task.component.html',
  styleUrls: ['./fourth-task.component.scss'],
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatCardModule, MatDatepickerModule],
})
export class FourthTaskComponent  {
  selected: Date | null =new Date();

  dateClass(date: Date): MatCalendarCellCssClasses {
    const classes = [];
    if (date.getDate() === 5 || date.getDate() === 10 || date.getDate() === 15) {
      classes.push('highlighted-date');
    }
    return classes;

  }
}