let nums = document.querySelector('select#nums')
let res = document.querySelector('p#res')
let arr = []

function add() {
    let numero = Number(document.querySelector('input#numero').value)
    let test = arr.indexOf(numero)

    if (numero < 1 || numero > 100) {
        window.alert(`O numero não é valido!`)
    } else {
        res.innerHTML = ``
        if (test == -1) {
            arr.push(numero)
            let item = document.createElement('option')
            item.text = `Valor ${numero} adicionado.`
            nums.appendChild(item)
        } else {
            window.alert(`O numero já foi adicionado!`)
        }
    }
}

function finalizar() {
    if (arr.length == 0) {
        window.aler('Por Favor, adicione um ou mais numeros!')
    } else {
        function compareNumbers(a, b) {
            return a - b;
        }

        arr.sort(compareNumbers)

        let tamanho = arr.length
        let maiorNum = tamanho - 1

        let soma = 0

        for (let c = maiorNum; c >= 0; c--) {
            soma += arr[c]
        }

        res.innerHTML = `Ao todo, temos ${arr.length} números cadastrados.`
        res.innerHTML += `<br><br>O maior valor informado foi ${arr[maiorNum]}.`
        res.innerHTML += `<br><br>O Menor valor informado foi ${arr[0]}`
        res.innerHTML += `<br><br>Somando todos os valores, temos ${soma}`
        res.innerHTML += `<br><br>A média dos valores, digitados é ${soma / arr.length}`
    }
}
