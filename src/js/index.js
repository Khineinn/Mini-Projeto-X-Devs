// OBJETIVO 1 - quando clicamos na seta de avançar temos que mostrar o proximo cartao da lista
//   - passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
//   - passo 2 - dar um jeito de identificar o clique Do usuário na seta avançar
//   - passo 3 - fazer aparecer no proximo cartão da lista
//   - passo 4 - Buscar o cartão que esta selecionado e esconder

//   OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostar o cartão anterior da lista
//   - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
//   - passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
//   - passo 3 - fazer aparecer o cartãp anterior da lista
//   - passo 4 - buscar o cartão que esta selecionado e esconder

// OBJETIVO 1 - quando clicamos na seta de avançar temos que mostrar o proximo cartao da lista
//   - passo 1 - dar um jeito de pegar o elemento HTML da seta avançar
const btnAvancar = document.getElementById("btn-avancar");
const BtnVoltar = document.getElementById("btn-voltar");
let CartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");

//   - passo 2 - dar um jeito de identificar o clique Do usuário na seta avançar
btnAvancar.addEventListener("click", function () {
  const ehUltimoCartao = CartaoAtual === cartoes.length - 1 
  if (ehUltimoCartao) return;

  esconderCartaoSelecionado();

  //   - passo 3 - fazer aparecer no proximo cartão da lista, colocando a classe selecionado nele

  CartaoAtual++;
  MostrarCartao();
});

BtnVoltar.addEventListener("click", function () {
  const ehPrimeiroCartao = CartaoAtual === 0 
  if (ehPrimeiroCartao) return;

  esconderCartaoSelecionado();

  CartaoAtual--;
  MostrarCartao();
});
function MostrarCartao() {
  cartoes[CartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}
