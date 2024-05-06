function comprar(){
    let quantidade = document.getElementById("qtd").value;
    let tipoingresso = document.getElementById("tipo-ingresso").value;
    let inferiorElemento = document.getElementById("qtd-inferior");
    let inferior = parseFloat(inferiorElemento.textContent);
    let superiorElemento = document.getElementById("qtd-superior");
    let superior = parseFloat(superiorElemento.textContent);
    let pistaElemento = document.getElementById("qtd-pista");
    let pista = parseFloat(pistaElemento.textContent);
    

    if(quantidade > 0){
        if(tipoingresso == "inferior"){
            if(inferior <= 0){
                alert('quantidade em falta')
            } else{ 
                if(quantidade > inferior){
                    alert("quantidade insuficiente")
            }else{
                inferior = inferior - quantidade;
            inferiorElemento.innerHTML = `<span><span id="qtd-inferior">${inferior}</span><span>`
            }
            }
        }else{
            if(tipoingresso == "superior"){
                if(superior <= 0){
                    alert('quantidade em falta')
                } else{ 
                    if(quantidade > superior){
                        alert("quantidade insuficiente")
                }else{
                    superior = superior - quantidade;
                superiorElemento.innerHTML = `<span><span id="qtd-superior">${superior}</span><span>`
        }
    }
    } else{
        if(pista <= 0){
            alert('quantidade em falta')
        } else{ 
            if(quantidade > pista){
                alert("quantidade insuficiente")
        }else{
            pista = pista - quantidade;
        pistaElemento.innerHTML = `<span><span id="qtd-pista">${pista}<span></li>`
    } 
}
}
}
} else {
    alert("quantidade invalida");
}
}

