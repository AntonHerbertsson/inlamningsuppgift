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

Följ formatet i `webbplats/artiklar/test-artikel.json`.
Använd `title` för artikelns titel och `content` för listan med block.

- Använd `h1` för huvudrubriken, `p` för ingress och stycken och
  `h2` eller `h3` för underrubriker. Lägg texten i fältet `text`.
- Om du använder `ul` eller `ol`, lägg listpunkterna i `items`.
- Lägg in minst ett bildblock enligt steg 5.

## Steg 5 – Skapa bild

Lägg in minst ett bildblock i artikelns `content`.
Bildblocket ska ha `"type": "img"`, en lokal bildsökväg i `src`
och en beskrivande alt-text i `alt`.

Exempel:
{ "type": "img", "src": "images/seo-guide.svg", "alt": "Diagram över hur en webbplats hittas via en sökmotor" }

Använd en relevant bild som finns i `webbplats/images/` och som du får använda,
eller skapa en ny bild och spara den där. Byt sökvägen och alt-texten i
exemplet så att de stämmer med bilden. Om ingen lämplig bild finns,
be användaren om en innan artikeln markeras som klar.

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
