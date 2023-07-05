function contagem() {
    let inicio = parseInt(document.querySelector('input#inicio').value)
    let fim = parseInt(document.querySelector('input#fim').value)
    let passo = parseInt(document.querySelector('input#passo').value)
    let res = document.querySelector('div#res')

    if (isNaN(inicio)) {
        window.alert('[ERROR] Verifique a caixa: INICIO!')
    } else if (isNaN(fim)) {
        window.alert('[ERROR] Verifique a caixa: FIM!')
    } else if (isNaN(passo)) {
        window.alert('[ERROR] Verifique a caixa: PASSO!')
    } else if (inicio == 0 && fim == 0) {
        window.alert('Por Favor, não use 0 no INICIO e no FIM juntos!')
    } else if (inicio > fim) {
        if (passo == 0) {
            passo = 1
        }
        let paragrafo = document.createElement('p')
        let win = document.createTextNode(' 🏁')
        let start = document.createTextNode('Contando: ')
        paragrafo.appendChild(start)
        res.innerHTML = ''
        for (let inic = inicio; inic > fim; inic = inic - passo) {
            let texto = document.createTextNode(`${inic} 👉`)
            paragrafo.appendChild(texto)
            res.appendChild(paragrafo)
        }
        paragrafo.appendChild(win)
        res.appendChild(paragrafo)
    } else {
        if (passo == 0) {
            passo = 1
        }
        let paragrafo = document.createElement('p')
        let win = document.createTextNode('🏁')
        let start = document.createTextNode('Contando: ')
        paragrafo.appendChild(start)
        res.innerHTML = ''
        for (let inic = inicio; inic < fim; inic = inic + passo) {
            let texto = document.createTextNode(`${inic} 👉`)
            paragrafo.appendChild(texto)
            res.appendChild(paragrafo)
        }
        paragrafo.appendChild(win)
        res.appendChild(paragrafo)

    }
}
