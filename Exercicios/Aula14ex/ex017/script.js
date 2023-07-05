function contando() {
    let numero = document.querySelector('input#numero').value
    let tabuada = document.querySelector('select#tabuada')
    if (isNaN(numero) || Number(numero.length) <= 0) {
        window.alert('insira um numero!')
    } else {
        let num = Number(numero)
        tabuada.innerHTML = ''
        for (let cont = 1;cont <= 10;cont++) {
            let item = document.createElement('option')
            item.text = `${num} x ${cont} = ${num*cont}`
            tabuada.appendChild(item)
        }
    }
}