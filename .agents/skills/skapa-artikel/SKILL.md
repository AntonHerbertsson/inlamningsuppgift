---
name: skapa-artikel
description: Skapar svenska artiklar om digital marknadsföring som JSON till VÄX Digital.
---

# Skill: Skapa artikel

## Syfte

Skapa faktabaserade och lättlästa artiklar
om digital marknadsföring.

## Input

Användaren anger ett artikelämne.

Exempel:

- SEO för nybörjare
- Google Ads
- Digital strategi

## Steg 1 – Research

Undersök ämnet och identifiera:

- Viktiga begrepp
- Vanliga frågor
- Målgruppens behov
- Relevanta sökord

Kontrollera fakta och hitta inte på statistik.

## Steg 2 – Skriv artikeln

Skapa:

- En huvudrubrik
- En kategori
- En ingress
- Minst fem avsnitt
- En sammanfattning

Skriv enkelt, korrekt och professionellt.

## Steg 3 – Skapa slug

Gör ett filnamn av rubriken.

Exempel:
"Vad är SEO?" → "vad-ar-seo.json"

Regler:

- Små bokstäver
- Bindestreck mellan ord
- Inga å, ä eller ö
- Inga specialtecken

## Steg 4 – Skapa JSON

Läs först:
webbplats/artiklar/test-artikel.json

Följ exakt samma JSON-format.

Använd fälten:

- titel
- kategori
- ingress
- bild
  - src
  - alt
- sektioner
  - rubrik
  - text

Kontrollera att JSON är giltig.

## Steg 5 – Skapa bild

Skapa en originalbild om bildverktyg finns.

Spara bilden i:
webbplats/images/

Lägg in rätt sökväg i JSON.

Exempel:
"src": "images/seo-guide.svg"

Skriv alltid en relevant alt-text.

Om ingen bild kan skapas:
informera användaren.

## Steg 6 – Spara

Spara artikelns JSON-fil i:
webbplats/artiklar/

Skapa bara nya filer.

Skriv aldrig över befintligt innehåll.

Ändra inte index.html, style.css,
script.js, artikel.html, artikel.css
eller artikel.js.

## Steg 7 – Kontrollera

Kontrollera:

- Att JSON-filen fungerar
- Att titel och text är korrekta
- Att bilden finns
- Att bildens alt-text är beskrivande
- Att filnamnet följer reglerna
- Att inga befintliga filer har ändrats

## Steg 8 – Mänsklig granskning

Visa artikeln för användaren.

Användaren kontrollerar:

- Fakta
- Stavning
- Tonalitet
- SEO
- Bildrättigheter
- Fungerande länkar

## Output

Leverera:

1. Ny JSON-fil
2. Ny artikelbild om möjligt
3. Artikelns slug
4. Föreslagen URL
5. Sammanfattning av kvalitetskontrollen
