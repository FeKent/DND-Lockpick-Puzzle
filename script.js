const boxNum = document.querySelector('input').value;
//number of boxes
let expectedId = 1;
//number to check button ID against
let c = [];
//clicked array

function divCreation(num){
    const idArray = Array.from({length: num}, (_, index) => index + 1);
    const shuffled = idArray.sort(() => Math.random() - 0.5)
    console.log(shuffled)
    
    for (let i = 0; i < num; i++){
        const container = document.getElementById('puzzleBox')
        const box = document.createElement('button');
        box.textContent = ""
        box.setAttribute('class', 'btn',)
        box.setAttribute('id', shuffled[i])
        box.setAttribute('onclick', 'clicked(this.id);')
        container.appendChild(box)
    } 
}

function newCreation(input){
    const container = document.getElementById('puzzleBox')
    while (container.hasChildNodes())
        container.removeChild(container.firstChild)
    divCreation(input)
}

function changeColor(value){
    document.getElementById(value).style.backgroundColor= "#42B28A"; 
}

function resetColors(){
    const elements = document.querySelectorAll('button')
    elements.forEach((elements) => {elements.removeAttribute('style');});
}

function clicked(value){
    if (value == expectedId){
        changeColor(value)
        c.push(value);
        console.log(c);
        expectedId++;
    } else {
        resetColors()
        c.length = 0;
        expectedId = 1;
    }
}