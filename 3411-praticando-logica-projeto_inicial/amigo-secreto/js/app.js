let amigos = [];

function capitalizarPrimeiraLetra(palavra) {
    return palavra.charAt(0).toUpperCase() + palavra.slice(1);
}

function adicionar() {
    verificar()
    let amigo = document.getElementById("nome-amigo");
    let listaElemento = document.getElementById("lista-amigos");

    if (amigo.value == "") {
        alert("Escreva um nome.");
    } else {
        let nomeCapitalizado = capitalizarPrimeiraLetra(amigo.value);
        
        if (amigos.includes(nomeCapitalizado)) {
            alert("Nome já existente.");
        } else {
            amigos.push(nomeCapitalizado);
            if (listaElemento.textContent == '') {
                listaElemento.textContent = nomeCapitalizado;
            } else {
                listaElemento.textContent = listaElemento.textContent + ", " + nomeCapitalizado;
            }
            amigo.value = "";
        }
    }
}

function sortear() {
    if (amigos.length >= 4) {
        embaralhar(amigos);
        let ssorteados = document.getElementById("lista-sorteio");
        for (let i = 0; i < amigos.length; i++) {
            if (i == amigos.length - 1) {
                ssorteados.innerHTML = ssorteados.innerHTML + amigos[i] + " ---> " + amigos[0] + `<br>`;
            } else {
                ssorteados.innerHTML = ssorteados.innerHTML + amigos[i] + " ---> " + amigos[i + 1] + `<br>`;
            }
        }
    } else {
        alert("Coloque no mínimo 4 nomes.");
    }
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    let amigo = document.getElementById("nome-amigo");
    let listaElemento = document.getElementById("lista-amigos");
    let sorteadosElemento = document.getElementById("lista-sorteio");
    sorteadosElemento.textContent = "";
    listaElemento.textContent = "";
    amigo.value = "";
    amigos = [];
}


