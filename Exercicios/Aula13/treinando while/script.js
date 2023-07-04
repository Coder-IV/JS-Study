let fatia = 8
let paragrafo2 = window.document.createElement('p')
let texto = window.document.createTextNode('Cabo a pizza :(')
paragrafo2.appendChild(texto)

function pizza() {
    let paragrafo = window.document.createElement('p')
    let texte = window.document.createTextNode('1 Fatia comida')
    paragrafo.appendChild(texte)
    document.body.appendChild(paragrafo)
}

function cabo() {
    document.body.appendChild(paragrafo2)
}

function comer() {
    while (fatia >= 1) {
        fatia -= 1
        pizza()
    }
    cabo()
}



