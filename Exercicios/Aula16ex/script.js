function limitarDigitos(input) {
    if (input.value.length > 3) {
        input.value = input.value.slice(0, 3);
    }
}

const elementoAlerta = document.querySelector('div#alert')
const nums = document.querySelector('select#nums')
const res = document.querySelector('p#res')
let arr = []

function add() {
    const numero = document.querySelector('input#numero').value.trim()
    const test = arr.indexOf(Number(numero))
    if (numero === '') {
        elementoAlerta.innerHTML = `<br>
        Por Favor, adicione um valor antes de clicar em: Adicionar <br><br> <input type="button" value="OK" class="botao" onclick="fecharAlerta()"><br><br>`
    } else if (Number(numero) < 1 || Number(numero) > 100) {
        elementoAlerta.innerHTML = `<br>
        O numero não é valido! Por Favor adicione somente numeros entre 1 e 100 <br><br> <input type="button" value="OK" class="botao" onclick="fecharAlerta()"><br><br>`
    } else {
        res.innerHTML = ``
        elementoAlerta.innerHTML = ``
        if (test == -1) {
            arr.push(Number(numero))
            const item = document.createElement('option')
            item.text = `Valor ${Number(numero)} adicionado.`
            nums.appendChild(item)
        } else {
            elementoAlerta.innerHTML = `<br>
            O numero ${Number(numero)} já foi adicionado! <br><br> <input type="button" value="OK" class="botao" onclick="fecharAlerta()"><br><br>`
        }
    }
}

function fecharAlerta() {
    elementoAlerta.innerHTML = ``
}

function finalizar() {
    if (arr.length == 0) {
        elementoAlerta.innerHTML = `<br>
        Por Favor, Adicione um ou mais numeros! <br><br> <input type="button" value="OK" class="botao" onclick="fecharAlerta()"><br><br>`
    } else {
        elementoAlerta.innerHTML = ``
        function compareNumbers(a, b) {
            return a - b;
        }
        arr.sort(compareNumbers)
        const tamanho = arr.length
        const maiorNum = tamanho - 1
        let soma = 0
        for (let c = maiorNum; c >= 0; c--) {
            soma += arr[c]
        }
        const media = soma / arr.length
        res.innerHTML = `<br>Ao todo, temos ${arr.length} números cadastrados.`
        res.innerHTML += `<br><br>O maior valor informado foi ${arr[maiorNum]}.`
        res.innerHTML += `<br><br>O Menor valor informado foi ${arr[0]}`
        res.innerHTML += `<br><br>Somando todos os valores, temos ${soma}`
        res.innerHTML += `<br><br>A média dos valores, digitados é ${media.toFixed(0)}<br><br>`
    }
}