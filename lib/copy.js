// lib/copy.js
// Jediný zdroj pravdy pre CELÝ viditeľný text na landing page.
// Každý reťazec, ktorý si môže používateľ na obrazovke prečítať, MUSÍ byť tu.

export const copy = {
  metadata: {
    title: "101 domácich burgrov | Digitálna kuchárska kniha",
    description:
      "Digitálna kuchárska kniha pre domáce burgre. 101 jednoduchých, šťavnatých a chuťovo nabitých receptov na prípravu neodolateľných burgrov priamo u vás doma.",
  },

  promoBar: {
    text: "Špeciálna časovo obmedzená ponuka",
    icon: "flame",
  },

  hero: {
    eyebrow: "Digitálna kuchárska kniha pre domáce burgre",
    headline: {
      pre: "101 domácich burgrov, vďaka ktorým",
      accent: "očaríš každého u vás doma",
    },
    subheadline:
      "Objav jednoduché, šťavnaté a neskutočne chutné recepty na neodolateľné burgre bez zbytočných komplikácií, vyhadzovania peňazí a spoliehania sa na fastfood.",
    paragraph:
      "Premeň každé jedlo na výnimočný okamih vďaka jednoduchým a chutným nápadom, ktoré sú ako stvorené na zdieľanie s rodinou a priateľmi.",
    stats: [
      { value: "101", label: "chutných nápadov" },
      { value: "Domáce", label: "s chuťou ako z reštaurácie" },
    ],
    bullets: [
      "101 rôznych receptov",
      "Šťavnaté a na prípravu jednoduché burgre",
      "Dostupné a bežné suroviny",
      "Variácie s hovädzím, kuracím mäsom a ďalšie",
      "Ideálne riešenie na večere a posedenia",
      "Domáca chuť na reštauračnej úrovni",
    ],
    cta: "CHCEM SVOJICH 101 BURGROV",
    trust: [
      { icon: "lock", text: "Okamžitý prístup" },
      { icon: "mail", text: "Doručenie e-mailom" },
      { icon: "card", text: "Bezpečná platba" },
    ],
    image: "/hero-mockup.webp",
    imageAlt: "Balíček 101 domácich burgrov - Digitálna kniha",
    badge: "101 chutných nápadov",
  },

  story: {
    eyebrow: "Vynikajúce jedlo nemusí pochádzať len z donášky",
    headline: {
      pre: "Nemusíš ani vytiahnuť päty z domu, aby si si vychutnal",
      accent: "fakt neskutočný burger",
    },
    paragraphs: [
      {
        text: "Niekedy nie je problém to, že nie sme hladní... problémom je, že nám chýbajú nápady, ako pripraviť niečo šťavnaté, iné a s tou pravou chuťou, po ktorej si budeš pýtať dupľu.",
        style: "default",
      },
      {
        text: "Pripravené doma s neodolateľnou chuťou",
        style: "bold-accent",
      },
    ],
    painsTitle: "Keď chýbajú nápady alebo možnosti, dopadne to takto:",
    pains: [
      "Nakoniec varíš stále to isté dokola",
      "Burgre sú príliš suché alebo bez chuti",
      "Nevieš, ako správne skombinovať omáčky, syry a prílohy",
      "Objednávaš fastfood, hoci by si si mohol navariť doma",
      "Dochádzajú ti nápady na večeru alebo na víkend",
    ],
    bridge:
      "Rozdiel je v tom, že máš po ruke jasné recepty, chutné kombinácie a jednoduché postupy, vďaka ktorým sa každý burger stane niečím výnimočným.",
    image: "/chef-hamburguesas.webp",
    imageAlt: "Domáci burger, pripravený na servírovanie",
  },

  steps: {
    eyebrow: "Len 3 kroky k domácemu pôžitku",
    headline: {
      pre: "Konečne jednoduchý spôsob, ako pripraviť",
      accent: "neodolateľné domáce burgre",
      post: "pre celú rodinu",
    },
    subheadline:
      "Vychutnaj si šťavnaté, nenáročné a chuťovo bohaté recepty bez toho, aby si musel niekam chodiť, zbytočne si to komplikovať alebo jesť stále to isté.",
    paragraph:
      "Stačí si vybrať recept, nasledovať pár jednoduchých krokov a užiť si jedlo, z ktorého budú chcieť všetci dupľu.",
    items: [
      {
        number: "01",
        title: "Vyber si burger na akúkoľvek príležitosť",
        body: "Od rýchlej večere cez týždeň až po víkend s rodinou – budeš mať plno chutných nápadov, ako pripraviť niečo iné bez dlhého vymýšľania.",
      },
      {
        number: "02",
        title: "Priprav si domáce recepty plné chuti",
        body: "Sleduj jednoduché kombinácie mäsa, syrov, omáčok a príloh, aby si vytvoril šťavnaté burgre s tým pravým domácim nádychom.",
      },
      {
        number: "03",
        title: "Vychutnaj si jedlo, ktoré spája",
        body: "Naservíruj doma neodolateľné burgre a premeň každé jedlo na skvelý moment, ktorý zdieľaš so svojou rodinou alebo priateľmi.",
      },
    ],
    cta: "CHCEM SVOJICH 101 BURGROV",
    trust: [
      { icon: "lock", text: "Okamžitý prístup" },
      { icon: "mail", text: "Doručenie e-mailom" },
      { icon: "card", text: "Bezpečná platba" },
    ],
  },

  benefits: {
    eyebrow: "Viac chuti, menej námahy",
    headline: {
      pre: "Čo sa zmení, keď máš",
      accent: "101 nápadov",
      post: "na prípravu burgrov doma",
    },
    subheadline:
      "Prestaň improvizovať so stále tými istými jedlami a sprav z každej porcie niečo domáce, chutné a ideálne na spoločné chvíle.",
    items: [
      {
        title: "Nikdy ti nedôjdu nápady",
        body: "Vždy budeš mať poruke iný recept, aby si rýchlo a bez premýšľania pripravil niečo pod zub.",
        icon: "sparkles",
      },
      {
        title: "Výnimočnejšie spoločné jedlá",
        body: "Premeň obyčajnú večeru na gurmánsky zážitok, ktorý si užiješ so svojimi blízkymi.",
        icon: "heart",
      },
      {
        title: "Viac chuti v pohodlí domova",
        body: "Pripravuj si šťavnaté domáce burgre v kombináciách, ktoré chutia ako z tvojej obľúbenej reštaurácie.",
        icon: "home",
      },
      {
        title: "Menej komplikácií",
        body: "Jednoduché recepty, dostupné suroviny a postupy, ktoré hravo zvládne každý.",
        icon: "zap",
      },
      {
        title: "Možnosti na každú príležitosť",
        body: "Od rýchlovky po práci, cez lenivý víkend doma, až po veľké posedenie s kamošmi.",
        icon: "users",
      },
      {
        title: "Koniec nečakaným chutiam na niečo dobré",
        body: "Keď ťa chytí slina na niečo brutálne dobré, jednoducho si to pripravíš sám bez čakania na donášku.",
        icon: "utensils",
      },
    ],
    closing: {
      pre: "S touto knihou prestane byť príprava burgrov doma nudnou rutinou a stane sa z nej jednoduchý spôsob, ako",
      accent: "potešiť každého niečím naozaj fantastickým.",
    },
  },

  features: {
    eyebrow: "Všetko, čo potrebuješ na oživenie svojich burgrov",
    headline: {
      pre: "101 domácich burgrov, ktoré z každého jedla urobia niečo",
      accent: "neodolateľné",
    },
    subheadline:
      "Praktická kuchárska kniha na prípravu šťavnatých, rozmanitých a chuťovo nabitých burgrov bez stresu, s možnosťami pre rôzne chute, chvíle a nálady.",
    items: [
      {
        emoji: "🍔",
        eyebrow: "Podľa chuti",
        title: "Burgre presne na to, na čo máš chuť",
        body: "Objav klasické, krémové, chrumkavé, pikantné, extra sýte alebo aj ľahšie recepty a vyber si podľa toho, čo by si si dnes dal.",
      },
      {
        emoji: "👨‍🍳",
        eyebrow: "Krok za krokom",
        title: "Postup prípravy krok za krokom",
        body: "Nasleduj jednoduché inštrukcie na vyskladanie každého burgra, bez zbytočného hádania množstiev, kombinácií alebo poradia prípravy.",
      },
      {
        emoji: "🥬",
        eyebrow: "Suroviny",
        title: "Rozmanité suroviny a kombinácie",
        body: "Používaj hovädzie, kuracie, syry, slaninku, zeleninu, huby, avokádo, kyslé uhorky a ďalšie prílohy na vytvorenie úplne nových chutí.",
      },
      {
        emoji: "🔥",
        eyebrow: "Viac chuti",
        title: "Omáčky a špeciálne vylepšenia",
        body: "Daj svojim burgrom väčší charakter vďaka domácim dresingom, krémovým omáčkam, BBQ, horčici, koreniu a detailom, ktoré robia ten pravý rozdiel.",
      },
      {
        emoji: "🏡",
        eyebrow: "Na zdieľanie",
        title: "Nápady na víkendy a stretnutia",
        body: "Priprav burgre, ktoré sú ako stvorené na zdieľanie s rodinou, pohostenie pre priateľov alebo len na výnimočnejší obed doma.",
      },
      {
        emoji: "🚚",
        eyebrow: "Bez donášky",
        title: "Viac chuti bez spoliehania sa na donášku",
        body: "Zažeň hlad priamo doma receptami, ktoré sú sýte, domáce a oveľa viac uspokojujúce ako narýchlo zbúchané jedlo z vonku.",
      },
    ],
    cta: "CHCEM SVOJICH 101 BURGROV",
    trust: [
      { icon: "lock", text: "Okamžitý prístup" },
      { icon: "mail", text: "Doručenie e-mailom" },
      { icon: "card", text: "Bezpečná platba" },
    ],
  },

  carouselSection: {
    eyebrow: "Jednoduché recepty na domáce maškrtenie",
    headline: {
      pre: "Chutné domáce burgre v",
      accent: "jednoduchých a praktických variantoch",
    },
    images: [
      { src: "/carousel/slide-1.webp", alt: "Šťavnatý domáci burger servírovaný na drevenej doske" },
      { src: "/carousel/slide-2.webp", alt: "Burger so slaninkou a roztopeným syrom" },
      { src: "/carousel/slide-3.webp", alt: "Rozmanitý výber domácich burgrov" },
      { src: "/carousel/slide-4.webp", alt: "Proces prípravy burgra" },
    ],
    chips: [
      "RÝCHLA PRÍPRAVA",
      "DOSTUPNÉ SUROVINY",
      "DOMÁCA CHUŤ",
      "IDEÁLNE NA ZDIEĽANIE",
    ],
    forYouTitle: "„101 domácich burgrov“ je presne pre teba, ak:",
    forYou: [
      {
        title: "Chceš uvariť niečo dobré bez zbytočných komplikácií:",
        body: "jednoduché recepty vytvorené tak, aby si pripravil parádne burgre bez toho, aby si strávil hodiny v kuchyni.",
      },
      {
        title: "Hľadáš rýchle nápady na jedlo doma:",
        body: "praktické možnosti na dni, kedy máš chuť na niečo dobré, ale nechce sa ti dlho vymýšľať, čo variť.",
      },
      {
        title: "Rád rozmaznávaš svoju rodinu alebo priateľov:",
        body: "šťavnaté, domáce a mimoriadne chutné burgre na spoločné večere, víkendy alebo posedenia.",
      },
      {
        title: "Chceš rozmanitosť bez zložitých receptov:",
        body: "kombinácie s mäsom, syrmi, omáčkami, zeleninou a prílohami, aby ste nejedli stále to isté dokola.",
      },
      {
        title: "Uprednostňuješ domácu chuť pred donáškou:",
        body: "priprav si doma sýte, praktické a oveľa poctivejšie burgre vždy, keď na ne dostaneš chuť.",
      },
    ],
    cta: "CHCEM SVOJICH 101 BURGROV",
    trust: [
      { icon: "lock", text: "Okamžitý prístup" },
      { icon: "mail", text: "Doručenie e-mailom" },
      { icon: "card", text: "Bezpečná platba" },
    ],
    a11yPrev: "Predchádzajúci recept",
    a11yNext: "Ďalší recept",
    a11yDot: "Na recept",
  },

  bonuses: {
    eyebrow: "Časovo obmedzené bonusy v cene",
    headline: {
      pre: "Ak si kúpiš",
      accent: "101 domácich burgrov",
      post: ", získaš aj tieto darčeky",
    },
    intro:
      "Doplň svoje burgre praktickými návodmi na prípravu domácich omáčok a dresingov, ktoré posunú každý recept o level vyššie.",
    items: [
      {
        badge: "🎁 BONUS 1",
        title: "Sprievodca domácimi omáčkami",
        body: "Jednoduché recepty na krémové, BBQ, pikantné a lahodné omáčky, s ktorými budú tvoje burgre ešte o kus lepšie.",
        priceLabel: "Špeciálna hodnota:",
        priceValue: "Zahrnuté zdarma",
        image: "/bonuses/bono-salsas.webp",
        imageAlt: "Sprievodca domácimi omáčkami",
      },
      {
        badge: "🎁 BONUS 2",
        title: "Sprievodca domácimi dresingmi",
        body: "Nauč sa pripravovať praktické a chutné dresingy ideálne k burgrom, hranolkám, šalátom a k ďalším domácim jedlám.",
        priceLabel: "Špeciálna hodnota:",
        priceValue: "Zahrnuté zdarma",
        image: "/bonuses/bono-aderezos.webp",
        imageAlt: "Sprievodca domácimi dresingmi",
      },
    ],
    outro: {
      pre: "Vďaka týmto bonusom dodáš svojim burgrom tú extra chuť, ktorá z bežného receptu spraví niečo",
      accent: "oveľa špeciálnejšie.",
    },
    cta: "CHCEM SVOJICH 101 BURGROV",
    trust: [
      { icon: "lock", text: "Okamžitý prístup" },
      { icon: "mail", text: "Doručenie e-mailom" },
      { icon: "card", text: "Bezpečná platba" },
    ],
  },

  recap: {
    eyebrow: "Všetko v jednom prístupe",
    headline: {
      pre: "Všetko, čo získaš, aby si mohol pripravovať",
      accent: "neodolateľné domáce burgre",
    },
    subheadline:
      "Hlavná kuchárska kniha plus doplnkové návody, aby si svoje burgre dotiahol do dokonalosti s vynikajúcimi omáčkami, dresingmi a kombináciami.",
    paragraph: "Dnes naozaj nie je o čom premýšľať",
    body: "Získaš prístup k praktickej zbierke receptov a nápadov na prípravu šťavnatých, domácich a jednoduchých burgrov, spolu s bonusovými materiálmi, ktoré dodajú každému jedlu ešte viac chuti.",
    highlight:
      "✨ Obsahuje hlavnú kuchársku knihu a špeciálne bonusy, vďaka ktorým vylepšíš svoje domáce výtvory",
    cta: "CHCEM SVOJICH 101 BURGROV",
    trust: [
      { icon: "lock", text: "Okamžitý prístup" },
      { icon: "mail", text: "Doručenie e-mailom" },
      { icon: "card", text: "Bezpečná platba" },
    ],
  },

  testimonials: {
    eyebrow: "Recenzie od ľudí, ktorí radi varia doma",
    headline: {
      pre: "Pozri sa, čo hovoria tí, ktorí už pripravujú",
      accent: "chutné domáce burgre",
    },
    subheadline:
      "Skutočné príbehy ľudí, ktorí chceli viac nápadov, lepšiu chuť a výnimočnejšie jedlá bez toho, aby sa museli stále spoliehať na donášku.",
    items: [
      {
        name: "Mária L.",
        role: "Varí pre rodinu",
        avatar: "/testimonials/avatar-1.webp",
        quote:
          "Veľmi sa mi to páčilo, lebo už nerobím zakaždým ten istý burger. Teraz mám kopu nápadov, ako ich urobiť zakaždým inak a oveľa chutnejšie priamo u nás doma.",
      },
      {
        name: "Andrej P.",
        role: "Ideálne na víkendy",
        avatar: "/testimonials/avatar-2.webp",
        quote:
          "Kombinácie omáčok a príloh sú úplná pecka. Moje burgre teraz chutia ako z reštaurácie, ale pritom ich robím vo vlastnej kuchyni.",
      },
      {
        name: "Karolína R.",
        role: "Viac chuti bez donášky",
        avatar: "/testimonials/avatar-3.webp",
        quote:
          "Kúpila som si ju, lebo som chcela prestať tak často objednávať fastfood. Teraz, keď nás chytí chuť na niečo podobné, spravíme si burgre doma.",
      },
      {
        name: "Jakub M.",
        role: "Jednoduché a praktické recepty",
        avatar: "/testimonials/avatar-4.webp",
        quote:
          "Recepty sú super jednoduché. Nemusíš byť žiadny šéfkuchár, stačí si vybrať nápad a za chvíľu máš pred sebou niečo naozaj dobré.",
      },
      {
        name: "Sofia G.",
        role: "Perfektné na stretnutia",
        avatar: "/testimonials/avatar-5.webp",
        quote:
          "Páči sa mi, že sú tam varianty pre každého. Urobili sme si s kamošmi burgerovú párty a každý chcel ochutnať ešte aspoň jeden navyše.",
      },
    ],
    cta: "CHCEM SVOJICH 101 BURGROV",
    trust: [
      { icon: "lock", text: "Okamžitý prístup" },
      { icon: "mail", text: "Doručenie e-mailom" },
      { icon: "card", text: "Bezpečná platba" },
    ],
    starsAlt: "5 z 5 hviezdičiek",
  },

  finalCta: {
    eyebrow: "🔥 Špeciálna časovo obmedzená ponuka",
    headline: {
      pre: "Získaj",
      accent: "101 domácich burgrov",
      post: "spolu s bonusmi",
    },
    subheadline:
      "Pripravuj doma šťavnaté, jednoduché a neskutočne chutné burgre. Praktické recepty na večere, víkendy, posedenia aj na náhly záchvat hladu.",
    badge: "🎁 Obsahuje kuchársku knihu + bonusové darčeky",
    productName: {
      pre: "101 domácich",
      accent: "burgrov",
    },
    productTagline:
      "Jednoduché, chutné a praktické recepty na prípravu burgrov, ktoré doma chutia ako z vašej obľúbenej reštaurácie.",
    bullets: [
      "Hlavná kniha so 101 nápadmi na domáce burgre",
      "Klasické, krémové, chrumkavé, pikantné a sýte recepty",
      "Varianty s hovädzím, kuracím mäsom, syrmi, slaninou, zeleninou a prílohami",
      "Postupy krok za krokom pre varenie bez stresu",
      "Bonus 1: Sprievodca domácimi omáčkami",
      "Bonus 2: Sprievodca domácimi dresingmi",
      "Nápady na rýchle večere, víkendy a stretnutia s priateľmi",
      "Okamžitý prístup k digitálnej knihe",
    ],
    closing: {
      pre: "Ideálne, ak sa chceš dobre najesť bez toho, aby si závisel od donášky:",
      body: "budeš mať poruke praktické nápady na prípravu šťavnatých burgrov doma, o ktoré sa môžeš podeliť so svojou rodinou alebo priateľmi.",
    },
    priceOldLabel: "Predtým:",
    priceOld: "29.90 €",
    priceNote: "Ponuka platí len dnes",
    priceNow: "8.90",
    priceCurrency: "€",
    priceFooter: "Okamžitý digitálny prístup k hlavnému produktu a priloženým bonusom.",
    urgency: "Posledné kusy za špeciálnu cenu",
    discountPct: "82%",
    discountLabel: "ZĽAVA",
    button: "ÁNO, CHCEM 101 BURGROV",
    trust: [
      { icon: "lock", text: "Bezpečná platba" },
      { icon: "mail", text: "Prístup na e-mail" },
      { icon: "zap", text: "Okamžité doručenie" },
    ],
    imageAlt: "Balíček 101 domácich burgrov so zahrnutými bonusmi",
  },

  faq: {
    eyebrow: "Často kladené otázky",
    headline: {
      pre: "Odpovedáme na tvoje otázky, kým sa pustíš do",
      accent: "domácich burgrov",
    },
    subheadline:
      "Tu nájdeš najčastejšie odpovede ohľadom kuchárskej knihy, bonusov a prístupu k produktu.",
    items: [
      {
        q: "Ako mi recepty prídu?",
        a: "Po dokončení platby získaš okamžitý digitálny prístup k receptom na e-mail, ktorý si zadal pri nákupe.",
      },
      {
        q: "Môžem si ich čítať v telefóne?",
        a: "Áno. Môžeš si ich otvoriť na telefóne, tablete alebo počítači. Na otvorenie materiálov ti stačí len pripojenie na internet.",
      },
      {
        q: "Musím vedieť dobre variť?",
        a: "Vôbec nie. Recepty sú navrhnuté tak, aby boli jednoduché, praktické a jasné, aj keď v kuchyni nemáš veľa skúseností.",
      },
      {
        q: "Čo presne nákup zahŕňa?",
        a: "Zahŕňa hlavnú digitálnu knihu „101 domácich burgrov“, ako aj špeciálne bonusy – návody na domáce omáčky a dresingy.",
      },
      {
        q: "Sú recepty zložité?",
        a: "Nie. Cieľom je, aby si si doma dokázal spraviť neskutočné burgre bez zložitých postupov alebo surovín, ktoré sa nedajú zohnať.",
      },
      {
        q: "Kedy môžem začať?",
        a: "Môžeš začať hneď, ako získaš prístup. Stačí si vybrať recept a postupovať podľa krokov.",
      },
    ],
    cta: "CHCEM SVOJICH 101 BURGROV",
    trust: [
      { icon: "lock", text: "Bezpečná platba" },
      { icon: "mail", text: "Okamžitý prístup" },
      { icon: "burger", text: "Bonusy v cene" },
    ],
  },

  closing: {
    eyebrow: "Začni vo svojej kuchyni ešte dnes",
    headline: {
      pre: "Priprav svoje prvé",
      accent: "domáce burgre",
      post: "už tento týždeň",
    },
    paragraph:
      "Získaj kuchársku knihu, vyber si svoj prvý burger a premeň každé jedlo na skvelý moment, o ktorý sa podelíš s blízkymi.",
    cta: "CHCEM SVOJICH 101 BURGROV",
    whatsapp: "Napíš nám na WhatsApp",
    imageAlt: "Domáci burger, pripravený na servírovanie",
  },

  footer: {
    brand: "Crearis",
    tagline: "Digitálna kuchárska kniha pre domáce burgre",
    rightsPrefix: "©",
    rightsSuffix: "Crearis. Všetky práva vyhradené.",
    disclaimer:
      "Tento web nie je spojený, asociovaný, schválený ani sponzorovaný spoločnosťou Facebook, a nebol ňou nijakým spôsobom kontrolovaný, posudzovaný, schválený ani podporovaný. Facebook je registrovaná ochranná známka spoločnosti Meta Platforms, Inc.",
  },
};