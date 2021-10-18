// function declaration

function getName1(name) {
    return 'Имя равно ' + name
}
console.log(getName1('Yana'))

// function expression

const getName2 = function (name) {
    return 'Имя равно ' + name
}
console.log(getName2('Misha'))

// Стрелочная функция

const getName3 = (name) => {
    return 'Имя равно ' + name
}
console.log(getName3('Yasya'))
