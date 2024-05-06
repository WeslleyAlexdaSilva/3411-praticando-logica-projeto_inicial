let totalGeral = 0

let elementos = document.getElementsByClassName('carrinho__titulo');
for (let i = 0; i < elementos.length; i++) {
    elementos[i].textContent = "carrinho de compras";
    }

function adicionar(){
    let produto = document.getElementById('produto').value;
    let nomeDoProduto = produto.split('-')[0];
    let valor = produto.split('R$')[1];
    let quantidade = document.getElementById("quantidade").value;
    let carrinho = document.getElementById("lista-produtos");
    let preço = valor * quantidade 
    

    if(quantidade > 0 ){ 
       totalGeral = totalGeral + preço
       let valorfinal = document.getElementById("valor-total");
       valorfinal.textContent = 'R$' + totalGeral 


        carrinho.innerHTML = carrinho. innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeDoProduto} <span class="texto-azul">${"R$" + preço}</span>
      </section>`
    } else{
        alert("tente novamente")
    }

} 


function limpar(){
    let carrinho = document.getElementById("lista-produtos");
    let valorfinal = document.getElementById("valor-total");

    valorfinal.innerHTML = `<p class="carrinho__total">
    <span class="texto-azul" id="valor-total"></span>
  </p>`
    carrinho.innerHTML = `<section class="carrinho__produtos__produto">
    <span class="texto-azul"> </span>  <span class="texto-azul"> </span>
  </section>`
}

/*let n1 = prompt("digite um numero");
let n2 = prompt("digite outro numero");

n1 = parseFloat(n1);
n2 = parseFloat(n2);

function soma(n1, n2){

  return n1 + n2
}

let soma1;

soma1 = soma(n1, n2)

console.log(`O resultado foi de ${soma1}`)*/


/*let frase = "ontem fui ao mercado, pois, estava com faltas de alimento em casa, devido a greve";

let fraseMenor = frase.split(",");
console.log(fraseMenor[3])*/

/*let numero10 = "1 , 3 , 4 , 5 , 6 , 7 , 8 , 9";

let numero11 = numero10.split(",");

console.log(numero11);*/