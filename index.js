var randomnumber1 = Math.floor(Math.random() * 6 + 1) // 1-6

var randomDiceImage = "dice" + randomnumber1 + ".png"; // dice1.png-dice6.png

var randomImageSource = "./images/" + randomDiceImage; // images/dice1.png - images/dice2.png

var image1 = document.querySelector(".img1");
image1.setAttribute("src", randomImageSource);



var randomnumber2 = Math.floor(Math.random() * 6 + 1) // 1-6

var randomDiceImage2 = "dice" + randomnumber2 + ".png"; // dice1.png-dice6.png

var randomImageSource2 = "./images/" + randomDiceImage2; // images/dice1.png - images/dice2.png
var image2 = document.querySelector(".img2")
image2.setAttribute("src", randomImageSource2)

if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomnumber2 > randomnumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
} else {
    document.querySelector("h1").innerHTML = "Draw!"
}
