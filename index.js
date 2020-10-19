//first dice

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomSourceImage = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , randomSourceImage);

//for the 2nd dice

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomSourceImage2 = 'images/' + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src" , randomSourceImage2);


//conditons
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = " 🚩Yaayyy...Player 1 wins!";

}
else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML = "🏁Hurrrayyy... Player 2 wins!";
}
else{
  document.querySelector("h1").innerHTML = "DRAW..Try again! ☹️";

}
