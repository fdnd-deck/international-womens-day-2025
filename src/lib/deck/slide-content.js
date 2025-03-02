import { baseData } from "$lib/deck/base-data";

import {
  Cover,
  PhotoCollage,
  Planning,
  TextColumns,
  Quote,
  LargeText,
} from "./slides/index.js";

export const slideContent = [
  {
    slideType: Cover,
    transition: "concave", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      classes: "xlarge-heading", // choose large-, or medium-heading if presentation name is too long'
      sprintNr: {
        content: `8 maart 2025`,
      },
      presentationName: {
        content: baseData.presentationName,
      },
      type: {
        content: "IWD",
      },
      emojis: {
        content: ["👩🏾‍💻", "💪", "👩🏻‍🏫"], // max 3 emojis
      },
    },
  },
  {
    slideType: LargeText,
    transition: "concave", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      title: {
        content: "Waarom besteden we hier aandacht aan?",
      },
    },
    notes: "Er is nog steeds een groot verschil tussen het aantal mannen en vrouwen in de ICT, en het is bewezen dat teams waar meer diversiteit is, beter functioneren.",
  },
  {
    slideType: Quote,
    transition: "concave-in fade-out", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      quote: {
        content: "Volgens cijfers van het Centraal Bureau voor de Statistiek is slechts 16,2 procent van de ict’ers vrouw. <span class='opacity-20'>Het is daarmee de meest gesegregeerde beroepsgroep. Nederland bungelt zelfs in de onderste regionen in Europa, waar het gemiddelde met 19 procent al niet veel beter is.</span>",
        classes: "medium-heading",
      },
      author: {
        content: "Bron: <a href='https://www.volkskrant.nl/nieuws-achtergrond/vrouwen-in-de-ict-dat-was-vroeger-gewoon-waarom-nu-dan-niet-meer~b6085bd3/'><b>\"Vrouwen in de ict, dat was vroeger gewoon. Waarom nu dan niet meer?\"</b> - Volkskrant</a>",
        classes: "small-body",
      },
    },
    notes: "Volgens CBS is slechts 16 procent van de ICTers vrouw en dat is extra laag als je bedenkt dat gemiddelde in europa…",
  },
  {
    slideType: Quote,
    transition: "fade-in concave-out", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      quote: {
        content: "<span class='opacity-20'>Volgens cijfers van het Centraal Bureau voor de Statistiek is slechts 16,2 procent van de ict’ers vrouw. Het is daarmee de meest gesegregeerde beroepsgroep. </span>Nederland bungelt zelfs in de onderste regionen in Europa, waar het gemiddelde met 19 procent al niet veel beter is.",
        classes: "medium-heading",
      },
      author: {
        content: "Bron: <a href='https://www.volkskrant.nl/nieuws-achtergrond/vrouwen-in-de-ict-dat-was-vroeger-gewoon-waarom-nu-dan-niet-meer~b6085bd3/'><b>\"Vrouwen in de ict, dat was vroeger gewoon. Waarom nu dan niet meer?\"</b> - Volkskrant</a>",
        classes: "small-body",
      },
    },
    notes: "19% is",
  },
  {
    slideType: Quote,
    transition: "concave", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      quote: {
        content: "<span class='opacity-20'>[…]Die vooroordelen lijken in Nederland nog meer ingesleten dan in andere westerse landen. ‘Harvard ontwikkelde vragenlijsten om die vooroordelen te testen’, vertelt ze.</span> ‘In een vergelijking van 66 landen stond Nederland bovenaan met de sterkste stereotypes over gender en exacte vakken.’",
        classes: "medium-heading",
      },
      author: {
        content: "Bron: <a href='https://www.volkskrant.nl/nieuws-achtergrond/vrouwen-in-de-ict-dat-was-vroeger-gewoon-waarom-nu-dan-niet-meer~b6085bd3/'><b>\"Vrouwen in de ict, dat was vroeger gewoon. Waarom nu dan niet meer?\"</b> - Volkskrant</a>",
        classes: "small-body",
      },
    },
    notes: "Volgens onderzoekers begint deze kloof bij de studiekeuze, en die studiekeuze komt voort uit vooroordelen over genders en vakken.",
  },
  {
    slideType: Quote,
    transition: "concave", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      quote: {
        content: `
    The Netherlands was a particularly dramatic example 
    <span class='opacity-20'>of composite equity indices 
    not predicting gender-science stereotypes.</span> Despite scoring 
    high on composite indices of gender equity, <span class='opacity-20'>this nation 
    (sample size n ! 3,000) had </span>the strongest explicit and 
    second strongest implicit gender-science stereotypes 
    among the nations <span class='opacity-20'>in Figure 1. This seemingly paradoxical
    result, however, makes sense because of high domain-specific
    sex segregation in the Netherlands, whereby male scientists
    outnumbered female scientists nearly four to one in both 
    employment and educational enrollment.</span>`,
        classes: "small-heading",
      },
      author: {
        content: "Bron: <a href='https://eige.europa.eu/sites/default/files/millereaglylinn2015.pdf'><b>\"Women's Representation in Science Predicts National Gender-Science Stereotypes: Evidence From 66 Nations</a>",
        classes: "small-body",
      },
    }
  },
  {
    slideType: Quote,
    transition: "concave", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      quote: {
        content: "↳Hoewel Nederland hoog scoort op gender gelijkheid scoren wij ook heel hoog op het hebben van expliciete en impliciete gender stereotypen ",
        classes: "large-heading",
        color: "var(--c-highlight-2)",
      },
    },
    notes: "Zowel dat we het doorhebben als niet. <br><br> Of nog makkelijker, we zijn eigenlijk hartstikke seksistisch in ons denkbeeld van wetenschappers en techneuten",
  },
  {
    slideType: Quote,
    transition: "concave", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      quote: {
        content: `
    <span class='opacity-20'>The Netherlands was a particularly dramatic example 
    of composite equity indices not predicting gender-science stereotypes. Despite scoring 
    high on composite indices of gender equity, this nation (sample size n ! 3,000) had the strongest explicit and 
    second strongest implicit gender-science stereotypes among the nations in Figure 1. </span>This seemingly paradoxical
    result, however, makes sense because of high domain-specific sex segregation in the Netherlands, whereby male scientists
    outnumbered female scientists nearly four to one in both 
    employment and educational enrollment.`,
        classes: "small-heading",
      },
      author: {
        content: "Bron: <a href='https://eige.europa.eu/sites/default/files/millereaglylinn2015.pdf'><b>\"Women's Representation in Science Predicts National Gender-Science Stereotypes: Evidence From 66 Nations</a>",
        classes: "small-body",
      },
    },
    notes: "Volgens onderzoek komt dit dus door het grote aantal mannen in de wetenschap, zowel in bedrijfsleven als universiteiten en hogescholen zelf."
  },

  {
    slideType: PhotoCollage,
    transition: "concave", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      images: [
        {
          type: 'image',
          src: './media/ada.jpg',
          alt: 'Ada Lovelace',
        },
        {
          type: 'image',
          src: './media/grace.jpg',
          alt: 'Grace Hopper',
        },
      ],
    },
    notes: `
    <p>
    Ada Lovelace wordt gezien als de eerste programmeur ter wereld, ze was een Engelse wiskundige en
    werd geboren in 1815. Ze was de eerste persoon die inzag dat een computer gebruikt kon worden voor 
    meer dan alleen rekenen.
    </p>
    <p>
    Grace Hopper was een Amerikaanse computerwetenschapper.
    Ze ontwikkelde de eerste compiler voor een computer die wiskundige code vertaalde naar code die
    machines konden uitvoeren. Ze staat ook bekend als Grandma COBOL, een computertaal die nog steeds gebruikt
    wordt in Amerika voor social security en waar je aan kan zien dat Elon Musk de ballen verstand heeft van code.
    In COBOL wordt 20 mei 1875 vaak gebruikt als referentie punt wanneer een geboortedatum onbekend is. Hij 
    claimde vervolgens dat er 150 jarige mensen bestonden die uitkeringen kregen.
    </p>`
  },
  {
    slideType: PhotoCollage,
    transition: "concave", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      images: [
        {
          type: 'image',
          src: './media/hedy.jpg',
          alt: 'Hedy Lamarr',
        },
        {
          type: 'image',
          src: './media/mary.webp',
          alt: 'Mary Jackson',
        },
      ]
    },
    notes: `
    <p style="font-size: 1rem;">
    Hedy Lamarr was een Oostenrijkse actrice en uitvinder. Ze ontwikkelde samen met George Antheil aan
    het begin van de tweede wereld oorlog een techniek voor het versleutelen van communicatie met behulp
    van 'frequency hopping' zodat het signaal niet kon worden onderschept. Iets dat later is gebruikt voor 
    de ontwikkeling van WiFi. Ze is tijdens haar leven wel erkent met prijzenvoor haar bijdrages maar ze heeft
    ze nooit in ontvangst genomen omdat ze inmiddels door plastische chrirurgie erg onzeker was geworden. Bij haar dood 
    in 2000 werd vooral haar schoonheid beschreven en was er weinig aandacht voor haar bijdrages.
    </p>
    <p style="font-size: 1rem;">
    Mary Jackson was een Amerikaanse wiskundige en werkte tijdens de segregatie in de VS voor NASA. Ze werkte samen met Katherine Johnson en Dorothy Vaughan aan project Mercury, het eerste ruimtevaart programma dat een mens in de baan van de aarde wilde brengen.  Ze was een leider
    in het zorgen voor betere kansen voor toekomstige generaties. Zij was de eerste zwarte vrouwelijke ingenieur bij NASA.
    <br>
    </p>
    `
  },
  {
    slideType: Quote,
    transition: "concave-in fade-out", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      quote: {
        content: `
        <span class='opacity-20'>A new study from researchers at Cornell University 
        found that </span>the difference between the occupations and industries in which men 
        and women work has recently become the single largest cause of the gender pay 
        gap, accounting for more than half of it. <span class='opacity-20'>In fact, another study shows, when 
        women enter fields in greater numbers, pay declines — for the very same jobs 
        that more men were doing before.</span>`,
        classes: "medium-heading",
      },
      author: {
        content: "Bron: <a href='https://www.nytimes.com/2016/03/20/upshot/as-women-take-over-a-male-dominated-field-the-pay-drops.html'><b>\"As Women Take Over a Male-Dominated Field, the Pay Drops\"</b> - The New York Times</a>",
        classes: "small-body",
      },
    },
    notes: `
    <p>Als je bedenkt dat vrouwen zo'n grote impact hebben gehad op techniek is het raar om te zien
    dat er nu zoveel minder vrouwen dan mannen werken.</p>
    <p>Uit onderzoek blijkt dat vooral het beroep dat je kiest uitmaakt in het verschil in loon tussen
    mannen en vrouwen. </p>
    <p>Maar als je denkt, top, ik kies een beroep dat vooral door mannen wordt uitgevoerd, dan is er nog iets meer aan de hand...</p>
    `
  },
  {
    slideType: Quote,
    transition: "fade-in concave-out", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      quote: {
        content: `
        <span class='opacity-20'>A new study from researchers at Cornell University 
        found that the difference between the occupations and industries in which men 
        and women work has recently become the single largest cause of the gender pay 
        gap, accounting for more than half of it. </span>In fact, another study shows, when 
        women enter fields in greater numbers, pay declines — for the very same jobs 
        that more men were doing before.`,
        classes: "medium-heading",
      },
      author: {
        content: "Bron: <a href='https://www.nytimes.com/2016/03/20/upshot/as-women-take-over-a-male-dominated-field-the-pay-drops.html'><b>\"As Women Take Over a Male-Dominated Field, the Pay Drops\"</b> - The New York Times</a>",
        classes: "small-body",
      },
    },
    notes: `
    <p>Bijvoorbeeld het feit dat als er meer vrouwen in een beroep komen, de lonen kunnen dalen.</p>
    <p>Dit signaleert dat werk dat door vrouwen gedaan wordt minder wordt gewaardeerd dan werk dat door mannen
    wordt uitgevoerd.</p>
    `
  },
  {
    slideType: Quote,
    transition: "concave-in fade-out", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      quote: {
        content: `
        […]The same thing happened when women in large numbers 
        became designers (wages fell 34 percentage points), housekeepers (wages fell 21 percentage points) 
        and biologists (wages fell 18 percentage points).
        <span class='opacity-20'>
        The reverse was true when a job attracted more men. Computer programming, for instance, 
        used to be a relatively menial role done by women. But when male programmers began to outnumber 
        female ones, the job began paying more and gained prestige.</span>`,
        classes: "small-heading",
      },
      author: {
        content: "Bron: <a href='https://www.nytimes.com/2016/03/20/upshot/as-women-take-over-a-male-dominated-field-the-pay-drops.html'><b>\"As Women Take Over a Male-Dominated Field, the Pay Drops\"</b> - The New York Times</a>",
        classes: "small-body",
      },
    },
    notes: `<p>Het ronduit genante feit is dat wanneer er meer mannen in een beroepsveld komen werken, de lonen kunnen stijgen.</p>`
  },
  {
    slideType: Quote,
    transition: "fade-in concave-out", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      quote: {
        content: `
        <span class='opacity-20'>[…]The same thing happened when women in large numbers 
        became designers (wages fell 34 percentage points), housekeepers (wages fell 21 percentage points) 
        and biologists (wages fell 18 percentage points). </span>
        The reverse was true when a job attracted more men. Computer programming, for instance, 
        used to be a relatively menial role done by women. But when male programmers began to outnumber 
        female ones, the job began paying more and gained prestige.`,
        classes: "small-heading",
      },
      author: {
        content: "Bron: <a href='https://www.nytimes.com/2016/03/20/upshot/as-women-take-over-a-male-dominated-field-the-pay-drops.html'><b>\"As Women Take Over a Male-Dominated Field, the Pay Drops\"</b> - The New York Times</a>",
        classes: "small-body",
      },
    },
  },
  {
    slideType: LargeText,
    transition: "fade-in concave-out", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      title: {
        content: "Lange tijd werd het ontwikkelen van software gezien als <i>ondergeschikt</i>",
        classes: "xlarge-heading",
      }
    },
  },
  {
    slideType: PhotoCollage,
    transition: "concave", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      images: [
        {
          type: 'image',
          src: './media/bugs.gif',
          alt: 'Bugs Bunny holding stacks of money',
        },
      ],
    },
    notes: `Totdat mensen in de jaren zeventig/tachtig begonnen in te zien hoeveel geld je er mee kon verdienen. Opeens werd het gezien als een moeilijk beroep.
    `
  },
  {
    slideType: PhotoCollage,
    transition: "concave", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      caption: `<h5 class="caps font-bold medium-body">1984</h5><h2>De komst van<br> de Personal Computer</h2>`,
      captionPosition: "right bottom",
      images: [
        {
          type: 'image',
          src: './media/mac.jpg',
          alt: 'Macintosh',
        },
        {}
      ],
    },
    notes: `Vanaf jaren 70 werden jongens dus aangemoedigd door hun vaders om te experimenteren 💰
      En Universiteiten versterkten dat door voorkennis te verwachten voor opleidingen in de techniek.`
  },
  {
    slideType: Quote,
    transition: "concave-in fade-out", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      quote: {
        content: `
        Dat is terug te zien in de cijfers: van bijna 40 procent begin jaren tachtig zakte het aantal 
        vrouwelijke ict-studenten in de Verenigde Staten naar 17 procent in 2010. Vergelijkbare cijfers 
        voor Nederland zijn moeilijk te vinden. <span class='opacity-20'>Uit een analyse van Techniekpact in opdracht van de Volkskrant
        blijkt dat hogescholen en universiteiten pas in de jaren tachtig begonnen met echte ict-opleidingen, 
        de mbo’s zelfs pas in de jaren negentig. 
        Op die opleidingen kwam het percentage vrouwen nooit boven de 15 procent.</span>`,
        classes: "small-heading",
      },
      author: {
        content: "Bron: <a href='https://www.volkskrant.nl/nieuws-achtergrond/vrouwen-in-de-ict-dat-was-vroeger-gewoon-waarom-nu-dan-niet-meer~b6085bd3/'><b>\"Vrouwen in de ict, dat was vroeger gewoon. Waarom nu dan niet meer?\"</b> - Volkskrant</a>",
        classes: "small-body",
      },
    },
  },
  {
    slideType: Quote,
    transition: "fade-in concave-out", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      quote: {
        content: `
        <span class='opacity-20'>Dat is terug te zien in de cijfers: van bijna 40 procent begin jaren tachtig zakte het aantal 
        vrouwelijke ict-studenten in de Verenigde Staten naar 17 procent in 2010. Vergelijkbare cijfers 
        voor Nederland zijn moeilijk te vinden. </span>Uit een analyse van Techniekpact in opdracht van de Volkskrant
        blijkt dat hogescholen en universiteiten pas in de jaren tachtig begonnen met echte ict-opleidingen, 
        de mbo’s zelfs pas in de jaren negentig. 
        Op die opleidingen kwam het percentage vrouwen nooit boven de 15 procent.`,
        classes: "small-heading",
      },
      author: {
        content: "Bron: <a href='https://www.volkskrant.nl/nieuws-achtergrond/vrouwen-in-de-ict-dat-was-vroeger-gewoon-waarom-nu-dan-niet-meer~b6085bd3/'><b>\"Vrouwen in de ict, dat was vroeger gewoon. Waarom nu dan niet meer?\"</b> - Volkskrant</a>",
        classes: "small-body",
      },
    },
  },
  {
    slideType: LargeText,
    transition: "fade-in concave-out", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      title: {
        content: "Wat kan jij doen?",
        classes: "xlarge-heading",
      }
    },
    notes: `
    Kijk naar je eigen biases, moedig vrouwen in jouw omgeving aan om in de techniek te komen.
    Wordt zelf een rolmodel.
    `
  },
  {
    slideType: LargeText,
    transition: "fade-in concave-out", // zoom, fade, slide, convex, concave, zoom-in, zoom-out, none
    data: {
      title: {
        content: "👩🏻‍💻",
        classes: "xlarge-heading",
      }
    },
    notes: `
    Kijk naar je eigen biases, moedig vrouwen in jouw omgeving aan om in de techniek te komen.
    Wordt zelf een rolmodel.
    `
  }
];

