function carregar() {
    let msg = window.document.querySelector('div#msg')
    let img = window.document.getElementById('imagem')
    let bg = window.document.querySelector('section#secao')
    let bodybg = window.document.body.style
    let saudacao = window.document.querySelector('div#saudacao')
    let data = new Date()
    let hora = 16 //data.getHours()
    msg.innerHTML = `Agora são <strong>${hora}</strong> horas`
    if (hora < 6 && hora > 0) {
        saudacao.innerHTML = '<strong>Boa Madrugada!</strong>'
        img.src = 'noite.png'
        bodybg.backgroundColor = '#000307'
        bg.style.backgroundColor = '#080813'
        bg.style.color = 'white'
    } else if (hora < 12) {
        saudacao.innerHTML= '<strong>Bom Dia!</strong>'
        img.src = 'manha.png'
        bodybg.backgroundColor = '#cacfea'//#ebd9c0
        bg.style.backgroundColor = '#d3d5e0'
        bg.style.color = '#f6f6f6'
        bodybg.color = 'black'
    } else if (hora < 19) {
        saudacao.innerHTML = 'Boa Tarde'
        img.src = 'tarde.png'
        bodybg.backgroundColor = '#ebd9c0'
        bodybg.color = 'black'
        bg.style.backgroundColor = '#ece3d6'
        bg.style.color = 'gray'
    } else {
        saudacao.innerHTML = '<strong>Boa Noite!</strong>'
        img.src = 'noite.png'
        bodybg.backgroundColor = '#000307'
        bg.style.backgroundColor = '#080813'
        bg.style.color = 'white'
    }
}
