let vel = 80.1
let limit = 80.0

function velocidade() {
    let result;
    if (vel > limit) {
        result = 'velocidade acima do limite, você foi multado!'
    } else {
        result = 'velocidade ok.'
    }
    return result;
}

console.log(velocidade())