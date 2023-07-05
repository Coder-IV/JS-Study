function contagem() {
    let inicio = parseInt(document.querySelector('input#inicio').value)
    let fim = parseInt(document.querySelector('input#fim').value)
    let passo = parseInt(document.querySelector('input#passo').value)
    let res = document.querySelector('div#res')

    if (isNaN(inicio) || inicio < 0) {
        window.alert('[ERROR] Verifique a caixa: INICIO!')
    } else if (isNaN(fim) || fim < 0) {
        window.alert('[ERROR] Verifique a caixa: FIM!')
    } else if (isNaN(passo) || passo <= 0) {
        window.alert('[ERROR] Verifique a caixa: PASSO!')
    } else if (inicio > fim) {
        let paragrafo = document.createElement('p')
        let win = document.createTextNode('🏁')
        for (let inic = inicio; inic > fim; inic = inic - passo) {
            let texto = document.createTextNode(`${inic} 👉`)
            paragrafo.appendChild(texto)
            res.appendChild(paragrafo)
        }
        paragrafo.appendChild(win)
        res.appendChild(paragrafo)
    } else {
        let paragrafo = document.createElement('p')
        let win = document.createTextNode('🏁')
        for (let inic = inicio; inic < fim; inic = inic + passo) {
            let texto = document.createTextNode(`${inic} 👉`)
            paragrafo.appendChild(texto)
            res.appendChild(paragrafo)
        }
        paragrafo.appendChild(win)
        res.appendChild(paragrafo)
    }
}
