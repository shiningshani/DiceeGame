
var randomnum1 = Math.floor(Math.random() * 6) + 1;
var source = "images/dice" + randomnum1 + ".png";
document.querySelector(".p1 img").setAttribute("src", source);

// setAttribute is a function of querySelector not querySelectorAll

var randomnum2 = Math.floor(Math.random() * 6) + 1;
var source = "images/dice" + randomnum2 + ".png";
document.querySelector(".p2 img").setAttribute("src", source);

if (randomnum1 > randomnum2) {
    document.querySelector("h1").innerHTML = "PLayer 1 wins";
}
else if (randomnum1 < randomnum2) {
    document.querySelector("h1").innerHTML = "PLayer 2 wins";
}
else document.querySelector("h1").innerHTML = "ooops!! DRAW";