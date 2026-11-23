
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },

  conteudo: {
    flexGrow: 1,
    paddingBottom: 30,
  },

  header: {
    backgroundColor: '#172554',
    paddingTop: 55,
    paddingBottom: 35,
    paddingHorizontal: 25,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
  },

  logo: {
    fontSize: 48,
    color: '#FACC15',
    marginBottom: 8,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },

  subtitulo: {
    fontSize: 14,
    color: '#CBD5E1',
    textAlign: 'center',
    marginTop: 10,
    lineHeight: 21,
  },

  painel: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: 25,
    padding: 20,
    borderRadius: 18,
    elevation: 3,
    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  label: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#334155',
    marginBottom: 10,
  },

  input: {
    backgroundColor: '#F8FAFC',
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 12,
    height: 52,
    paddingHorizontal: 15,
    fontSize: 15,
    color: '#0F172A',
  },

  botao: {
    backgroundColor: '#DC2626',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 16,
  },

  botaoDesabilitado: {
    backgroundColor: '#FCA5A5',
  },

  textoBotao: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  botaoLimpar: {
    alignItems: 'center',
    paddingVertical: 13,
    marginTop: 6,
  },

  textoBotaoLimpar: {
    color: '#64748B',
    fontSize: 14,
    fontWeight: '600',
  },

  caixaErro: {
    backgroundColor: '#FEE2E2',
    borderWidth: 1,
    borderColor: '#FECACA',
    marginHorizontal: 20,
    marginTop: 20,
    padding: 16,
    borderRadius: 12,
  },

  textoErro: {
    color: '#B91C1C',
    fontSize: 14,
    textAlign: 'center',
  },

  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: 22,
    padding: 20,
    borderRadius: 20,
    elevation: 3,
    shadowColor: '#000000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  cardTopo: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
    paddingBottom: 20,
  },

  numero: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#64748B',
    marginBottom: 6,
  },

  nomePokemon: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#172554',
    textAlign: 'center',
  },

  imagem: {
    width: 220,
    height: 220,
    marginVertical: 12,
  },

  semImagem: {
    color: '#64748B',
    fontSize: 14,
    marginVertical: 30,
  },

  tiposContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },

  tipo: {
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
  },

  tipoTexto: {
    color: '#1D4ED8',
    fontSize: 14,
    fontWeight: 'bold',
  },

  secaoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#172554',
    marginTop: 22,
    marginBottom: 12,
  },

  linha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },

  infoLabel: {
    fontSize: 15,
    color: '#64748B',
  },

  infoValor: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#0F172A',
  },

  habilidade: {
    fontSize: 15,
    color: '#334155',
    paddingVertical: 5,
  },

  atributoLinha: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },

  atributoNome: {
    fontSize: 14,
    color: '#475569',
    flex: 1,
  },

  atributoValor: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#DC2626',
  },

  inicial: {
    marginHorizontal: 20,
    marginTop: 25,
    padding: 28,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
  },

  inicialIcone: {
    fontSize: 45,
    marginBottom: 12,
  },

  inicialTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#172554',
    textAlign: 'center',
  },

  inicialTexto: {
    fontSize: 14,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 22,
    marginTop: 10,
  },

  rodape: {
    fontSize: 12,
    color: '#94A3B8',
    textAlign: 'center',
    marginTop: 30,
    marginHorizontal: 20,
  },
});
