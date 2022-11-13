const try1 = document.querySelector('.try')
const itResult = document.querySelector('.result')
const itTrys = document.querySelector('.trys')
document.querySelector('.num').focus()
function go() {
    return Math.floor(Math.random() * 30) + 1
}

let itNum = go()

function aPlus() {
    a += 1
}


let a = 0
try1.addEventListener('click', function result() {
    let num = document.querySelector('.num').value
    // a += 1
    aPlus()
    itTrys.innerHTML += ' ' + num
    if (num == itNum) {
    itResult.innerHTML = 'Поздравляю, ты угадал'  
    a = 7
    };
    if (num > itNum) {
    itResult.innerHTML = 'Я загадал меньшее число' 
    };
    if (num < itNum) {
        itResult.innerHTML = 'Я загадал большее число' 
    };
    if (a == 5) {
        itResult.innerHTML = '' 
        itTrys.innerHTML = 'Ты использовал 5 попыток'
        try1.innerHTML = 'Начать заново'
        itNum = go()
        try1.style.backgroundColor = 'red'
    }
    if (a == 6) {
        a = 0
        itResult.innerHTML = '' 
        itTrys.innerHTML = 'Твои варианты ответов:'
        try1.innerHTML = 'Сделать попытку'
        try1.style.backgroundColor = 'rgb(116, 116, 236)'
        document.querySelector('.num').value = ''
    }
    if (a == 7) {
        itTrys.innerHTML = ''
        try1.innerHTML = 'Начать заново'
        document.querySelector('.num').value = ''  
        itNum = go()
        try1.style.backgroundColor = 'green'
    }
    if (a == 8) {
        a = 0
        itTrys.innerHTML = 'Твои варианты ответов:'
        try1.innerHTML = 'Сделать попытку'
        itResult.innerHTML = '' 
        try1.style.backgroundColor = 'rgb(116, 116, 236)'
        document.querySelector('.num').value = ''
    }
})
 





