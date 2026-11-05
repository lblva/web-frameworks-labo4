import { Component, computed, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-eindscherm',
  styleUrl: './eindscherm.css',
  templateUrl: './eindscherm.html',
})
export class Eindscherm {
  score = input.required<number>();
  totaal = input.required<number>();

  percentage = computed(() => Math.round((this.score() / this.totaal()) * 100));
  niveau = computed<'top' | 'goed' | 'oefenen'>(() =>
    this.percentage() >= 80 ? 'top' : this.percentage() >= 50 ? 'goed' : 'oefenen',
  );

  opnieuw = output();
  naam = input.required<string>();
}
