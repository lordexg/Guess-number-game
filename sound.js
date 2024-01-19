let winSound = document.getElementById("winSound"); 
let loseSound = document.getElementById("loseSound"); 
let btnSound = document.getElementById("btnSound"); 

function sound() {
    if(!(win + lose))
    btnSound.play()
    if(win)
        winSound.play()
    if(lose){
        loseSound.play()
    }
}

btn.addEventListener('click', sound)