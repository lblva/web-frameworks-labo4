// quiz.ts - startbestand labo 4: een werkende quiz in één component. Jij knipt ze in een boom.
import { Component, computed, signal, effect } from '@angular/core';
import { VRAGEN } from '../vragen';
import { VraagKaart } from '../vraag-kaart/vraag-kaart';
import { Voortgangsbalk } from '../voortgangsbalk/voortgangsbalk';
import { Eindscherm } from '../eindscherm/eindscherm';
import { Startscherm } from '../startscherm/startscherm';
import { Filter, Instellingen } from '../instellingen/instellingen';
import { Paneel } from '../components/paneel/paneel';

@Component({
  selector: 'app-quiz',
  imports: [VraagKaart, Voortgangsbalk, Eindscherm, Startscherm, Instellingen, Paneel],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css',
})
export class Quiz {
  vragen = computed(() => {
    const keuze = this.categorie();
    return VRAGEN.filter((v) => keuze === 'alle' || v.categorie === keuze);
  });

  index = signal(0);
  fase = signal<'start' | 'bezig' | 'klaar'>('start');
  naam = signal('');
  categorie = signal<Filter>('alle');
  titel = 'Weetjesquiz';

  huidige = computed(() => this.vragen()[this.index()]); // Gets the index of the current question.
  laatste = computed(() => this.index() === this.vragen().length - 1); // "this.vragen().length - 1" gives you the total questions, je vergelijkt het met "this.index()", als het gelijk is, betekent het dat je op de laatste vraag bent

  antwoorden = signal<(number | null)[]>([]); // one entry per question, null = not answered
  gekozen = computed(() => this.antwoorden()[this.index()] ?? null); // gives back answer of the current question. "??" is a 'nullish coalescing operator', if the value on the left is null or underfined, it uses the value on the right (hier niet echt nodig ma bon)
  score = computed(() => this.vragen().filter((v, i) => this.antwoorden()[i] === v.juist).length); // geeft aantal juiste antwoorden terug

  constructor() {
    // side effect outside the template: the browser tab follows the score
    effect(() => {
      document.title = this.fase() === 'bezig' ? `Quiz - ${this.score()} juist` : 'Quiz';
    });
  }

  start(naam: string) {
    if (!naam.trim()) return; //als er niets wordt uitgevoerd (trim bcs spaties tellen niet) wordt de rest van de functie niet uitgevoerd, en kan je dus niet starten
    this.naam.set(naam.trim());
    this.antwoorden.set(this.vragen().map(() => null)); // Maakt voor elke vraag een null-antwoord.
    this.index.set(0);
    this.fase.set('bezig');
  }
  kies(optie: number) {
    if (this.gekozen() !== null) return;
    this.antwoorden.update((lijst) => lijst.map((a, i) => (i === this.index() ? optie : a))); //update() neemt de oude lijst en maakt een nieuwe lijst. map() loopt door alle plaatsen. De vraag is: is deze plaats de huidige index? Ja → vervang het oude antwoord door optie. Nee → behoud het oude antwoord.
  }

  volgende() {
    if (this.laatste()) {
      this.fase.set('klaar');
    } else {
      this.index.update((i) => i + 1);
    }
  }

  opnieuw() {
    this.fase.set('start');
  }
}
