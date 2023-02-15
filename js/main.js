//-------------------Função para inserir botão de volta ao Topo---------------------
//Seletor do botão
let btn = document.getElementById("btnTopo");

/* Quando o usuário rola 20px para baixo na parte superior do documento
chama a função para mostrar o botão */
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

/* Quando o usuário clicar no botão chama a função para voltar ao topo da página */
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
//----------------------------------------------------------------------------------


//--------------------Inserir máscara no campo telefone-----------------------------
// Seletor do campo de telefone
const tel = document.getElementById("telefone");

// Dispara quando digitado no campo
tel.addEventListener("keypress", (e) => mascaraTelefone(e.target.value));

// Dispara quando autocompletado o campo
tel.addEventListener("change", (e) => mascaraTelefone(e.target.value));

const mascaraTelefone = (valor) => {
  valor = valor.replace(/\D/g, "");
  valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
  valor = valor.replace(/(\d)(\d{4})$/, "$1-$2");
  tel.value = valor; // Insere o(s) valor(es) no campo
};
//----------------------------------------------------------------------------------