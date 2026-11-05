// src/app/vragen.ts - de vragen van de quiz (startbestand labo 4)
export type Categorie = 'web' | 'angular' | 'antwerpen';

export interface Vraag {
  id: number;
  categorie: Categorie;
  tekst: string;
  opties: string[];
  juist: number;        // index in opties
}

export const VRAGEN: Vraag[] = [
  { id: 1, categorie: 'web', tekst: 'Welk HTTP-statuscode betekent "niet gevonden"?', opties: ['200', '301', '404', '500'], juist: 2 },
  { id: 2, categorie: 'web', tekst: 'Welke tag maakt een hyperlink in HTML?', opties: ['<link>', '<a>', '<href>', '<url>'], juist: 1 },
  { id: 3, categorie: 'web', tekst: 'Wat doet `JSON.parse`?', opties: ['tekst omzetten naar een object', 'een object omzetten naar tekst', 'een bestand lezen', 'een URL ophalen'], juist: 0 },
  { id: 4, categorie: 'web', tekst: 'Welke CSS-eigenschap maakt van een element een flexcontainer?', opties: ['position: flex', 'display: flex', 'layout: flex', 'flex: 1'], juist: 1 },
  { id: 5, categorie: 'angular', tekst: 'Hoe lees je de waarde van een signal `aantal`?', opties: ['aantal', 'aantal()', 'aantal.value', 'aantal.get()'], juist: 1 },
  { id: 6, categorie: 'angular', tekst: 'Welke foutcode krijg je bij een selector die niet in `imports` staat?', opties: ['NG0100', 'NG5002', 'NG8001', 'NG8002'], juist: 2 },
  { id: 7, categorie: 'angular', tekst: 'Welke richting heeft een `output()`?', opties: ['van ouder naar kind', 'van kind naar ouder', 'beide richtingen', 'naar de server'], juist: 1 },
  { id: 8, categorie: 'angular', tekst: 'Wat is verplicht in een `@for`-blok?', opties: ['`@empty`', '`track`', '`$index`', 'een `<ul>`'], juist: 1 },
  { id: 9, categorie: 'antwerpen', tekst: 'Aan welke rivier ligt Antwerpen?', opties: ['de Maas', 'de Leie', 'de Schelde', 'de Dijle'], juist: 2 },
  { id: 10, categorie: 'antwerpen', tekst: 'Hoe heet het centraal station van Antwerpen in de volksmond?', opties: ['de Kathedraal', 'de Spoorwegkathedraal', 'het Paleis', 'de Hal'], juist: 1 },
  { id: 11, categorie: 'antwerpen', tekst: 'Welke schilder werkte in de Wapper?', opties: ['Van Eyck', 'Bruegel', 'Rubens', 'Ensor'], juist: 2 },
  { id: 12, categorie: 'antwerpen', tekst: 'Hoeveel campussen heeft AP Hogeschool ongeveer?', opties: ['1', '3', 'een tiental', 'meer dan 30'], juist: 2 },
];
