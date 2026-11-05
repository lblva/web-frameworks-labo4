import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Quiz } from './quiz/quiz';

@Component({
  imports: [RouterOutlet, Quiz],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('quiz');
}
