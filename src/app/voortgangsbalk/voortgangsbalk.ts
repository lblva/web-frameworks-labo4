import { Component, input, computed, booleanAttribute } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-voortgangsbalk',
  styleUrl: './voortgangsbalk.css',
  templateUrl: './voortgangsbalk.html',
})
export class Voortgangsbalk {
  huidige = input.required<number>();
  totaal = input.required<number>();
  percentage = computed(() => Math.round((this.huidige() / this.totaal()) * 100));

  compact = input(false, { transform: booleanAttribute });
}
