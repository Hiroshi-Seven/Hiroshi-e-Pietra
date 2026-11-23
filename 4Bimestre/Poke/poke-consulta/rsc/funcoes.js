
const URL_API = 'https://pokeapi.co/api/v2/pokemon/';

const cache = new Map();

function formatarNome(nome) {
  return nome
    .split('-')
    .map((parte) =>
      parte.charAt(0).toUpperCase() + parte.slice(1)
    )
    .join(' ');
}

function traduzirTipo(tipo) {
  const tipos = {
    normal: 'Normal',
    fire: 'Fogo',
    water: 'Água',
    electric: 'Elétrico',
    grass: 'Planta',
    ice: 'Gelo',
    fighting: 'Lutador',
    poison: 'Venenoso',
    ground: 'Terra',
    flying: 'Voador',
    psychic: 'Psíquico',
    bug: 'Inseto',
    rock: 'Pedra',
    ghost: 'Fantasma',
    dragon: 'Dragão',
    dark: 'Sombrio',
    steel: 'Aço',
    fairy: 'Fada',
  };

  return tipos[tipo] || formatarNome(tipo);
}

function traduzirAtributo(nome) {
  const atributos = {
    hp: 'HP',
    attack: 'Ataque',
    defense: 'Defesa',
    'special-attack': 'Ataque Especial',
    'special-defense': 'Defesa Especial',
    speed: 'Velocidade',
  };

  return atributos[nome] || formatarNome(nome);
}

export async function consultarPokemon(pesquisa) {
  const termo = pesquisa.trim().toLowerCase();

  if (!termo) {
    throw new Error(
      'Digite o nome ou número de um Pokémon.'
    );
  }

  if (!/^[a-z0-9-]+$/.test(termo)) {
    throw new Error(
      'Utilize um nome em inglês ou um número válido.'
    );
  }

  if (cache.has(termo)) {
    return cache.get(termo);
  }

  try {
    const resposta = await fetch(
      URL_API + encodeURIComponent(termo)
    );

    if (resposta.status === 404) {
      throw new Error(
        'Pokémon não encontrado. Verifique o nome ou número.'
      );
    }

    if (!resposta.ok) {
      throw new Error(
        'Não foi possível consultar a API. Tente novamente.'
      );
    }

    const dados = await resposta.json();

    const pokemon = {
      id: dados.id,

      nome: formatarNome(dados.name),

      imagem:
        dados.sprites?.other?.['official-artwork']
          ?.front_default ||
        dados.sprites?.front_default ||
        null,

      altura: (dados.height / 10).toFixed(1),

      peso: (dados.weight / 10).toFixed(1),

      tipos: dados.types.map((item) =>
        traduzirTipo(item.type.name)
      ),

      habilidades: dados.abilities.map((item) =>
        formatarNome(item.ability.name)
      ),

      atributos: dados.stats.map((item) => ({
        nome: traduzirAtributo(item.stat.name),
        valor: item.base_stat,
      })),
    };

    cache.set(termo, pokemon);

    return pokemon;
  } catch (erro) {
    if (erro instanceof TypeError) {
      throw new Error(
        'Erro de conexão. Verifique sua internet.'
      );
    }

    throw erro;
  }
}
