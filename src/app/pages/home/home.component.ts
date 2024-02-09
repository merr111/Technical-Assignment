import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { SecondTaskComponent } from '../second-task/second-task.component';
import { FirstTaskComponent } from '../first-task/first-task.component';
import { ThirdTaskComponent } from '../third-task/third-task.component';
import { FourthTaskComponent } from '../fourth-task/fourth-task.component';
import { FifthTaskComponent } from '../fifth-task/fifth-task.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    MatTabsModule,
    CommonModule,
    SecondTaskComponent,
    FirstTaskComponent,
    ThirdTaskComponent,
    FourthTaskComponent,
    FifthTaskComponent
  ],
})
export class HomeComponent{
  value1: string = 'ქონება';
  value2: string[] = [
    'ქონება',
    'ქონ',
    'ქონების გასხვისება',
    'საქონლის გასხვისება',
    '',
  ];
  constructor() {}
}
