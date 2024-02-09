import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-fifth-task',
  templateUrl: './fifth-task.component.html',
  styleUrls: ['./fifth-task.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule, MatListModule],
})
export class FifthTaskComponent {
  @Input() value1: string = '';
  @Input() value2: string[] = [];

  get percentageMatches(): number[] {
    return this.value2.map(item => this.getPercentageMatch(item));
  }

  private getPercentageMatch(item: string): number {
    const maxLength = Math.max(this.value1.length, item.length);
    if (maxLength === 0) {
      return 0;
    }
    const matchCount = this.value1.split('').filter((char, index) => char === item[index]).length;
    return (matchCount / maxLength) * 100;
  }
}