let num = [3,1,4,7,6,8,7]

num.push(10)
num.sort()

console.log(`Nosso vetor é o: ${num}`)
console.log(`o vetor tem ${num.length} posições.`)
console.log(`o primeiro numero é: ${num[0]}`)

let pos = num.indexOf(4)

if(pos === -1) {
    console.log('O valor não foi encontrado!')
} else{
    console.log(`O valor está na posição: ${pos}`)
}