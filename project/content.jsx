/* global React */
// Bilingual content. it = Italiano, en = English.
// Keep strings short and editable.

const CONTENT = {
  hud: {
    it: { status: 'OPERATIVO', loc: 'NAPOLI · IT', role: 'SENIOR ANALYST · ACCENTURE' },
    en: { status: 'OPERATIONAL', loc: 'NAPLES · IT', role: 'SENIOR ANALYST · ACCENTURE' },
  },

  nav: [
    { id: 'boot',      it: 'INTRO',         en: 'INTRO' },
    { id: 'origin',    it: 'ORIGINE',       en: 'ORIGIN' },
    { id: 'pivot',     it: 'IL SALTO',      en: 'THE LEAP' },
    { id: 'climb',     it: 'LA SCALATA',    en: 'THE CLIMB' },
    { id: 'now',       it: 'OGGI',          en: 'TODAY' },
    { id: 'stack',     it: 'COMPETENZE',    en: 'STACK' },
    { id: 'projects',  it: 'PROGETTI',      en: 'PROJECTS' },
    { id: 'mission',   it: 'MISSIONE',      en: 'MISSION' },
    { id: 'letters',   it: 'INFLUENZE',     en: 'INFLUENCES' },
    { id: 'contact',   it: 'CONTATTI',      en: 'CONTACT' },
  ],

  boot: {
    it: {
      pre: 'INIZIALIZZAZIONE PROFILO',
      first: 'Francesco',
      last: 'Cesarano',
      role: ['DEVELOPER', 'AI BUILDER', 'FUTURO FONDATORE'],
      quote: 'Quando ero un bambino, ero un sognatore. Leggevo fumetti ed ero l\'eroe di quei fumetti. Guardavo film ed ero l\'eroe di quei film. Adesso ogni mio sogno è diventato realtà.',
      author: 'Elvis Presley',
      hint: 'SCROLLA PER COMINCIARE',
    },
    en: {
      pre: 'PROFILE INITIALIZING',
      first: 'Francesco',
      last: 'Cesarano',
      role: ['DEVELOPER', 'AI BUILDER', 'FUTURE FOUNDER'],
      quote: 'When I was a child, I was a dreamer. I read comic books, and I was the hero of the comic book. I saw movies, and I was the hero in the movie. Now my dreams have come true.',
      author: 'Elvis Presley',
      hint: 'SCROLL TO BEGIN',
    },
  },

  origin: {
    it: {
      tag: 'ORIGINE · 1996 — 2016',
      title: ['Sono nato a ', { accent: 'Napoli' }, ',', { br: true }, 'in mezzo al ', { accent: 'rumore' }, '.'],
      lead: 'Da piccolo ero un sognatore. Vivevo dentro i fumetti, dentro i film, sempre con l\'idea di essere l\'eroe di una storia più grande. La prima ossessione è stata la musica — volevo diventare un musicista. Ma c\'era anche un\'altra passione, più silenziosa, che mi teneva incollato allo schermo del pc, che mi faceva passare le notti a sperimentare.',
      bullets: [
        ['Nato a', 'Napoli, 1996'],
        ['Prima passione', 'Musica'],
        ['Seconda passione', 'Informatica'],
        ['Diploma', 'ITI Renato Elia · 2016'],
        ['Stato d\'animo', 'Dreamer'],
      ],
      meta: { left: 'CAM_01 · 35MM', right: 'NAPOLI · IT' },
    },
    en: {
      tag: 'ORIGIN · 1996 — 2016',
      title: ['Born in ', { accent: 'Naples' }, ',', { br: true }, 'inside the ', { accent: 'noise' }, '.'],
      lead: 'I was a dreamer kid. I lived inside comic books and movies, always picturing myself as the hero of a bigger story. My first obsession was music — I wanted to become a musician. But there was another, quieter passion that kept me glued to the screen, spending nights experimenting.',
      bullets: [
        ['Born in', 'Naples, 1996'],
        ['First passion', 'Music'],
        ['Second passion', 'Computers'],
        ['Diploma', 'ITI Renato Elia · 2016'],
        ['Mood', 'Dreamer'],
      ],
      meta: { left: 'CAM_01 · 35MM', right: 'NAPLES · IT' },
    },
  },

  pivot: {
    it: {
      tag: '01 · IL SALTO',
      title: ['Il giorno in cui', { br: true }, 'ho ', { accent: 'cambiato vita' }, '.'],
      lead: 'Nel 2022 entro in Boolean — un master professionalizzante di sei mesi. Sei mesi che hanno spaccato in due la mia storia: un prima, e tutto quello che è venuto dopo.',
      items: [
        {
          year: '2016', month: 'LUG',
          title: 'Diploma · Perito Informatico',
          co: 'ITI Renato Elia',
          body: 'Il primo contatto serio con il codice. Esce un ragazzo che ancora non sa di volerlo fare per sempre.',
          tags: ['INFORMATICA', 'BASE'],
        },
        {
          year: '2016—2021', month: '',
          title: 'Anni di musica e domande',
          co: 'Vita',
          body: 'Provo strade diverse. La musica resta, ma chiede troppo e restituisce poco. Inizio a sentire che il mio campo è un altro.',
          tags: ['CRESCITA', 'PIVOT'],
        },
        {
          year: '2022', month: 'GEN',
          title: 'Boolean Careers · Master Full-Stack',
          co: 'Boolean',
          body: 'Sei mesi di full immersion. Mi cambia la vita. Esco con la consapevolezza che il codice non è solo un mestiere — è un linguaggio che parlo.',
          tags: ['REACT', 'JS', 'NODE', 'PIVOT'],
        },
      ],
    },
    en: {
      tag: '01 · THE LEAP',
      title: ['The day I', { br: true }, 'changed my ', { accent: 'life' }, '.'],
      lead: 'In 2022 I joined Boolean — a six-month intensive bootcamp. Six months that split my story in two: a before, and everything that came after.',
      items: [
        {
          year: '2016', month: 'JUL',
          title: 'High-school diploma · IT specialist',
          co: 'ITI Renato Elia',
          body: 'First real contact with code. Walks out a kid who doesn\'t yet know he\'ll do this forever.',
          tags: ['IT', 'FOUNDATION'],
        },
        {
          year: '2016—2021', month: '',
          title: 'Years of music and questions',
          co: 'Life',
          body: 'I tried different paths. Music stayed, but asked too much and gave too little back. I started sensing my field was somewhere else.',
          tags: ['GROWTH', 'PIVOT'],
        },
        {
          year: '2022', month: 'JAN',
          title: 'Boolean Careers · Full-Stack Master',
          co: 'Boolean',
          body: 'Six months of full immersion. Life-changing. I came out knowing code wasn\'t just a job — it was a language I now spoke.',
          tags: ['REACT', 'JS', 'NODE', 'PIVOT'],
        },
      ],
    },
  },

  climb: {
    it: {
      tag: '02 · LA SCALATA',
      title: ['Da stagista a ', { accent: 'mentor' }, '.', { br: true }, 'Una rampa di lancio.'],
      lead: 'I primi due capitoli professionali. Unitiva è il colpo di fulmine con React. SFIDA è il nido — dove imparo a guidare, formare, far crescere.',
      items: [
        {
          year: '2022', month: 'SET',
          title: 'Stage · Frontend Developer',
          co: 'UNITIVA',
          body: 'Imparo a usare React sul serio. È amore a prima vista. Da questo momento React diventa la mia arma migliore.',
          tags: ['REACT', 'STAGE', 'CRESCITA'],
        },
        {
          year: '2023', month: 'GEN',
          title: 'Sviluppatore · poi Tech Lead',
          co: 'SFIDA S.r.l.',
          body: 'Da stage a indeterminato. Vengo promosso, mi danno responsabilità reali: piccoli team da formare e seguire. Mi accorgo che mi piace stare un passo dietro le persone per farle salire.',
          tags: ['TEAM LEAD', 'MENTORING', 'PROMOZIONE'],
        },
      ],
    },
    en: {
      tag: '02 · THE CLIMB',
      title: ['From intern to ', { accent: 'mentor' }, '.', { br: true }, 'A launching pad.'],
      lead: 'The first two professional chapters. Unitiva was love-at-first-sight with React. SFIDA was the nest — where I learned to lead, train, grow people.',
      items: [
        {
          year: '2022', month: 'SEP',
          title: 'Intern · Frontend Developer',
          co: 'UNITIVA',
          body: 'I learned React for real. Love at first sight. From this moment on, React became my sharpest weapon.',
          tags: ['REACT', 'INTERNSHIP', 'GROWTH'],
        },
        {
          year: '2023', month: 'JAN',
          title: 'Developer · then Tech Lead',
          co: 'SFIDA S.r.l.',
          body: 'From intern to full-time. Promoted, given real responsibility: small teams to train and follow. I realised I liked standing one step behind people, helping them climb.',
          tags: ['TEAM LEAD', 'MENTORING', 'PROMOTION'],
        },
      ],
    },
  },

  now: {
    it: {
      tag: '03 · OGGI · ACCENTURE',
      title: ['Adesso costruisco', { br: true }, 'sistemi che ', { accent: 'pensano' }, '.'],
      lead: 'Senior Analyst in Accenture. L\'ultimo anno è stato un\'esplosione: AI generativa, sistemi agentici, RAG, knowledge engineering. Il futuro non è più una promessa — è il mio stack quotidiano.',
      quote: '"L\'IA non sostituisce gli sviluppatori. Moltiplica chi sa come usarla. Io sto imparando a moltiplicare i miei team."',
      side: [
        { l: 'RUOLO', v: 'SR. ANALYST' },
        { l: 'AZIENDA', v: 'ACCENTURE' },
        { l: 'FOCUS', v: 'AI / AGENTIC' },
        { l: 'TEAM', v: 'MULTIPLI' },
        { l: 'STATO', v: 'ATTIVO' },
      ],
    },
    en: {
      tag: '03 · TODAY · ACCENTURE',
      title: ['Now I build', { br: true }, 'systems that ', { accent: 'think' }, '.'],
      lead: 'Senior Analyst at Accenture. The past year exploded: generative AI, agentic systems, RAG, knowledge engineering. The future isn\'t a promise anymore — it\'s my everyday stack.',
      quote: '"AI doesn\'t replace developers. It multiplies the ones who know how to use it. I\'m learning to multiply my teams."',
      side: [
        { l: 'ROLE', v: 'SR. ANALYST' },
        { l: 'COMPANY', v: 'ACCENTURE' },
        { l: 'FOCUS', v: 'AI / AGENTIC' },
        { l: 'TEAMS', v: 'MULTIPLE' },
        { l: 'STATUS', v: 'ACTIVE' },
      ],
    },
  },

  stats: {
    it: {
      tag: '04 · NUMERI',
      title: ['Quattro anni.', { br: true }, 'Un percorso ', { accent: 'denso' }, '.'],
      lead: 'I numeri non sono mai tutta la storia, ma raccontano la velocità.',
      items: [
        { n: 4, unit: '+', label: 'ANNI DA DEVELOPER', suf: '', desc: 'DAL 2022' },
        { n: 10, unit: '+', label: 'RISORSE FORMATE', suf: '', desc: 'MENTORSHIP' },
        { n: 3, unit: '', label: 'AZIENDE · 1 MULTINAZIONALE', suf: '', desc: 'PERCORSO' },
        { n: 100, unit: '%', label: 'CURIOSITÀ ATTIVA', suf: '', desc: 'SEMPRE' },
      ],
    },
    en: {
      tag: '04 · NUMBERS',
      title: ['Four years.', { br: true }, 'A ', { accent: 'dense' }, ' run.'],
      lead: 'Numbers are never the full story — but they tell you about pace.',
      items: [
        { n: 4, unit: '+', label: 'YEARS AS DEVELOPER', suf: '', desc: 'SINCE 2022' },
        { n: 10, unit: '+', label: 'PEOPLE I\'VE MENTORED', suf: '', desc: 'MENTORSHIP' },
        { n: 3, unit: '', label: 'COMPANIES · 1 MULTINATIONAL', suf: '', desc: 'JOURNEY' },
        { n: 100, unit: '%', label: 'CURIOSITY · ALWAYS ON', suf: '', desc: 'ALWAYS' },
      ],
    },
  },

  stack: {
    it: {
      tag: '05 · STACK',
      title: ['Gli ', { accent: 'strumenti' }, ' che uso', { br: true }, 'ogni giorno.'],
      lead: 'Le competenze, raccontate con onestà. Cinque pallini = padronanza totale. Uno = lo so leggere ma non ci scrivo da solo.',
      frontend: { title: 'FRONT-END · FOUNDATION', items: [
        { name: 'React', lvl: 5 },
        { name: 'JavaScript', lvl: 5 },
        { name: 'HTML / CSS', lvl: 5 },
        { name: 'TypeScript', lvl: 4 },
      ]},
      backend: { title: 'BACK-END · INFRA', items: [
        { name: 'Node.js · Express', lvl: 3 },
        { name: 'MySQL', lvl: 3 },
        { name: 'Java', lvl: 2 },
        { name: 'PHP · OpenAPI', lvl: 2 },
      ]},
      ai: { title: 'AI · LA NUOVA ARMA', items: [
        { name: 'Claude Code', lvl: 5 },
        { name: 'RAG Systems', lvl: 5 },
        { name: 'Agentic Systems', lvl: 5 },
        { name: 'LLM Implementation', lvl: 5 },
        { name: 'Obsidian Knowledge', lvl: 5 },
      ]},
      soft: { title: 'SOFT · LA PARTE UMANA', items: [
        { name: 'Mentoring · Formazione', lvl: 5 },
        { name: 'Team Leadership', lvl: 4 },
        { name: 'Problem Solving', lvl: 5 },
        { name: 'Visione di prodotto', lvl: 4 },
      ]},
    },
    en: {
      tag: '05 · STACK',
      title: ['The ', { accent: 'tools' }, ' I use', { br: true }, 'every day.'],
      lead: 'My skills, honest. Five dots = full command. One dot = I can read it but I don\'t write it solo.',
      frontend: { title: 'FRONT-END · FOUNDATION', items: [
        { name: 'React', lvl: 5 },
        { name: 'JavaScript', lvl: 5 },
        { name: 'HTML / CSS', lvl: 5 },
        { name: 'TypeScript', lvl: 4 },
      ]},
      backend: { title: 'BACK-END · INFRA', items: [
        { name: 'Node.js · Express', lvl: 3 },
        { name: 'MySQL', lvl: 3 },
        { name: 'Java', lvl: 2 },
        { name: 'PHP · OpenAPI', lvl: 2 },
      ]},
      ai: { title: 'AI · THE NEW WEAPON', items: [
        { name: 'Claude Code', lvl: 5 },
        { name: 'RAG Systems', lvl: 5 },
        { name: 'Agentic Systems', lvl: 5 },
        { name: 'LLM Implementation', lvl: 5 },
        { name: 'Obsidian Knowledge', lvl: 5 },
      ]},
      soft: { title: 'SOFT · THE HUMAN PART', items: [
        { name: 'Mentoring · Training', lvl: 5 },
        { name: 'Team Leadership', lvl: 4 },
        { name: 'Problem Solving', lvl: 5 },
        { name: 'Product Vision', lvl: 4 },
      ]},
    },
  },

  projects: {
    it: {
      tag: '06 · PROGETTI',
      title: ['Cose che ho ', { accent: 'costruito' }, '.'],
      lead: 'Una selezione. Quello che resta sotto NDA non è qui, ma c\'è.',
      items: [
        {
          num: '01',
          title: 'Sistemi agentici per team di sviluppo',
          desc: 'Più progetti di agenti AI che automatizzano il flusso di team numerosi — sviluppo, test, documentazione. Pensati per moltiplicare il throughput senza diluire la qualità.',
          stat: '∞',
          statLabel: 'TICKET RISPARMIATI',
        },
        {
          num: '02',
          title: 'Mentoring · una decina di developer formati',
          desc: 'Almeno dieci risorse cresciute al mio fianco — la maggior parte oggi sviluppatori solidi, alcuni più bravi di me. Il mio risultato preferito.',
          stat: '10+',
          statLabel: 'DEV CRESCIUTI',
        },
        {
          num: '03',
          title: 'L\'app di cui non parlo (ancora)',
          desc: 'Sto costruendo qualcosa di mio. Un\'app che mira ad essere fighissima. Quando sarà pronta, lo saprai.',
          stat: 'WIP',
          statLabel: 'STEALTH MODE',
        },
      ],
    },
    en: {
      tag: '06 · PROJECTS',
      title: ['Things I\'ve ', { accent: 'built' }, '.'],
      lead: 'A selection. What\'s under NDA isn\'t here — but it exists.',
      items: [
        {
          num: '01',
          title: 'Agentic systems for dev teams',
          desc: 'Multiple AI-agent projects automating workflows across large teams — dev, QA, docs. Designed to multiply throughput without diluting quality.',
          stat: '∞',
          statLabel: 'TICKETS SAVED',
        },
        {
          num: '02',
          title: 'Mentored ~10 developers · grown alongside me',
          desc: 'At least ten engineers grew alongside me — most are solid devs today, some better than me. My favorite outcome.',
          stat: '10+',
          statLabel: 'DEVS GROWN',
        },
        {
          num: '03',
          title: 'The app I\'m not talking about (yet)',
          desc: 'I\'m building something of my own. An app meant to be really good. When it\'s ready, you\'ll know.',
          stat: 'WIP',
          statLabel: 'STEALTH MODE',
        },
      ],
    },
  },

  mission: {
    it: {
      tag: '07 · LA MISSIONE',
      title: ['Costruire qualcosa', { br: true }, 'che ', { accent: 'impatti' }, ' davvero.'],
      lead: 'Quello che voglio non è un titolo. È un punto: un giorno guardare indietro e vedere cose che esistono al mondo solo perché le ho fatte succedere io.',
      manifestoTitle: 'IL MANIFESTO',
      manifesto: 'Diventare libero professionista o imprenditore. Oppure manager di un\'azienda figa — di quelle dove la cultura è una cosa che si vede e non si dichiara.',
      pillarsTitle: 'I PUNTI FERMI',
      pillars: [
        'Costruire prodotti che migliorano la vita di chi li usa.',
        'Far crescere persone — la mia leadership preferita.',
        'Studiare l\'IA come una nuova grammatica del mondo.',
        'Non smettere mai di essere un sognatore con un terminale aperto.',
      ],
      cta1: 'PARLIAMONE',
      cta2: 'SCARICA CV',
    },
    en: {
      tag: '07 · MISSION',
      title: ['Build something that', { br: true }, 'actually ', { accent: 'matters' }, '.'],
      lead: 'What I want isn\'t a title. It\'s a place: one day to look back and see things that exist in the world only because I made them happen.',
      manifestoTitle: 'THE MANIFESTO',
      manifesto: 'Become a freelancer or a founder. Or a manager at a great company — the kind where culture is something you can see, not just words on a careers page.',
      pillarsTitle: 'WHAT I STAND ON',
      pillars: [
        'Build products that make their users\' life better.',
        'Grow people — my favorite kind of leadership.',
        'Study AI as a new grammar of the world.',
        'Never stop being a dreamer with an open terminal.',
      ],
      cta1: 'LET\'S TALK',
      cta2: 'DOWNLOAD CV',
    },
  },

  letters: {
    it: {
      tag: '08 · INFLUENZE',
      title: ['Le ', { accent: 'voci' }, ' che mi tengono', { br: true }, 'la rotta.'],
      lead: 'Le persone, i libri, le idee che continuano a guidarmi quando il rumore aumenta.',
      items: [
        {
          q: 'Stay hungry, stay foolish.',
          a: 'Steve Jobs · Stanford, 2005',
        },
        {
          q: 'Quando ero un bambino, ero un sognatore. Adesso ogni mio sogno è diventato realtà.',
          a: 'Elvis Presley',
        },
        {
          q: 'Il modo migliore di prevedere il futuro è inventarlo.',
          a: 'Alan Kay',
        },
        {
          q: 'Non si insegna mai a nessuno. Si crea solo lo spazio perché qualcuno impari.',
          a: 'parafrasi · in stile mentor',
        },
      ],
    },
    en: {
      tag: '08 · INFLUENCES',
      title: ['The ', { accent: 'voices' }, ' that keep', { br: true }, 'my course.'],
      lead: 'The people, books and ideas that keep guiding me when the noise gets loud.',
      items: [
        {
          q: 'Stay hungry, stay foolish.',
          a: 'Steve Jobs · Stanford, 2005',
        },
        {
          q: 'When I was a child, I was a dreamer. Now my dreams have come true.',
          a: 'Elvis Presley',
        },
        {
          q: 'The best way to predict the future is to invent it.',
          a: 'Alan Kay',
        },
        {
          q: 'You never really teach anyone. You just create space for them to learn.',
          a: 'paraphrased · mentor mode',
        },
      ],
    },
  },

  contact: {
    it: {
      tag: '09 · CONTATTI',
      title: ['Apriamo una ', { accent: 'connessione' }, '.'],
      lead: 'Hai un progetto, un\'idea, una proposta? Preferisco contatti da freelance — ma valuto anche assunzioni se la storia è quella giusta. Scrivimi.',
      rows: [
        { label: 'EMAIL', val: 'cesaranofrancescomain@gmail.com', href: 'mailto:cesaranofrancescomain@gmail.com', icon: 'mail' },
        { label: 'TELEFONO', val: '+39 338 7470283', href: 'tel:+393387470283', icon: 'phone' },
        { label: 'LINKEDIN', val: '/in/francescocesarano', href: 'https://www.linkedin.com/in/francescocesarano/', icon: 'linkedin' },
        { label: 'GITHUB', val: '/FrancescoMain', href: 'https://github.com/FrancescoMain', icon: 'github' },
        { label: 'BASE', val: 'Napoli · Italia', href: null, icon: 'pin' },
      ],
      form: {
        name: 'NOME',
        email: 'EMAIL',
        company: 'AZIENDA',
        type: 'TIPO DI CONTATTO',
        types: ['Freelance / Progetto', 'Assunzione', 'Collaborazione', 'Altro'],
        msg: 'IL TUO MESSAGGIO',
        msgPlaceholder: 'Raccontami che stai costruendo...',
        submit: 'INVIA RICHIESTA',
        success: '✓ MESSAGGIO INVIATO. TI RISPONDO PRESTO.',
      },
    },
    en: {
      tag: '09 · CONTACT',
      title: ['Let\'s open a ', { accent: 'connection' }, '.'],
      lead: 'Got a project, an idea, an offer? I prefer freelance work — but I\'ll consider employment for the right story. Reach out.',
      rows: [
        { label: 'EMAIL', val: 'cesaranofrancescomain@gmail.com', href: 'mailto:cesaranofrancescomain@gmail.com', icon: 'mail' },
        { label: 'PHONE', val: '+39 338 7470283', href: 'tel:+393387470283', icon: 'phone' },
        { label: 'LINKEDIN', val: '/in/francescocesarano', href: 'https://www.linkedin.com/in/francescocesarano/', icon: 'linkedin' },
        { label: 'GITHUB', val: '/FrancescoMain', href: 'https://github.com/FrancescoMain', icon: 'github' },
        { label: 'BASED IN', val: 'Naples · Italy', href: null, icon: 'pin' },
      ],
      form: {
        name: 'NAME',
        email: 'EMAIL',
        company: 'COMPANY',
        type: 'CONTACT TYPE',
        types: ['Freelance / Project', 'Hiring', 'Collaboration', 'Other'],
        msg: 'YOUR MESSAGE',
        msgPlaceholder: 'Tell me what you\'re building...',
        submit: 'SEND',
        success: '✓ MESSAGE SENT. I\'LL GET BACK TO YOU SOON.',
      },
    },
  },

  footer: {
    it: { l: '© FRANCESCO CESARANO · 2026', m: 'BUILT WITH REACT · CLAUDE · ☕', r: 'NAPOLI → IL MONDO' },
    en: { l: '© FRANCESCO CESARANO · 2026', m: 'BUILT WITH REACT · CLAUDE · ☕', r: 'NAPLES → THE WORLD' },
  },
};

window.CONTENT = CONTENT;
