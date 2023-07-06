const numberArray = [40, 1, 5, 200];

function compareNumbers(a, b) {
    return a - b
}

console.log(`Array Ordenada em ordem crescente${numberArray.sort(compareNumbers)}`) // [1, 5, 40, 200]

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort