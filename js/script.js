'use strict'

function init() {
    var word = getWordToRender();
    gNewMap = splitWord(word);
    render();
}

function render() {

    var strDivs = ``;
    gNewMap.forEach(item => {
        strDivs += `<div class="letter ${item.isHidden}">${item.letter}</div>`
    });
    document.querySelector('.words-container').innerHTML = strDivs;

    var strDivs = ''
    gLetters.forEach(letter => {
        strDivs += `<div class="menu-letter ${letter.selected}" onclick="onLetterClicked(event)">${letter.letter}</div>`
    });
    document.querySelector('.letters-container').innerHTML = strDivs;

}

function renderHang() {
    var elHangman = document.querySelector('.hangman');
    elHangman.innerHTML += `<div>$</div>`
}

function onLetterClicked(e) {
    var currLetter = e.target.innerHTML;
    if(!gCurrentWordLettersArray.includes(currLetter)) 
    {
        gGuessesToHang--;
        
    }
    gNewMap.forEach(item => {
        if (item.letter === currLetter) {
            item.isHidden = "";
        }
    });
    gLetters.forEach(element => {
        if (element.letter === currLetter) {
            element.selected = "selected-letter"
        };
    });
console.log('guesses to hang:',gGuessesToHang);
    render();
    if(gGuessesToHang <1) hangman()
    if (gNewMap.every(checkForWin)) win();
}

function checkForWin(item) {
    return (item.isHidden !== 'hidden');
}

function hangman() {
    console.log('gameover');
    document.querySelector('.messege').innerHTML = 'Game Over';
    setTimeout(openModal,3000);
}

function win() {
    document.querySelector('.messege').innerHTML = 'Winner';
    console.log('WINNER');
    setTimeout(openModal,3000);
}
function openModal(){
    document.querySelector('.modal').style.display='flex';
    reset()
}

function reset(){
    gLetters.forEach(element => {
            element.selected = "";
    });
    document.querySelector('.hangman').innerHTML = '';
    gGuessesToHang=8;
    document.getElementById('catagories').value = 'title'

}