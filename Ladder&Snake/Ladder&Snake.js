var number = 1;
var a;
var j;
var n = 1;
var m = 0;
var dices = ["", "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
var id = 100;

for (a = 0; a < 5; a++) {
    for (b = 0; b <= 9; b++) {
        document.getElementById("board").innerHTML += "<div class='boardbox left' id='box" + id + "' ></div>"
        id--;
    }
    for (c = 0; c <= 9; c++) {
        document.getElementById("board").innerHTML += "<div class='boardbox right'id='box" + id + "'></div>"
        id--;
    }
}
document.getElementById("box" + number).innerHTML = "<img id='counter' class='img' src='https://thumbs.dreamstime.com/b/gps-icon-vector-logo-design-map-pointer-pin-location-symbol-flat-style-navigation-icons-web-mobile-place-marker-travel-158027525.jpg'></img>"
var play = function () {
    number = 1;
    document.getElementById("board").style.visibility = "visible";
    document.getElementById("dice").style.visibility = "visible";
    document.getElementById("Play").style.visibility = "hidden";
    document.getElementById("dice").innerHTML = dices[1];
}
var random = function () {
    document.getElementById("dice").disabled = false;
    var dices = ["", "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];
    a = Math.ceil(Math.random() * 6);
    document.getElementById("dice").innerHTML = dices[a];
    if (n + a > 100) {
        a = 0;
    }
    d = 0;
    move()
}
var move = function () {
    document.getElementById("dice").disabled = true;
    t = setInterval(move2, 200)
}
var move2 = function () {
    n++;
    m++;

    if (m < (a) || m == (a)) {
        if (d == (a - 1)) {
            if (n == 4) {
                n = 39;
            }
            else if (n == 36) {
                n = 8;
            }
            else if (n == 30) {
                n = 12;
            }
            else if (n == 26) {
                n = 75;
            }
            else if (n == 33) {
                n = 52;
            }
            else if (n == 70) {
                n = 50;
            }
            else if (n == 99) {
                n = 42;
            }
            else if (n == 59) {
                n = 63;
            }

            else if (n == 86) {
                n = 57;
            }
            else if (n == 73) {
                n = 93;
            }

            else if (n == 100) {
                alert("You win the Game!");
                document.getElementById("Play").style.visibility = "visible";
                document.getElementById("dice").style.visibility = "hidden";
                n = 1;
            }
            else {
                n = n;
            }
        }
        var s = document.getElementById("counter");
        document.getElementById("box" + n).appendChild(s);
        d += 1;
    }
    else {
        m = 0;
        n -= 1;
        clearInterval(t);
        document.getElementById("dice").disabled = false;
    }
}
