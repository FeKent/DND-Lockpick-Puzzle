const boxNum = document.querySelector('input').value;
//number of boxes
let expectedId = 1;
//number to check button ID against
let c = [];
//clicked array
let tally = 0
//number of tries

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

    const msgBox = document.getElementById('messageBox')
    tally = 0
    while (msgBox.hasChildNodes())
        msgBox.removeChild(msgBox.firstChild)
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
        tally++;
    }

    if (c.length == boxNum){
        const msgBox = document.getElementById('messageBox')
        const message = document.createElement('h1');
        message.textContent = "You have picked the lock. Well done!"
        message.setAttribute('class', 'msg')
        msgBox.appendChild(message)

        const tallyMsg = document.createElement('h4');
        if (tally == 1){
            tallyMsg.textContent = `It only took you ${tally} try! You must be an expert lockpicker.`
        } else {
            tallyMsg.textContent = `It took you ${tally} tries, but you got there!`
        }
        tallyMsg.setAttribute('class', 'msg')
        msgBox.appendChild(tallyMsg)
    }
}