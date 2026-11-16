const cache = new Map();
let ultimaConsulta = 0;
const INTERVALO_MINIMO = 2000;
export async function consultarEndereco(uf, cidade, rua) {
const estado = uf.trim().toUpperCase();
const municipio = cidade.trim();
const logradouro = rua.trim();
if (!estado || !municipio || !logradouro) {
throw new Error('Preencha todos os campos.');
}
if (estado.length !== 2) {
throw new Error('Digite uma UF válida. Exemplo: SP.');
}
const chave = `${estado}-${municipio}-${logradouro}`.toLowerCase();
// Verifica se já existe resultado armazenado
if (cache.has(chave)) {
return cache.get(chave);
}
// Evita solicitações muito próximas
const agora = Date.now();
const diferenca = agora - ultimaConsulta;
if (diferenca < INTERVALO_MINIMO) {throw new Error(
'Aguarde um instante antes de realizar outra consulta.'
);
}
ultimaConsulta = agora;
const url =
`https://viacep.com.br/ws/${encodeURIComponent(estado)}/${encodeURICompon,
ent(municipio)}/${encodeURIComponent(logradouro)}/json/`;
try {
const resposta = await fetch(url);
if (!resposta.ok) {
throw new Error('Não foi possível acessar a API.');
}
const dados = await resposta.json();
if (!Array.isArray(dados)) {
throw new Error('Resposta inválida da API.');
}
const resultados = dados.filter(item => !item.erro);
cache.set(chave, resultados);
return resultados;
} catch (erro) {
throw new Error(
erro.message || 'Erro ao consultar o endereço.'
);
}
}