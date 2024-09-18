const dicediv = document.getElementById("dice");

const diceimage = document.getElementById("diceimage");

dicediv.addEventListener("click", function() {
    
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    diceimage.src = `./img/${randomNumber}.png`;
});