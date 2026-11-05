# labo 4 web frameworks opdracht: quiz

## antwoord 1:

404

## antwoord 2:

<a>

## antwoord 3:

tekst omzetten naar een object

## antwoord 4:

display: flex

## antwoord 5:

aantal()

## antwoord 6:

NG8001

## antwoord 7:

van kind naar ouder

## antwoord 8:

track

## antwoord 9:

de Schelde

## antwoord 10:

de Spoorwegkathedraal

## antwoord 11:

Rubbens

## antwoord 12:

een tiental

### welps, ik had 9 van de 12 juist

Lees quiz.ts en quiz.html van onder naar boven. Schrijf in je README:
Web Frameworks 2026-2027 · Labo 4 1 / 4welke velden bron-state zijn en welke afleidingen (syllabus 2.7)
welke stukken template een eigen naam verdienen (syllabus 2.2)
de boom die je wil bouwen, met per component wat erin en eruit gaat
Tip: de score is bijgehouden als een signal dat je verhoogt. Noteer alvast of dat de enige
mogelijkheid is. Oefening 6 komt erop terug.

## oef 1

### bron-state velden en de afleidingen:

bron-states zijn: vragen, index, gekozen, score en klaar
afleidingen zijn: huidige, laatste en percentage

### welke stukken template code een eigen component verdienen:

header, vragen

### boom, met per componenten wat erin en uit gaat:

quiz is parent van header en vragen componenten. in header component gaan de "vragen, score en index" signals erin.
in vragen component gaat de "huidige" computed signal erin, en de signals "gekozen en kies" gaan eruit.
