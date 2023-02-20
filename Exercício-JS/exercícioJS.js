let nomeProduto = "Kit de ferramentas";
let precoProduto = 101.50;
let cupomInformado = "desconto";
let cupomValido;

/* Variável para representar cupons cadastrados no banco de dados */
let cuponsCadastrados = ["primeira-compra", "desconto"];


// Verifica se o cupom informado está cadastrado no sistema.
if (cuponsCadastrados.includes(cupomInformado)) {
    cupomValido = true;
} else {
    cupomValido = false;
}

// Array quantidade de produtos por cliente
let qtdProdutoCliente = [10, 2, 1, 30, 5];
// Array vazio com tamanho definido conforme o tamanho do anterior 
let totalPagarCliente = Array(qtdProdutoCliente.length);
// Variavel que vai armazenar o total de lucro
let lucro = 0;

/*  Laço para percorrer o array com a quantidade de 
    produtos e multiplicar pelo valor do produto
    ao mesmo tempo vai acumular o valor do lucro 
*/
for (let i = 0; i < qtdProdutoCliente.length; i++) {
    /*
        Verifica se o cupom é valido e se o valor total do pedido é maior que 1000
        Se verdadeiro aplica R$ 50.0 de desconto no valor total do pedido
        Acumula o luco considerando o desconto dado
    */
    if (cupomValido == true && ((qtdProdutoCliente[i] * precoProduto) > 1000)) {
        totalPagarCliente[i] = ((qtdProdutoCliente[i] * precoProduto) - 50.0);
        console.log(`O cliente ${i + 1} ganhou R$ 50.0 de desconto e deverá pagar: R$ ${totalPagarCliente[i]}`)
        lucro += totalPagarCliente[i];
    } else {
        totalPagarCliente[i] = (qtdProdutoCliente[i] * precoProduto);
        console.log(`O cliente ${i + 1} deverá pagar: R$ ${totalPagarCliente[i]}`)
        lucro += totalPagarCliente[i];

    }
}
console.log(`O total de lucro é de R$ ${lucro}`)