function verificar() {
    let ano = window.document.querySelector('input#txtano').value
    let msg = window.document.querySelector('div#msg')
    let foto = window.document.querySelector('img#foto')
    let sexo = document.getElementsByName('sexo')
    let date = new Date()
    let AnoAtual = date.getFullYear()
    let idade = AnoAtual - ano
    let genero = ''

    if (ano.length == 0 || isNaN(ano) || ano > AnoAtual || idade > 120) {
        window.alert('[ERROR] Verifique os dados e tente novamente!')
    } else if (sexo[0].checked) {
        genero = 'homem'
    } else if (sexo[1].checked) {
        genero = 'mulher'
    }


    if (idade >= 0 && idade < 4 && genero === 'homem') {

        // bebe masculino

        msg.innerHTML = `Detectamos um bebê de <strong>${idade}</strong> anos!`
        foto.src = 'imagens/bebe-m.png'
    } else if (idade >= 0 && idade < 4 && genero === 'mulher') {

        // bebe feminino

        msg.innerHTML = `Detectamos um bebê de <strong>${idade}</strong> anos!`
        foto.src = 'imagens/bebe-f.png'
    } else if (idade < 11 && genero === 'homem') {

        // criança masculino

        msg.innerHTML = `Detectamos uma criança de <strong>${idade}</strong> anos!`
        foto.src = 'imagens/crianca-m.png'
    } else if (idade < 11 && genero === 'mulher') {

        // criança feminino

        msg.innerHTML = `Detectamos uma criança de <strong>${idade}</strong> anos!`
        foto.src = 'imagens/crianca-f.png'
    } else if (idade < 18 && genero === 'homem') {

        // adolescente masculino

        msg.innerHTML = `Detectamos um adolescente de <strong>${idade}</strong> anos!`
        foto.src = 'imagens/adolescente-m.png'
    } else if (idade < 18 && genero === 'mulher') {

        // adolescente feminino

        msg.innerHTML = `Detectamos uma adolecente de <strong>${idade}</strong> anos!`
        foto.src = 'imagens/adolescente-f.png'
    } else if (idade < 60 && genero === 'homem') {

        // adulto masculino

        msg.innerHTML = `Detectamos um ${genero} de <strong>${idade}</strong> anos!`
        foto.src = 'imagens/homem.png'
    } else if (idade < 60 && genero === 'mulher') {

        // adulto feminino

        msg.innerHTML = `Detectamos uma ${genero} de <strong>${idade}</strong> anos!`
        foto.src = 'imagens/mulher.png'
    } else if (idade < 121 && genero === 'homem') {

        // idoso

        msg.innerHTML = `Detectamos um ${genero} de <strong>${idade}</strong> anos!`
        foto.src = 'imagens/idoso.png'
    } else if (idade < 121 && genero === 'mulher') {

        // idosa

        msg.innerHTML = `Detectamos uma ${genero} de <strong>${idade}</strong> anos!`
        foto.src = 'imagens/idosa.png'
    }
}