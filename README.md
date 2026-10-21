# VÄX Digital – Artikelautomation med AI

## Projektbeskrivning

VÄX Digital är en webbplats om digital
marknadsföring, SEO och annonsering.

Webbplatsen är byggd med HTML, CSS,
JavaScript och JSON.

Projektet innehåller en AI-skill som hjälper
till att producera nya artiklar.

## Vad gör pluginet?

Pluginet tar emot ett artikelämne och använder
AI för att:

1. Undersöka ämnet.
2. Skapa ett artikelutkast.
3. Strukturera innehållet som JSON.
4. Skapa en bild om bildverktyg finns.
5. Kontrollera innehållet.
6. Förbereda artikeln för publicering.

## Hur kör man pluginet?

1. Öppna projektet i Visual Studio Code.
2. Starta en AI-agent med åtkomst till projektet.
3. Be agenten läsa AGENTS.md.
4. Be agenten använda skillen skapa-artikel.
5. Ange ämnet för artikeln.
6. Granska de nya filerna som agenten skapar.
7. Testa artikeln med Live Server.
8. Lägg manuellt till artikellänken på startsidan.

## Systemets delar

### Input

Användaren anger ett ämne eller sökord.

### Process

AI gör research och skriver artikeln
enligt instruktionerna i SKILL.md.

### Output

En JSON-artikel och en tillhörande bild.

### Feedback

Människan granskar och ger feedback om
innehåll, fakta, SEO och bilder.

### Environment

Systemet används i Visual Studio Code.
Artiklar visas med HTML, CSS och JavaScript.

## Mänsklig granskning

Människan ansvarar för att kontrollera:

- Att fakta stämmer
- Att språket är korrekt
- Att rubrikerna är relevanta
- Att bilden får användas
- Att alt-text finns
- Att JSON-filen fungerar
- Att artikeln visas korrekt på webbplatsen

Artiklar publiceras inte automatiskt.

## Förbättring med feedback

Systemet kan förbättras över tid genom
att återkommande problem dokumenteras.

Om artiklarna blir för korta kan SKILL.md
uppdateras med krav på längre innehåll.

Om språket är för avancerat kan instruktionen
ändras till ett enklare språk.

Om AI skriver felaktiga fakta kan tydligare
regler om källkontroll läggas till.

På så sätt blir kvaliteten bättre när
systemet används flera gånger.

## Begränsningar

AI kan producera felaktig information.
Mänsklig granskning är därför nödvändig.

AI får inte ändra befintliga HTML-, CSS-
eller JavaScript-filer.

Inga lösenord eller API-nycklar ingår.

## Filer

AGENTS.md – Projektets AI-instruktioner

SKILL.md – Instruktioner för artikelproduktion

README.md – Dokumentation för användaren

webbplats/artiklar/ – JSON-artiklar

webbplats/images/ – Artikelbilder

## Länkar

Artiklar öppnas med följande format:

artikel.html?id=artikelns-slug

## Slutsats

AI kan effektivisera artikelproduktionen
genom att hjälpa till med research,
textskapande och strukturering.

Människan ansvarar fortfarande för
kvalitetskontroll och publicering.
