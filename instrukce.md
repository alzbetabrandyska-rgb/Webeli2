# Zadání pro AI agenta k tvorbě webu

## Situace

Jsi zkušený webový vývojář a designér s expertízou v tvorbě moderních, responzivních webových stránek. Tvým úkolem je vytvořit kompletní malý web podle specifikací níže.

## Cíl

Dodej uživateli kompletní, profesionální mobile-first webovou stránku, která je vizuálně atraktivní, funkční na všech zařízeních a připravená k okamžitému použití.

## Úkol

Vytvoř funkční web, který bude obsahovat:

- Strukturovaný komentovaný HTML5 kód s validní sémantikou
- Responzivní design (mobile-first přístup)
- CSS styly pro přizpůsobení všem obrazovkám (4K monitory, desktop, tablet, mobil)
- Používej moderní CSS vlastnosti (CSS variables, transitions, animations)
- CSS jednotky velikosti: pro běžný text použij rem, pro nadpisy použij clamp
- Základní JavaScript pro interaktivitu (na jemné oživení stránek)
- Dbej na bezpečnost webu (nastavení bezpečnostní HTTP hlavičky, u kontaktního formuláře řeš ochranu proti spamu pomocí honeypot)
- Nedávej do soubor .htaccess pokyny k přesměrování (to se řeší na úrovni hostingu)

## Znalosti

- Zajisti rychlé načítání a optimalizovaný výkon
- Dodržuj best practices pro přístupnost (barevný kontrast, velikost písma, ARIA)
- Vlož favicon ve formátu svg
- Pokud je potřeba Cookie lišta, vytvoř ji v barvách webu

## Základní SEO

- Strukturuj nadpisy H1-H6
- Přidej meta title a description na každé stránce
- Vytvoř strukturovaná data – LocalBusiness, FAQ, Article (pokud je to relevantní)
- Přidej do adresáře soubory sitemap.xml, robot.txt a llms.txt
- Urči kanonickou url
- Obrázkům dej alt popisky
- Propoj stránky vnitřními odkazy
- Vytvoř Open Graph meta tagy (náhled webu pro Facebook a další sociální sítě)
- Prosím nastav SEO title stránky na: **Webeli – tvorba webů a online podpora pro podnikatele**

## Optimalizace obrázků

- Přidej lazy loading ke všem obrázkům, které nejsou vidět hned při načtení stránky (below the fold). Tj. u hero sekce lazy loading nedělej.
- Obrázky ti dodám zkomprimované ve formátu jpg nebo png, ale kdyby se ti zdály velké, řekni si o formát avif.

## Vizuální hierarchie a čitelnost

- Jasná typografická hierarchie (nadpisy H1-H6, konzistentní velikosti)
- Dostatečný kontrast mezi textem a pozadím (minimum 4.5:1 pro běžný text)
- Čitelné fonty s českou diakritikou, minimální velikost 16px
- Správné řádkování (line-height 1.5-1.8 pro odstavce)
- Nikdy nezarovnávej text do bloku
- Maximální šířka textu 70% obrazovky (nikdy nepiš od kraje po kraj)

## Layout

- Šířku celého webu dej na 85-90% obrazovky
- Jasné oddělení sekcí a obsahových celků
- Pokud mám v sekci 4 karty/boxy – dej je po dvou na řádek (ne 3+1)
- Vyvážené použití bílého prostoru (white space)
- Intuitivní navigace - logo vlevo, hamburger menu na mobilu vpravo
- Dej si záležet na patičce webu
- U prvku accordion (př. pro otázky a odpovědi) dávej ikonu šipky dolů a nahoru a pokud je jich víc než 3, tak je rozděl do dvou sloupců
- Jednopísmenové znaky (spojky, předložky) zalamuj na nový řádek
- Jednotky (Kč, m, kg, Eur, atd.) spoj s číslem nedělitelnou mezerou
- Datum piš ve formátu 1.&nbsp;1.&nbsp;2026 a mezery dej nedělitelné

## Obsah

- Stručné a srozumitelné texty
- Výrazné nadpisy s klíčovými informacemi a CTA tlačítka
- Vizuální prvky podporující obsah (ikony, obrázky, grafika)
- Logické uspořádání informací (nejdůležitější nahoře)
- Chybová stránka (místo „404" dej ikonu `<wa-icon name="face-frown" variant="regular"></wa-icon>`) a přidej ji na web pomocí příkazu v souboru .htaccess: `ErrorDocument 404 /404.html`
- Kontrola povinných údajů na webu: jméno, sídlo, IČ, zápis v rejstříku

## Konzistence

- Jednotný styl tlačítek, karet a komponent
- Stejný padding/margin napříč podobnými elementy
- Stejné zaoblení prvků
- Konzistentní ikonografie (používej font awesome, ne emotikony)
- Stíny karet pouze velmi jemné
- Jednotný projev značky (brand voice)
- Konzistentní použití barev napříč celým webem
- Jednotný spacing a odsazení (používej jednotný systém, např. 8px grid)

## Barevná paleta

- Omezený počet barev (2-3 hlavní + neutrální)
- Primární barva pro CTA (call-to-action) tlačítka
- Jemné barvy pro pozadí
- Pro nadpisy: `#4a5a50`
- Pro text: `#2e3431`
- Brand barvy (HEX):
  - primární: `#6b7a72`
  - sekundární: vytvoř odstíny z primární HEX
  - tlačítka: `#4a5a50`
  - pozadí: vycházej z `#6b7a72`
  - pokud použiješ bílou, tak `#f7f8f6` nebo `#f0f2ef` nebo `#e7ebe8` dle elegance. Případně vyber i dle sebe… les, mech, tlumená zeleň.

## Fonty

- Zvol vhodný patkový nebo bezpatkový font podle obsahu webu
- Brandový font: **Source Sans 3**
- Doplňkový nechám na tobě, aby se k Source Sans 3 nejvíce hodil

## Struktura

Jednostránkový web.

Položky menu:

- Služby
- Spolupráce
- O mně
- Reference
- Ceny
- Otázky a odpovědi
- Kontakt

Myslím, že je dlouhé, uvaž zda v menu něco nevynechat, např takto:

- Služby
- Spolupráce
- O mně
- Ceny
- Kontakt

## Další prvky na webu

Vytvoř na stránku kontakt jednoduchý formulář (jméno, e-mail, zpráva) a nastav, aby všechny zprávy z formuláře chodily na adresu **eli@webeli.cz**; po odeslání formuláře se uživateli zobrazí potvrzení: „Děkuji za zprávu. Ozvu se vám co nejdříve." (včetně antispamu (honeypot), doporuč mi službu https://formspree.io/)

## Design

Ráda bych, aby web působil klidně, přirozeně inspirován přírodními barvami (les, mech, tlumená zeleň). Neměl by být příliš komerční ani agresivní, ale zároveň by měl působit moderně a čistě.

Líbí se mi styl s čistou typografií a jemnými mikroanimacemi. Animace by měly být decentní, aby nerušily klidný charakter webu.

Prosím používat jemně zaoblené rohy u tlačítek a bloků, přehledné sekce. Drobné hover efekty na tlačítkách. Design by měl zůstat přirozený a nepřeplácaný, vzdušný a klidný, lehce tónované pozadí.

Přechody, aby ladily s přírodními barvami webu. Preferuji čistou typografii. Lehce tónované pozadí.

---

## Obrázky

Na webu použij fotky (př. přílohy), které najdeš ve složce:

- `Obrazky/Hlavni` – pro hlavní stranu (hero sekce atd.)
- `Obrazky/Omne` – pro stránku O mně
- `Favicon svg/` – pro favicon
- `Favicon png/` – kdyby svg nefungovaly
- `Logo/` – pro logo

Ikony – ikony nechám na tobě, ale prosím o line icons (tenké linky), jemné. Ikony prosím použij z open-source knihovny (např. Lucide nebo Tabler), aby byly zdarma a bez licenčních omezení.

## Dodatek

Časem ještě na web přibude sekce portfolio.

---

## Texty

Na webu použij tyto texty pro jednotlivé sekce / stránky. Vyjdi z dodaných textů, ale když budeš potřebovat, můžeš je mírně změnit nebo doplnit, zachovej vždy smysl a podstatu obsahu stránky.

---

### Hero sekce

Obrázek ve složce Hlavni, zkus text nedávat do obrázku počítače.

Do hero fotografie přidej jemný overlay z hlavní barvy webu `#4a5a50`. Ideálně jako transparentní vrstvu (např. `rgba(74,90,80,0.30–0.40)`) nebo velmi jemný gradient. Cílem je lehce ztlumit světlé části fotografie a zlepšit čitelnost textu, ale zachovat přirozený vzhled obrázku a aby působila klidněji.

Aby to bylo opravdu čisté, můžeš přidat lehké text shadow u nadpisu, například:

```css
text-shadow: 0 2px 10px rgba(0,0,0,0.25);
```

Text pak bude krásně čitelný i na světlých místech.

**Logo** – webeli a pod něho tagline: *weby a online podpora*

Logo ponech statické. Můžeš pouze přidat velmi jemný hover efekt u symbolu ensó (např. lehké zvětšení nebo minimální rotaci) či fade in, aby působilo živě, ale stále minimalisticky.

**Klid v podnikání** – základní věta v hero sekci, která má zaujmout. Preferuji, aby byla nejvýraznější z těch všech vět.

*Aby vám zbylo víc času na to podstatné*

Tlačítko – **Služby**

---

### Služby

Nadpis: **S čím vám mohu pomoci** (a pod tím asi dva sloupce?)

**Nadpis – Tvorba webů**

- jednostránkové i vícestránkové weby
- webová vizitka pro jednoduchou prezentaci
- přehledná struktura a uspořádání obsahu
- web přizpůsobený pro mobilní zařízení
- rychlý a spolehlivý chod webu
- základní nastavení SEO pro lepší dohledatelnost
- další úpravy podle potřeby

**Nadpis – Online podpora pro vaše podnikání**

- zákaznická podpora
- správa e-mailů
- organizace kalendáře a schůzek
- úprava textů a dokumentů
- jednoduché grafické úpravy
- další online úkoly podle potřeby

---

### Spolupráce

Asi tři sloupce?

**Nejprve si vše v klidu projdeme**
Podíváme se na to, co potřebujete a s čím vám mohu pomoci.

**Domluvíme se na dalším postupu**
Společně nastavíme rozsah spolupráce tak, aby vám dával smysl.

**Začneme s realizací**
Postarám se o domluvené věci, aby vám online část podnikání nezabírala zbytečně čas a energii.

---

### Citát (mezi sekce „Spolupráce" a „O mně")

Ráda bych mezi sekce „Spolupráce" a „O mně" přidala jednoduchý blok s citátem – klidová pauza mezi částmi webu. Citát se může při scrollování jemně objevit (fade-in efekt), ale velmi decentně.

Text citátu:

> „Ticho a pomalý rytmus."
> — Antoine de Saint-Exupéry

Do sekce s citátem prosím velmi jemně zakomponuj symbol ensó z loga jako dekorativní prvek v pozadí. Ensó může být větší, ale velmi nenápadné (cca 5–8 % opacity), ideálně v tlumeném šedozeleném tónu z palety webu, trochu jakoby ručně kreslený, nedokonalý.

---

### Pár slov o mně

Fotka ve složce – prosím o jemně upravenou fotografii – okraje velmi lehce změkčit, např. pomocí gradient mask? Nechám na tobě.

Jmenuji se Alžběta a pomáhám podnikatelům s online částí jejich práce, od tvorby webu po každodenní podporu, aby jim zůstal prostor na podnikání i život.

Nejčastěji spolupracuji s menšími podnikateli a projekty, kteří na online věci nemají čas nebo se chtějí soustředit na svou hlavní práci.

Blízká je mi jednoduchost, klid a přirozený řád. Inspiraci často nacházím v přírodě, kde věci fungují v rovnováze a tichém bytí. Stejný přístup se snažím přinášet i do práce s klienty.

---

### Reference

Nadpis: **Několik slov od lidí, se kterými jsem měla možnost spolupracovat**

V referenci prosím o:

- malou ikonku nebo ❝
- světlejší pozadí
- jméno osoby až pod referenci
- trochu prostoru kolem, aby sekce působila klidně a v duchu mých stránek

**1.** Rozhodnutí mít své webové stránky jsem dlouho odkládala, ale výsledek mne moc mile překvapil. Stránky byly tvořeny s porozuměním a profesionalitou a zcela vystihly to co jsem jsi přála, ukázat lásku k lokálním květinám. Doporučuji, protože Alžbětka je skvělá a komunikace s ní výborná.
— *Radomíra Charvátová – Roztroušené kytičky*

**2.** Výborná komunikace, flexibilita a hlavně esteticky krásný výsledek.
— *Veronika Řeháková, učitelka*

**3.** Alžběta pro mě připravovala výukové podklady k mému online kurzu Vibe Codingu (tvorba webů pomocí AI). S její prací jsem byla velmi spokojená. Vyšla mi vstříc časově, pochopila snadno zadání a hned se pustila do práce, kterou odvedla rychle, samostatně, pečlivě a spolehlivě. Můžu vřele doporučit.
— *Magdaléna Boušková, Weby kvalitně*

---

### Ceny

**Tvorba webů**

Při tvorbě webů využívám pokročilé nástroje, ale dbám na to, aby web zůstal autentický a přirozeně vyjadřoval podnikání člověka, který za ním stojí.

Každý web je trochu jiný, proto cenu domlouváme individuálně podle rozsahu projektu. Jednoduché weby obvykle začínají od 12&nbsp;000&nbsp;Kč, střední weby od 19&nbsp;000&nbsp;Kč.

**Online asistence**

Spolupráce probíhá vždy individuálně formou hodinových balíčků podle aktuální potřeby.

- 5&nbsp;hodin — od 2&nbsp;500&nbsp;Kč
- 10&nbsp;hodin — od 5&nbsp;000&nbsp;Kč

*Ráda se s vámi nejdříve pobavím o vašem projektu a společně najdeme řešení, které bude dávat smysl.*

---

### Otázky a odpovědi

Nadpis: **Otázky, které často zaznívají**

**Musím mít připravené texty a obsah pro web?**
Dobré je mít základní texty a představu o obsahu připravené, aby práce na webu mohla plynule pokračovat. Pokud je ale ještě nemáte, ráda pomohu s jejich uspořádáním a strukturou.

**Jak dlouho trvá vytvoření webu?**
Záleží na rozsahu projektu a připravenosti obsahu. Jednodušší weby obvykle vznikají během několika týdnů.

**Co když potřebuji jen krátkodobou online pomoc?**
Online asistence může probíhat formou hodinových balíčků podle aktuální potřeby.

**Je možné web později upravovat?**
Ano, web je možné kdykoliv upravit nebo rozšířit podle toho, jak se vaše podnikání bude vyvíjet.

---

### Patička

Kontakt:
**Bc. Alžběta Brandýská**
eli@webeli.cz
+420&nbsp;605&nbsp;191&nbsp;772

Oldřiš 76
Borová u&nbsp;Poličky
569 82

IČ: 11793155
Fyzická osoba zapsaná v&nbsp;živnostenském rejstříku od&nbsp;1.&nbsp;10.&nbsp;2021

Webeli © 2026
