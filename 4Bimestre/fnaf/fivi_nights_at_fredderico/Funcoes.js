export const USUARIO_TESTE = "garotascavalos";
export const SENHA_TESTE = "1234";

export function validarLogin(usuario, senha) {
  return (
    usuario.trim().toLowerCase() === USUARIO_TESTE &&
    senha.trim() === SENHA_TESTE
  );
}