const dictionary = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let characters = []
const symbols = dictionary.slice(dictionary.indexOf("~"), dictionary.length)
const letters = dictionary.slice(0, dictionary.indexOf("0"))
const numbers = dictionary.slice(dictionary.indexOf("0"), dictionary.indexOf("~"))
let length = 15

let opt1El = document.querySelector("#opt1-el")
let opt2El = document.querySelector("#opt2-el")

let optionsOpen = false;
let optionsPage = document.querySelector("#custom-box")
let arrowEl = document.querySelector(".arrow")
let optTitle = document.querySelector("#optionTitle")
let numsEl = document.querySelector("#nums-el")
let symsEl = document.querySelector("#syms-el")
let lengthEl = document.querySelector("#length-input")
let incNums = true
let incSyms = true

lengthEl.value = "15"

function generatePasswords(){
    let opt1 = ""
    let opt2 = ""
    characters = letters
    if(incNums){
        characters = characters.concat(numbers)
    }
    if(incSyms){
        characters = characters.concat(symbols)
    }
    length = parseInt(lengthEl.value, 10)

    for(let i = 0; i < length; i++){
        opt1 += characters[Math.floor(Math.random() * characters.length)]
        opt2 += characters[Math.floor(Math.random() * characters.length)]
    }
    opt1El.textContent = opt1
    opt2El.textContent = opt2
}

function toggleOptions(){
    optionsOpen = !optionsOpen
    if(optionsOpen){
        optionsPage.style.display = "flex"
        arrowEl.classList.add("down")
        arrowEl.classList.remove("right")
        optTitle.style.fontWeight = "bold"
        optTitle.style.color = "#10B981"
    }else{
        optionsPage.style.display = "none"
        arrowEl.classList.add("right")
        arrowEl.classList.remove("down")
        optTitle.style.fontWeight = "normal"
        optTitle.style.color = "#D5D4D8"
    }
}
function toggleNums(){
    if(incNums){
        incNums = false
        toggleButton(numsEl, false)
    }else{
        incNums = true
        toggleButton(numsEl, true)
    }
}
function toggleSyms(){
    if(incSyms){
        incSyms = false
        toggleButton(symsEl, false)
    }else{
        incSyms = true
        toggleButton(symsEl, true)
    }
}
function toggleButton(el, toggle){
    if(!toggle){
        el.style.background = "#273549"
    }else{
        el.style.background = "#10B981"
    }
}
function copyToClipboard(element){
    const selection = window.getSelection()
    const range = document.createRange()
    range.selectNodeContents(element);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
    alert("Copied the text: " + element.textContent);
}