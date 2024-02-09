import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-first-task',
  templateUrl: './first-task.component.html',
  styleUrls: ['./first-task.component.scss'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    CommonModule,
    MatListModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatSelectModule,
    MatIconModule
  ],
})
export class FirstTaskComponent  {
  experienceForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.experienceForm = this.fb.group({
      jobs: this.fb.array([]),
    });
  }


  addJob() {
    const job = this.fb.group({
      companyName: ['', Validators.required],
      companyWebsite: [''],
      companyDescription: [''],
      positions: this.fb.array([]),
    });
    this.jobs.push(job);
  }

  removeJob(index: number) {
    this.jobs.removeAt(index);
  }

  addPosition(jobIndex: number) {
    const position = this.fb.group({
      positionName: ['', Validators.required],
      positionLevel: ['', Validators.required],
      positionDescription: [''],
      startDate: [''],
      endDate: [''],
    });
    this.positions(jobIndex).push(position);
  }

  removePosition(jobIndex: number, positionIndex: number) {
    this.positions(jobIndex).removeAt(positionIndex);
  }

  get jobs() {
    return this.experienceForm.get('jobs') as FormArray;
  }

  positions(jobIndex: number) {
    return this.jobs.at(jobIndex).get('positions') as FormArray;
  }

  getPositionLevels() {
    return ['Junior', 'Middle', 'Senior'];
  }
}
