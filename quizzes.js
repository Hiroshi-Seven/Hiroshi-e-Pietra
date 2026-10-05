export const quizLevels = [
  {
    id: "easy",
    label: "Fácil",
    emoji: "🌱",
    description: "Informações principais da Wiki.",
    color: "#51B86B"
  },
  {
    id: "medium",
    label: "Médio",
    emoji: "🏇",
    description: "Detalhes de personagens e corrida.",
    color: "#F3B942"
  },
  {
    id: "hard",
    label: "Difícil",
    emoji: "👑",
    description: "Detalhes específicos para quem estudou a Wiki.",
    color: "#B04A9F"
  }
];

export const quizzes = {
  easy: [
    {
      id: "e1",
      question: "Qual Uma Musume é conhecida por assumir a liderança logo no início?",
      options: ["Gold Ship", "Silence Suzuka", "Oguri Cap", "Special Week"],
      answer: 1
    },
    {
      id: "e2",
      question: "Qual é a altura de Tokai Teio?",
      options: ["150 cm", "158 cm", "161 cm", "170 cm"],
      answer: 0
    },
    {
      id: "e3",
      question: "Qual personagem é especialmente associada a corridas de longa distância?",
      options: ["Mejiro McQueen", "Silence Suzuka", "Tokai Teio", "Oguri Cap"],
      answer: 0
    },
    {
      id: "e4",
      question: "Qual personagem faz aniversário em 2 de maio?",
      options: ["Gold Ship", "Special Week", "Oguri Cap", "Tokai Teio"],
      answer: 1
    },
    {
      id: "e5",
      question: "Quem é conhecida pelo comportamento imprevisível e brincalhão?",
      options: ["Mejiro McQueen", "Special Week", "Gold Ship", "Silence Suzuka"],
      answer: 2
    }
  ],
  medium: [
    {
      id: "m1",
      question: "Qual é a altura de Gold Ship?",
      options: ["159 cm", "161 cm", "167 cm", "170 cm"],
      answer: 3
    },
    {
      id: "m2",
      question: "Quem foi transferida de uma escola regional depois de muitas vitórias?",
      options: ["Oguri Cap", "Tokai Teio", "Special Week", "Gold Ship"],
      answer: 0
    },
    {
      id: "m3",
      question: "Qual faixa de distância foi usada na Wiki para Silence Suzuka?",
      options: ["1,0–1,4 km", "1,6–2,0 km", "2,5–3,2 km", "3,2–4,0 km"],
      answer: 1
    },
    {
      id: "m4",
      question: "Quem admira Symboli Rudolf?",
      options: ["Gold Ship", "Oguri Cap", "Tokai Teio", "Mejiro McQueen"],
      answer: 2
    },
    {
      id: "m5",
      question: "Qual personagem tem 159 cm?",
      options: ["Special Week", "Mejiro McQueen", "Silence Suzuka", "Tokai Teio"],
      answer: 1
    }
  ],
  hard: [
    {
      id: "h1",
      question: "Qual dubladora (CV) está associada a Gold Ship?",
      options: ["Machico", "Azumi Waki", "Hitomi Ueda", "Saori Onishi"],
      answer: 2
    },
    {
      id: "h2",
      question: "Qual é a data de aniversário de Oguri Cap?",
      options: ["6 de março", "27 de março", "3 de abril", "20 de abril"],
      answer: 1
    },
    {
      id: "h3",
      question: "Qual personagem tem o peso descrito como impossível de medir?",
      options: ["Gold Ship", "Special Week", "Oguri Cap", "Silence Suzuka"],
      answer: 0
    },
    {
      id: "h4",
      question: "Qual personagem mede 161 cm?",
      options: ["Tokai Teio", "Special Week", "Silence Suzuka", "Mejiro McQueen"],
      answer: 2
    },
    {
      id: "h5",
      question: "Qual personagem nasceu em Hokkaido segundo sua descrição oficial?",
      options: ["Special Week", "Gold Ship", "Mejiro McQueen", "Oguri Cap"],
      answer: 0
    }
  ]
};
