let btn = document.getElementById("btn")
let firstCom = document.getElementById("unread")
let secCom = document.getElementById("unread1")
let thirdCom = document.getElementById("unread2")
let num = document.getElementById('no')
let val = 2
btn.addEventListener(`click` , function(){
    firstCom.style.background = 'white'
    secCom.style.background = 'white'
    thirdCom.style.background = 'white'
    num.innerText = 0
})

firstCom.addEventListener(`click`,function(){
    num.innerText = val--
    firstCom.style.background = "white"
    firstCom.style.cursor = "default"
})
secCom.addEventListener(`click`,function(){
    num.innerText = val--
    secCom.style.background = "white"
    secCom.style.cursor = "default"
})
thirdCom.addEventListener(`click`,function(){
    num.innerText = val--
    thirdCom.style.background = "white"
    thirdCom.style.cursor = "default"
})
console.log(val)