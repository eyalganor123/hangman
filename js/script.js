'use strict'

function init() {
    gNewMap = splitWord(getWordToRender());
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

function onLetterClicked(e) {
    var currLetter = e.target.innerHTML;
    if (!gCurrentWordLettersArray.includes(currLetter)) {
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
    console.log('guesses to hang:', gGuessesToHang);
    document.querySelector('.noose').innerHTML = `<img class="noose" src="./assets/${gGuessesToHang}.png" width="100" alt="">`;
    render();
    if (gGuessesToHang < 1) hangman()
    if (gNewMap.every(checkForWin)) win();
}

function checkForWin(item) {
    return (item.isHidden !== 'hidden');
}

function hangman() {
    console.log('gameover');
    document.querySelector('.messege').innerHTML = 'Game Over';
    setTimeout(openModal, 3000);
}

function win() {
    document.querySelector('.messege').innerHTML = 'Winner';
    console.log('WINNER');
    setTimeout(openModal, 3000);
}

function openModal() {
    document.querySelector('.modal').style.display = 'flex';
    reset()
}

function reset() {
    gLetters.forEach(element => {
        element.selected = "";
    });
    document.querySelector('.messege').innerHTML = '';
    document.querySelector('.noose').innerHTML = `<div class="noose"><img src="./assets/1.png" width="100" alt=""></div>`;
    gGuessesToHang = 8;
    document.getElementById('catagories').value = 'title';


}