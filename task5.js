const text = 'Привет! Как дела! Давно мы с тобой не виделись.'
checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage)

function showSuccessMessage(message) {
    console.log(message)

}

function showErrorMessage(message) {
    console.error(message)

}

function checkTextOnErrorSymbol(text, errorSymbol, successCallback, errorCallback) {
    if (text.findIndex(errorSymbol) > -1) {
        // console.log(text.indexOf(errorSymbol))
        errorCallback(`Найден запрещенный символ "${errorSymbol}" под индексом ${text.indexOf(errorSymbol)}.`)
    } else {
        successCallback(`В данном тексте нет запрещенных символов.`)
    }

}



