function verificar(){
    let ano = window.document.querySelector('input#txtano').value
    let msg = window.document.querySelector('div#msg')
    let data = new Date()
    let yAtual = data.getFullYear()
    let idade = yAtual - ano
    if (idade >= 0 && idade < 3) {
        // bebe
    } else if (idade < 10) {
        // crianca
    } else if (idade < 18) {
        // adolecente
    } else if (idade < 60) {
        // adulto
    } else if (idade <= 120) {
        // idoso
    } else {
        window.alert('[ERROR] Verifique as credenciais!')
    }
}
