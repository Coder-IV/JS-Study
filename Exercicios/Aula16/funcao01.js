function parimp(n) {
    if (n%2 == 0) {
        return 'PAR'
    } else {
        return 'IMPAR'
    }
}

let res = parimp(10)

console.log(res)

console.log(parimp(101))