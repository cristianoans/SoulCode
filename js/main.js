
/*Recupera o botão da página html */
let btn = document.getElementById("myBtn");


/* Quando o usuário rola 20px para baixo na parte superior do documento
chama a função para mostrar o botão */
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

/* Quando o usuário clicar no botão chama a função para voltar ao topo da página */
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}