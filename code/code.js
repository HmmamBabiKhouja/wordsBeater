window.addEventListener("load",init);

const levels={"hard":3, "medium":5, "easy":7}

const currentLevel = levels.hard;
console.log(currentLevel)
//Globals
let time =currentLevel;
let score=0;
let isplaying;

//time limit based on level 

// DOM variables
const currentword=document.querySelector("#current-word");
const message=document.querySelector("#message");
const wordInput=document.querySelector("#word-input");
const timeDisplay=document.querySelector("#time-display");
const scoreDisplay = document.querySelector("#score");
const seconds=document.querySelector("#seconds");

const words = [
    "assemblage",
    "band",
    "bank",
    "batch",
    "battery",
    "block",
    "bunch",
    "cult",
    "clump",
    "cluster",
    "clutch",
    "collection",
    "group",
    "hurdle",
    "knot",
    "muster",
    "package",
    "set",
    "suite",
    "bliss",
    "felicity",
    "gladness",
    "happiness",
    "warm"
];

function init(){
    // pick & display
    pickWord(words);
    //time decrement
    setInterval(recudeTime, 1000);
    //check status 
    setInterval(checkStatues, 50);
    //when the user pass a correct input
    wordInput.addEventListener("input",startMatcing);
}

function startMatcing(){
    if(match()){
        isplaying=true;
        time=currentLevel+1;
        pickWord(words);
        wordInput.value='';
        score++;
    }

    if(score===-1){
        scoreDisplay.innerHTML=0;
    }else{
        scoreDisplay.innerHTML=score;
    }  
}

function match(){
    if(currentword.innerHTML === wordInput.value){
        message.innerHTML="Correct"
        return true;
    }else{
        message.innerHTML=""
        return false;
    }
}

function pickWord(words){
    let randomIndex=Math.floor(Math.random()*words.length);
    currentword.innerHTML=words[randomIndex]
}

function recudeTime(){
    if(time>0){
        time--
    }else if(time ===0){
        isplaying=false;
    }
    seconds.innerHTML=time;
}

function checkStatues(){
    if(time===0 && !isplaying){
        message.innerHTML = "Game Over !!!";
        score=-1;
    }
}
