let contagem = 1

function alterarStatus(id){
    let botao = document.getElementById(`game-${id}`);
    let game = botao.querySelector('.dashboard__item__button')
    let imagem = botao.querySelector('.dashboard__item__img')
    let segurança = prompt("confirmação")
    
    if(segurança == "sim"){ 
    if(imagem.classList.contains("dashboard__item__img--rented")){
        
        imagem.classList.remove("dashboard__item__img--rented");
        game.textContent = "Alugar"
        contagem--;
    } else{
        imagem.classList.add("dashboard__item__img--rented");
        game.textContent = "Devolver"
        contagem++;
    } 


} else{
    alert("Ok")
    imagem.classList.remove("dashboard__item__img--rented");
        game.textContent = "Alugar"
}

if(segurança == "sim"){ 
    if(game.classList.contains("dashboard__item__button--return")){
        game.classList.remove("dashboard__item__button--return");
    } else{
        game.classList.add("dashboard__item__button--return");
    }

    } else{
    }

    console.log(contagem + " jogos alugados");

} 