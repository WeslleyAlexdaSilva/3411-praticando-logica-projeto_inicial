function sortear() {
    let quantidade = document.getElementById('quantidade').value;
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    if(de > ate){
        alert("isso nao funciona pois o (do numero) tem que ser menor que o (Ate o numero)");
        document.getElementById('de').value = " ";
        document.getElementById('ate').value = " ";
    } else{
        if(quantidade > ate - de + 1){
            alert("numeros insuficientes para rodar o jogo")
            document.getElementById('quantidade').value = " ";
        } else{
            let sorteados = [];
            let numeros;
            for(let i = 0; i < quantidade; i++){
                 numeros = gerarNumeroAleatorio(de, ate);
         
                 while(sorteados.includes(numeros)){
                     numeros = gerarNumeroAleatorio(de, ate);
                 }
         
         
                 sorteados.push(numeros);
            }
                 let resultado = document.getElementById("resultado");
                 resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`
                 alterandoStatusDoBotao()
             }
        }
    
        }
       
   





function gerarNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
 
gerarNumeroAleatorio();

function alterandoStatusDoBotao(){
    let botao = document.getElementById("btn-reiniciar")
    if(botao.classList.contains("container__botao-desabilitado")){
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
    } else{
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }
}


function reiniciar(){

    document.getElementById('quantidade').value = " ";
    document.getElementById('de').value = " ";
    document.getElementById('ate').value = " ";
        




    let resultado2 = document.getElementById("resultado");
        resultado2.innerHTML = `<label class="texto__paragrafo">Números sorteados:  Nenhum numero sorteado</label>`
        alterandoStatusDoBotao()

}



