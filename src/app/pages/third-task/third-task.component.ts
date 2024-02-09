import { Component } from '@angular/core';
import { CustomDatePipe } from '../../pipes/custom-date.pipe';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-third-task',
  templateUrl: './third-task.component.html',
  standalone: true,
  imports: [CustomDatePipe, MatCardModule],
})
export class ThirdTaskComponent {
  testDate = new Date();
}
