console.log("js linked");
let score = 0;
random = Math.floor(Math.random() * 3) + 1;

let rock = document.getElementById('divr');
let paper = document.getElementById('divp');
let scissor = document.getElementById('divs');
let stop = document.getElementById('divc');
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let result = document.getElementById("status");
let points = document.getElementById("score");


let winner = function (num1, num2) {
    if (num1 == 1 && num2 == 2) {
        result.innerHTML = "you win";
        score++;
    }
    if (num1 == 1 && num2 == 3) {
        result.innerHTML = "you lose";
        score--;
    }
    if (num1 == 2 && num2 == 1) {
        result.innerHTML = "you lose";
        score--;
    }
    if (num1 == 2 && num2 == 3) {
        result.innerHTML = "you win";
        score++;
    }
    if (num1 == 3 && num2 == 1) {
        result.innerHTML = "you win";
        score++;
    }
    if (num1 == 3 && num2 == 2) {
        result.innerHTML = "you lose";
        score--;
    }
    if (num1 == num2) {
        result.innerHTML = "draw";
    }
}

let computer = function () {
    if (random == 1) {
        num1.innerHTML = "rock";
    }
    if (random == 2) {
        num1.innerHTML = "paper";
    }
    if (random == 3) {
        num1.innerHTML = "scissor";
    }
}
rock.onclick = function rclicked() {
    random = Math.floor(Math.random() * 3) + 1;
    console.log(random + 1);
    computer();
    num2.innerHTML = "rock";
    winner(random, 1);
    points.innerHTML = score;

}

paper.onclick = function rclicked() {
    random = Math.floor(Math.random() * 3) + 1;
    console.log(random + 1);
    computer();
    num2.innerHTML = "paper";
    winner(random, 2);
    points.innerHTML = score;
}

scissor.onclick = function rclicked() {
    random = Math.floor(Math.random() * 3) + 1;
    console.log(random + 1);
    computer();
    num2.innerHTML = "scissor";
    winner(random, 3);
    points.innerHTML = score;
}

stop.onclick = function rclicked() {
    console.log("stop is played");
    score = 0;
    points.innerHTML = score;
}


