function verificar() {
    let ano = window.document.querySelector('input#txtano').value
    let msg = window.document.querySelector('div#msg')
    let foto = window.document.createElement('img')
    let sexo = document.getElementsByName('sexo')
    let date = new Date()
    let AnoAtual = date.getFullYear()
    let mesAtual = date.getMonth()
    let mnascimento = document.querySelector('input#mes')
    let idade = AnoAtual - ano
    let genero = ''

    foto.classList.add('imagem')

    if (ano.length == 0 || isNaN(ano) || ano > AnoAtual || idade > 120) {
        window.alert('[ERROR] Verifique os dados e tente novamente!')
    } else if (sexo[0].checked) {
        genero = 'homem'
    } else if (sexo[1].checked) {
        genero = 'mulher'
    }

    if (Number(mnascimento.value.length) === 0 || Number(mnascimento.value) < 1 || Number(mnascimento.value) > 12) {
        window.alert('[ERROR] Adicione um mês valido!')
    } else {

        if (Number(mnascimento.value) <= mesAtual) {
            if (idade >= 0 && idade < 4 && genero === 'homem') {

                // bebe masculino

                msg.innerHTML = `Detectamos um bebê de <strong>${idade}</strong> anos!`
                foto.setAttribute('src', 'imagens/bebe-m.png')
            } else if (idade >= 0 && idade < 4 && genero === 'mulher') {

                // bebe feminino

                msg.innerHTML = `Detectamos um bebê de <strong>${idade}</strong> anos!`
                foto.setAttribute('src', 'imagens/bebe-f.png')
            } else if (idade < 11 && genero === 'homem') {

                // criança masculino

                msg.innerHTML = `Detectamos uma criança de <strong>${idade}</strong> anos!`
                foto.setAttribute('src', 'imagens/crianca-m.png')
            } else if (idade < 11 && genero === 'mulher') {

                // criança feminino

                msg.innerHTML = `Detectamos uma criança de <strong>${idade}</strong> anos!`
                foto.setAttribute('src', 'imagens/crianca-f.png')
            } else if (idade < 18 && genero === 'homem') {

                // adolescente masculino

                msg.innerHTML = `Detectamos um adolescente de <strong>${idade}</strong> anos!`
                foto.setAttribute('src', 'imagens/adolescente-m.png')
            } else if (idade < 18 && genero === 'mulher') {

                // adolescente feminino

                msg.innerHTML = `Detectamos uma adolecente de <strong>${idade}</strong> anos!`
                foto.setAttribute('src', 'imagens/adolescente-f.png')
            } else if (idade < 60 && genero === 'homem') {

                // adulto masculino

                msg.innerHTML = `Detectamos um ${genero} de <strong>${idade}</strong> anos!`
                foto.setAttribute('src', 'imagens/homem.png')
            } else if (idade < 60 && genero === 'mulher') {

                // adulto feminino

                msg.innerHTML = `Detectamos uma ${genero} de <strong>${idade}</strong> anos!`
                foto.setAttribute('src', 'imagens/mulher.png')
            } else if (idade < 121 && genero === 'homem') {

                // idoso

                msg.innerHTML = `Detectamos um ${genero} de <strong>${idade}</strong> anos!`
                foto.setAttribute('src', 'imagens/idoso.png')
            } else if (idade < 121 && genero === 'mulher') {

                // idosa

                msg.innerHTML = `Detectamos uma ${genero} de <strong>${idade}</strong> anos!`
                foto.setAttribute('src', 'imagens/idosa.png')
            }

            msg.appendChild(foto)
        } else {
            if (idade >= 0 && idade < 4 && genero === 'homem') {

                // bebe masculino
        
                msg.innerHTML = `Detectamos um bebê de <strong>${idade-1}</strong> anos!`
                foto.setAttribute('src', 'imagens/bebe-m.png')
            } else if (idade >= 0 && idade < 4 && genero === 'mulher') {
        
                // bebe feminino
        
                msg.innerHTML = `Detectamos um bebê de <strong>${idade-1}</strong> anos!`
                foto.setAttribute('src', 'imagens/bebe-f.png')
            } else if (idade < 11 && genero === 'homem') {
        
                // criança masculino
        
                msg.innerHTML = `Detectamos uma criança de <strong>${idade-1}</strong> anos!`
                foto.setAttribute('src', 'imagens/crianca-m.png')
            } else if (idade < 11 && genero === 'mulher') {
        
                // criança feminino
        
                msg.innerHTML = `Detectamos uma criança de <strong>${idade-1}</strong> anos!`
                foto.setAttribute('src', 'imagens/crianca-f.png')
            } else if (idade < 18 && genero === 'homem') {
        
                // adolescente masculino
        
                msg.innerHTML = `Detectamos um adolescente de <strong>${idade-1}</strong> anos!`
                foto.setAttribute('src', 'imagens/adolescente-m.png')
            } else if (idade < 18 && genero === 'mulher') {
        
                // adolescente feminino
        
                msg.innerHTML = `Detectamos uma adolecente de <strong>${idade-1}</strong> anos!`
                foto.setAttribute('src', 'imagens/adolescente-f.png')
            } else if (idade < 60 && genero === 'homem') {
        
                // adulto masculino
        
                msg.innerHTML = `Detectamos um ${genero} de <strong>${idade-1}</strong> anos!`
                foto.setAttribute('src', 'imagens/homem.png')
            } else if (idade < 60 && genero === 'mulher') {
        
                // adulto feminino
        
                msg.innerHTML = `Detectamos uma ${genero} de <strong>${idade-1}</strong> anos!`
                foto.setAttribute('src', 'imagens/mulher.png')
            } else if (idade < 121 && genero === 'homem') {
        
                // idoso
        
                msg.innerHTML = `Detectamos um ${genero} de <strong>${idade-1}</strong> anos!`
                foto.setAttribute('src', 'imagens/idoso.png')
            } else if (idade < 121 && genero === 'mulher') {
        
                // idosa
        
                msg.innerHTML = `Detectamos uma ${genero} de <strong>${idade-1}</strong> anos!`
                foto.setAttribute('src', 'imagens/idosa.png')
            }
        
            msg.appendChild(foto)
        
        }
    }

}
