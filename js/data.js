var catagories = {
    animals:['fox',"dog","cat"],
    objects:["table","chair","spoon"],
    colors:["red","blue","magenta"],
    
}
var gWords;
var gCurrentWordLettersArray = [];
var gMapLetters = {};
var gNewMap = [];
var gLetters = [{
    letter: 'a',
    selected: ""
}, {
    letter: 'b',
    selected: ""
}, {
    letter: 'c',
    selected: ""
}, {
    letter: 'd',
    selected: ""
}, {
    letter: 'e',
    selected: ""
}, {
    letter: 'f',
    selected: ""
}, {
    letter: 'g',
    selected: ""
}, {
    letter: 'h',
    selected: ""
}, {
    letter: 'i',
    selected: ""
}, {
    letter: 'j',
    selected: ""
}, {
    letter: 'k',
    selected: ""
}, {
    letter: 'l',
    selected: ""
}, {
    letter: 'm',
    selected: ""
}, {
    letter: 'n',
    selected: ""
}, {
    letter: 'o',
    selected: ""
}, {
    letter: 'p',
    selected: ""
}, {
    letter: 'q',
    selected: ""
}, {
    letter: 'r',
    selected: ""
}, {
    letter: 's',
    selected: ""
}, {
    letter: 't',
    selected: ""
}, {
    letter: 'u',
    selected: ""
}, {
    letter: 'v',
    selected: ""
}, {
    letter: 'w',
    selected: ""
}, {
    letter: 'x',
    selected: ""
}, {
    letter: 'y',
    selected: ""
}, {
    letter: 'z',
    selected: ""
}]
var gGuessesToHang = 8;
var gGuesses = 0;
function chooseCatagory(){
    var catagory = document.getElementById("catagories").value;
    console.log(catagories[catagory]);
    gWords = catagories[catagory];
    closeModal()
    init();
    return catagory
}
function closeModal(){
    document.querySelector('.modal').style.display='none';
    document.querySelector('.noose').innerHTML=`<img src="./assets/8.png" width="100" alt=""></img>
    `;
}

function getWordToRender() {
    return gWords[getRandomInt(gWords.length)];
}

function splitWord(word) {
    gCurrentWordLettersArray = (word.split(''));
    var newLetterMap = gCurrentWordLettersArray.map(function (val) {
        return {
            letter: val,
            isHidden: "hidden"
        };
    });
    return newLetterMap;
}
