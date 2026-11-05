import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-paneel',
  styleUrl: './paneel.css',
  templateUrl: './paneel.html',
})
export class Paneel {
  titel = input.required<string>();
}
