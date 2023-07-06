let num = [4,5,6,7,8]

/*for (let pos = 0;pos < num.length;pos++) {
    console.log(`A posiçao ${pos} tem valor ${num[pos]}`)
}*/

num.sort()

for(let pos in num) {
    console.log(`A posiçao ${pos} tem valor ${num[pos]}`)
}