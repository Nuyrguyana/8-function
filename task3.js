function getDivisors(number = 1) {
    if (number < 0 || !Number.isInteger(number)) {
        alert('number должен быть целым числом и больше нуля!')
    } else {
        let counter = 0
        for (let i = 1; i <= number; i++) {
            if (number%i === 0) {
                  counter++
            }    } return counter
    }
}

console.log(getDivisors(4))
