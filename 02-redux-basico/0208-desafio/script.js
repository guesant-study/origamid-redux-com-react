// Usando o Redux (pode usar Immer ou Não).
// Crie uma store contendo os estados iniciais abaixo
// Crie as seguintes ações:
// ========
// aluno/INCREMENTAR_TEMPO, adiciona 1 dia de acesso
// aluno/REDUZIR_TEMPO, reduz 1 dia de acesso
// aluno/MODIFICAR_EMAIL(email), modifica o email do usuário
// ========
// aulas/COMPLETAR_AULA(id), completa a aula com base no ID passado
// aulas/COMPLETAR_CURSO, completa todas as aulas
// aulas/RESETAR_CURSO, reseta todas as aulas completas
// ========
// Crie constantes e action creators para as ações.
// Crie um reducer para aluno e um para aulas.
// Renderize na tela o nome, email, tempo restante e o total de aulas completas
// Configure a DevTools

import {
  incrementarTempo,
  reduzirTempo,
  modificarEmail,
} from "./store/aluno.js";
import { completarAula, completarCurso, resetarCurso } from "./store/aulas.js";
import store from "./store/configureStore.js";

function render() {
  const nome = document.querySelector("#nome");
  const email = document.querySelector("#email");
  const temporestante = document.querySelector("#temporestante");
  const totalaulas = document.querySelector("#totalaulas");

  const { aluno, aulas } = store.getState();

  nome.innerText = aluno.nome;
  email.innerText = aluno.email;
  temporestante.innerText = aluno.diasRestantes;
  totalaulas.innerText = aulas.filter((aula) => aula.completa).length;
}

render();

store.subscribe(render);

window.store = store;

store.dispatch(incrementarTempo());
store.dispatch(reduzirTempo());
store.dispatch(modificarEmail("suporte@origamid.com"));
store.dispatch(completarAula(2));
store.dispatch(completarAula(3));
store.dispatch(completarAula(4));
store.dispatch(resetarCurso());
store.dispatch(completarCurso());
