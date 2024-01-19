'use strict';
const input = document.querySelector('.guess')
const btn = document.querySelector('.check')
let rand;
const message = document.querySelector('.message')
const idk = document.querySelector('.number')
const scoreDOM = document.querySelector('.label-score .score')
const again = document.querySelector('.again')
const heightScore = document.querySelector('.highscore');

function randomize(){
    rand = Math.floor(Math.random() * 20 + 1);
}
randomize()

let win = false;
let lose = false;

again.addEventListener('click', function (){
    win = false;
    lose = false;
    btn.style.display = 'block';
    document.body.style.backgroundColor = '#222'
    input.value = ''
    message.textContent = "Start guessing..."
    randomize()
    idk.textContent = '?';
    scoreDOM.textContent = 20;
    // idk.textContent = rand; // ?????????????
})

let score = 20;
let hsDOM = 0;

// idk.textContent = rand; // ??????????????

function check() {
    let userGuess = input.value;
    
    if(userGuess == '' )
        message.textContent = "🚫 Forbidden"
    
    else if (userGuess == rand) {
        win = true;
        message.textContent = "✅ Correct"
        document.body.style.backgroundColor = '#508D69'
        idk.textContent = rand;
        btn.style.display = 'none'
        if(scoreDOM.textContent > hsDOM){
            hsDOM = scoreDOM.textContent
            heightScore.textContent = scoreDOM.textContent;
        }
        
    }else if(userGuess != rand){
        scoreDOM.textContent -= 1
        message.textContent = userGuess > rand? "Too high ⬆️":"Too low ⬇️";
    }
    if(scoreDOM.textContent == 0){
        lose = true;
        message.textContent = "You Lost! 😞"
        idk.textContent = rand;
        document.body.style.backgroundColor = '#FF004D'
        btn.style.display = 'none'
    }
}

btn.addEventListener('click', check)

document.onkeydown = (e) => {
    if (e.key === "Enter"){
        check()
        sound()
    }
}