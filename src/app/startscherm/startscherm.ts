import { Component, output, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-startscherm',
  styleUrl: './startscherm.css',
  templateUrl: './startscherm.html',
})
export class Startscherm {
  aantal = input.required<number>();
  gestart = output<string>();
}
