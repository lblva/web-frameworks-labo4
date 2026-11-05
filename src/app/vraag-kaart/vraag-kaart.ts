import { Component, input, output } from '@angular/core';
import { Vraag } from '../vragen';

@Component({
  imports: [],
  selector: 'app-vraag-kaart',
  styleUrl: './vraag-kaart.css',
  templateUrl: './vraag-kaart.html',
})
export class VraagKaart {
  vraag = input.required<Vraag>();
  gekozen = input<number | null>(null);
  beantwoord = output<number>();
}
