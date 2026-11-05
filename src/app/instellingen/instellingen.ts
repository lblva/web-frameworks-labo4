import { Component, model } from '@angular/core';
import { Categorie } from '../vragen';

export type Filter = Categorie | 'alle';
@Component({
  imports: [],
  selector: 'app-instellingen',
  styleUrl: './instellingen.css',
  templateUrl: './instellingen.html',
})
export class Instellingen {
  opties: Filter[] = ['alle', 'web', 'angular', 'antwerpen'];

  keuze = model.required<Filter>();
}
