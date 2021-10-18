checkQuestionAnswer(prompt('Арбуз это фрукт или ягода?'), 'Ягода')

checkQuestionAnswer(prompt('Сколько в среднем зубов у взрослого человека?'), '32')

checkQuestionAnswer(prompt('Как называется самая маленькая птица в мире?'), 'Колибри')

function checkQuestionAnswer(answer, correctAnswer) {
    if (answer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
        alert('ответ верный')
    } else
        alert('ответ неверный')
}



