function limitarDigitos(input) {
    if (input.value.length > 3) {
        input.value = input.value.slice(0, 3);
    }
}

const elementoAlerta = document.querySelector('div#alert')
const nums = document.querySelector('div#nums')
const res = document.querySelector('p#res')
const limp = document.querySelector('div#limp')
let arr = []


function add() {
    const numero = document.querySelector('input#numero').value.trim()
    const test = arr.indexOf(Number(numero))
    if (isNaN(Number(numero)) || numero === '') {
        elementoAlerta.innerHTML = `<br>
        Por Favor, coloque um número valido antes de clicar em: Adicionar <br><br> <input type="button" value="OK" class="botao" onclick="fecharAlerta()"><br><br>`
    } else if (Number(numero) < 1 || Number(numero) > 100) {
        elementoAlerta.innerHTML = `<br>
        O número não é valido! Por Favor adicione somente números entre 1 e 100 <br><br> <input type="button" value="OK" class="botao" onclick="fecharAlerta()"><br><br>`
    } else {
        elementoAlerta.innerHTML = ``
        if (test == -1) {
            res.innerHTML = ``
            arr.push(Number(numero))
            nums.innerHTML += `Número ${Number(numero)} adicionado.<br>`
            limp.innerHTML = `<input type="button" value="Limpar" onclick="limpar()" class="botao" id="fixNb">`
        } else {
            elementoAlerta.innerHTML = `<br>
            O número ${Number(numero)} já foi adicionado! <br><br> <input type="button" value="OK" class="botao" onclick="fecharAlerta()"><br><br>`
        }
    }
}

function limpar() {
    arr = []
    nums.innerHTML = `Números:<br>`
    limp.innerHTML = ``
}

function fecharAlerta() {
    elementoAlerta.innerHTML = ``
}

function finalizar() {
    if (arr.length == 0) {
        elementoAlerta.innerHTML = `<br>
        Por Favor, Adicione um ou mais números! <br><br> <input type="button" value="OK" class="botao" onclick="fecharAlerta()"><br><br>`
    } else {
        elementoAlerta.innerHTML = ``
        function ordenarArr(a, b) {
            return a - b;
        }
        arr.sort(ordenarArr)
        const tamanho = arr.length
        const maiorNum = tamanho - 1
        let soma = 0
        for (let c = maiorNum; c >= 0; c--) {
            soma += arr[c]
        }
        const media = soma / arr.length
        if (arr.length == 1) {
            res.innerHTML = `<br>Ao todo, temos ${arr.length} número cadastrados.`
            res.innerHTML += `<br><br>O maior valor informado foi ${arr[maiorNum]}.`
            res.innerHTML += `<br><br>O Menor valor informado foi ${arr[0]}`
            res.innerHTML += `<br><br>Somando todos os valores, temos ${soma}`
            res.innerHTML += `<br><br>A média dos valores, digitados é ${media.toFixed(0)}<br><br>`
        } else {
            res.innerHTML = `<br>Ao todo, temos ${arr.length} números cadastrados.`
            res.innerHTML += `<br><br>O maior valor informado foi ${arr[maiorNum]}.`
            res.innerHTML += `<br><br>O Menor valor informado foi ${arr[0]}`
            res.innerHTML += `<br><br>Somando todos os valores, temos ${soma}`
            res.innerHTML += `<br><br>A média dos valores, digitados é ${media.toFixed(1)}<br><br>`
        }
    }
}