import { Component } from '@angular/core';
import { ImdbService } from '../../services/imdb.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-second-task',
  templateUrl: './second-task.component.html',
  styleUrls: ['./second-task.component.scss'],
  standalone: true,
  providers: [ImdbService],
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule,
    MatListModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
  ],
})
export class SecondTaskComponent {
  searchTerm: any = '';
  movies: any[] = [];

  constructor(private ImdbService: ImdbService) {}

  search() {
    if (this.searchTerm.trim() === '') return;
    this.ImdbService.searchMovies(this.searchTerm.trim()).subscribe(
      (data: any) => {
        this.movies = data.results;
      }
    );
  }
}
