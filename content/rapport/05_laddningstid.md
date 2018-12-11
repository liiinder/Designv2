---
---
kmom05 Laddningstid
=========================

Uppgiften handlar om att välja ut tre olika webbplatser och mäta hur snabbt de laddas och se om de innehåller några saker som kan förbättras med tanke på laddningstid och användbarhet.

Urval
-----------------------

Har valt att fortsätta med samma sidor från färgschema rapporten. 3 sidor på sporter man utövar första är kite sen snowboard och discgolf. Dom har lite olika stilar och det tycker jag är en fördel.

[Slingshot Sports](https://www.slingshotsports.com/)<br>
[Freeride.se](https://www.freeride.se)<br>
[Innova disc golf](http://www.innovadiscs.com)

Metod
-----------------------

Min metod för att kolla sidornas laddtid är [SpeedPage](https://developers.google.com/speed/pagespeed/insights/) samt Devtools i Chrome. För att kunna jämföra tiderna har jag pausat när "hela" sidan är inläst men inte räknat med t.ex. bilder i ett bildspel som läses in efteråt när den bläddrar. Sen har jag använt [Google Spreadsheets](https://docs.google.com/spreadsheets/d/1vYG5cuo14PdD12VWpDhL2Tq1iCwHQkxwdWcExlmSt0c/edit?usp=sharing) för att spara, summera och räkna ut medelvärdena. För snapshotsen använder jag Windows egna program snippingtools.

Resultat
-----------------------

##### Slingshot

[FIGURE src="image/fargschema/slingshot.JPG?w=300" class="right" caption="Slingshot snapshot"]

På PageSpeed Insights fick huvudsidan 17p i mobilt läge och 69p i desktop. Tycker det motsvarar hela sidan på ett rätt bra sätt. Finns god potential till förbättring. Den största möjligheten för förbättring är att använda bilder i rätt storlek och det kan förbättra inladdningstiden med över 1 sekund. Jobbar man vidare med bilderna så kan man använda modernare bildformat och spara ytterligare 0.75 sekunder vilket är nästan 2 sekunder och 30-50% snabbare inläsningstid. I mina tester så fick jag fram att det tog i snitt lite över 6 sekunder att ladda sidan på datorn och lite snababre men inte mycket på mobil. Sidan är nästan helt oanvändbar innan allt har laddats in då mycket av informationen är i bildformat. Däremot så va deras shop betydligt snabbare än jag hade förväntat mig mot vilket innehåll sidan har.

<br>
<br>
<br>

##### Freeride

[FIGURE src="image/fargschema/freeride.JPG?w=300" class="left" caption="Freeride.se snapshot"]

Freeride.se fick riktigt bra betyg på PageSpeed Insights och va snabbaste sidan i på desktop, överlägset bäst i undersökningen. En möjlig tidsbesparing som känns aktuell är modernare bildformat, använda bilder i rätt storlek och att skjuta upp inläsningen av bilder som inte visas direkt på skärmen. Dessa tre skulle möjligen kunna spara upp till 1.5 sekund vilket är rätt mycket med tanke på att PageSpeed Insights säger att sidan har en tid på 3.2s till fullt interaktivt tillstånd. För den mobila sidan är den främsta besparingen på tid att ta bort resurser som blockerar renderingen i form av css och javascript samt även bilderna. Men jag tycker det känns som att sidan laddas nästan direkt och det känns inte som att man sitter och väntar på något direkt.

<br>

##### Innova Discs

[FIGURE src="image/fargschema/innova.JPG?w=300" class="right" caption="Innova snapshot"]

Innova's sida fick Mobile: 12p och Desktop: 84p på PageSpeed Insights. Trodde den skulle ge mer feedback på bilderna på denna sidan men den enda direkta möjligheten som dom tycker man ska åtgärda är att ta bort resurser som blockerar renderingen vilket är väldigt många små saker som bygger upp tiden. Fonter, css, videos, javascript osv där varje del skulle kunna spara upp till 200ms men den totala besparingen anses bara vara 1.2 sekunder men lägger man ihop alla ms besparingar så verkar det ju vara betydligt mer än 1200 så förstår inte riktigt hur dom får ihop siffrorna. Men det finns ju iaf utvecklingspotential. En annan sak det klagas på är antal noder i DOM trädet. 2729st och PageSpeed rekommenderar att man ska ha färre än 1500.

Analys
-----------------------

Jag tycker att en laddningstid på 1-2 sekunder är snabbt och allt över 5 sekunder för att ladda in en hemsida är enormt långsam. Det känns som folk fuskar med bildstorlekar osv då dom vet att internet är så snabbt att det laddar acceptabelt ändå så att det inte ens försöks att optimera sidor. Jag ansåg att Freeride va snabbast så det är klart vinnaren men det är ju även den sidan som har minst med flashiga element och bilder. Slingshot känns överlägset långsammast då det tar så lång tid innan man kan använda sidan medans Innova tycker jag har helt klart en vettig approach. Även om dessa två har mycket att förbättra med att ladda in sådant som inte används efter. Provade att ladda in sidorna igen när jag streamade youtube och lyssnade musik och det va ju inte ovanligt att det tex tog över 1 minut att ladda hela slingshots sida. Den största förbättringen på alla sidor jag testat även sidor utanför denna rapport så är det förstora bilder som är den största flaskhalsen samt att allt laddas på samma gång även om det inte skall visas direkt.

Referenser
-----------------------

https://developers.google.com/speed/pagespeed/insights
https://docs.google.com/spreadsheets/



Övrigt
-----------------------

Undersökningen gjordes enskilt av mig Kristoffer Linder