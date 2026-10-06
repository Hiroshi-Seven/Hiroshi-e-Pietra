export const USUARIO_TESTE = "garotascavalos";
export const SENHA_TESTE = "1234";

export const IMAGEM_PADRAO =
  "https://images.microcms-assets.io/assets/973fc097984b400db8729642ddff5938/b83df291000248a193ca9e46a73ded56/specialweek_01.png";

export function validarLogin(usuario, senha) {
  return (
    usuario.trim().toLowerCase() === USUARIO_TESTE &&
    senha.trim() === SENHA_TESTE
  );
}

export function formatarNivel(nivel) {
  if (nivel === "facil") return "Fácil";
  if (nivel === "medio") return "Médio";
  if (nivel === "dificil") return "Difícil";
  return nivel;
}

export function calcularPorcentagem(pontos, total) {
  if (!total) return 0;
  return Math.round((pontos / total) * 100);
}

export function mensagemResultado(porcentagem) {
  if (porcentagem === 100) return "Perfeito! Você domina a UmaWiki!";
  if (porcentagem >= 80) return "Ótimo resultado! Você conhece muito bem as personagens.";
  if (porcentagem >= 60) return "Bom trabalho! Continue treinando para acertar mais.";
  return "Você pode melhorar! Dê mais uma olhada na wiki e tente novamente.";
}

export function getQuestoesPorNivel(nivel) {
  const banco = {
    facil: [
      {
        id: "f1",
        pergunta: "Qual personagem sonha em se tornar a melhor Uma Musume do Japão?",
        alternativas: ["Gold Ship", "Special Week", "Vodka", "Air Groove"],
        correta: 1,
      },
      {
        id: "f2",
        pergunta: "Qual personagem é famosa por correr na liderança?",
        alternativas: ["Silence Suzuka", "Nice Nature", "Biwa Hayahide", "Fine Motion"],
        correta: 0,
      },
      {
        id: "f3",
        pergunta: "Quem é a personagem descrita como imprevisível e divertida?",
        alternativas: ["Maruzensky", "Rice Shower", "Gold Ship", "Oguri Cap"],
        correta: 2,
      },
      {
        id: "f4",
        pergunta: "Qual personagem é uma cientista genial e excêntrica?",
        alternativas: ["Agnes Tachyon", "Daiwa Scarlet", "Tokai Teio", "Mejiro McQueen"],
        correta: 0,
      },
      {
        id: "f5",
        pergunta: "Qual personagem é cheia de presença e teatral?",
        alternativas: ["Twin Turbo", "T.M. Opera O", "Taiki Shuttle", "Winning Ticket"],
        correta: 1,
      },
    ],

    medio: [
      {
        id: "m1",
        pergunta: "Qual personagem tem como característica ser muito tímida e achar que traz azar?",
        alternativas: ["Rice Shower", "Sakura Bakushin O", "Manhattan Cafe", "Vodka"],
        correta: 0,
      },
      {
        id: "m2",
        pergunta: "Quem é rival de Vodka e quer sempre ser a número 1?",
        alternativas: ["Taiki Shuttle", "Daiwa Scarlet", "Nice Nature", "Satono Diamond"],
        correta: 1,
      },
      {
        id: "m3",
        pergunta: "Qual personagem é conhecida por ser uma líder nata?",
        alternativas: ["Symboli Rudolf", "Meisho Doto", "Twin Turbo", "Mayano Top Gun"],
        correta: 0,
      },
      {
        id: "m4",
        pergunta: "Qual personagem é especialista em velocidade curta e milha?",
        alternativas: ["Biwa Hayahide", "Kitasan Black", "Sakura Bakushin O", "Air Groove"],
        correta: 2,
      },
      {
        id: "m5",
        pergunta: "Qual personagem é descrita como reservada e misteriosa?",
        alternativas: ["Manhattan Cafe", "Oguri Cap", "Tokai Teio", "El Condor Pasa"],
        correta: 0,
      },
    ],

    dificil: [
      {
        id: "d1",
        pergunta: "Qual personagem tem 171 cm de altura?",
        alternativas: ["Biwa Hayahide", "Vodka", "Taiki Shuttle", "T.M. Opera O"],
        correta: 0,
      },
      {
        id: "d2",
        pergunta: "Qual personagem tem distância principal Curta / Milha?",
        alternativas: ["Daiwa Scarlet", "Sakura Bakushin O", "Mejiro McQueen", "Rice Shower"],
        correta: 1,
      },
      {
        id: "d3",
        pergunta: "Quem é conhecida como uma das personagens mais populares da franquia?",
        alternativas: ["Kitasan Black", "Narita Taishin", "Fine Motion", "Hishi Amazon"],
        correta: 0,
      },
      {
        id: "d4",
        pergunta: "Qual personagem tem a posição 'Variada'?",
        alternativas: ["Twin Turbo", "Maruzensky", "Mayano Top Gun", "Grass Wonder"],
        correta: 2,
      },
      {
        id: "d5",
        pergunta: "Qual personagem é muito gentil, insegura e bastante querida?",
        alternativas: ["Meisho Doto", "Air Groove", "Vodka", "Gold Ship"],
        correta: 0,
      },
    ],
  };

  return banco[nivel] || banco.facil;
}

export async function buscarImagemPorSlug(slug) {
  const pagina = `https://umamusume.jp/character/${slug}`;

  const urls = [
    `https://api.allorigins.win/raw?url=${encodeURIComponent(pagina)}`,
    `https://r.jina.ai/http://umamusume.jp/character/${slug}`,
  ];

  for (const url of urls) {
    try {
      const resposta = await fetch(url);
      const texto = await resposta.text();

      const html = texto
        .replace(/\\\//g, "/")
        .replace(/&quot;/g, '"')
        .replace(/&#x2F;/g, "/");

      const regexEspecifica = new RegExp(
        `https://images\\.microcms-assets\\.io/assets/[^"'\\s<>]+/${slug}_01\\.png`,
        "i"
      );

      const matchEspecifico = html.match(regexEspecifica);
      if (matchEspecifico) {
        return matchEspecifico[0];
      }

      const matchGenerico = html.match(
        /https:\/\/images\.microcms-assets\.io\/assets\/[^"'\s<>]+?\.png/i
      );

      if (matchGenerico) {
        return matchGenerico[0];
      }
    } catch (error) {
      // tenta a próxima URL
    }
  }

  return IMAGEM_PADRAO;
}