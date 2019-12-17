class el {
  constructor() {
    this.paper = document.getElementById("f");
    this.stone = document.getElementById("p");
    this.scissors = document.getElementById("c");
    this.score = document.getElementById("score");
    this.display = document.getElementById("display");
  }
}

const select = new el();

select.paper.addEventListener("click", startg);
select.stone.addEventListener("click", startg);
select.scissors.addEventListener("click", startg);

var user_score = 0;
var bot_score = 0;

function startg() {
  var bot_choice = Math.floor(Math.random() * Math.floor(3));
  var table = ["p", "f", "c"];
  var bot_choice = table[bot_choice];
  var user_choice = this.id;
  switch (user_choice + bot_choice) {
    case "fp":
    case "cf":
    case "pc":
      user_score++;
      actu(user_score,bot_score);
      display(1);
      console.log("User wins !");
      break;
    case "ff":
    case "cc":
    case "pp":
      console.log("Draw !");
      display(3);
      break;
    case "pf":
    case "fc":
    case "cp":
      console.log("User losts !");
      bot_score++;
      actu(user_score,bot_score);
      display(2);
      break;
  }
}

function actu(a,b) {
    select.score.innerHTML = a+" : "+b;
}

function display(a) {
    if(a===1){
        select.display.innerHTML = "User wins !";
    }
    else if(a===2){
        select.display.innerHTML = "User losts !";
    }
    else{
        select.display.innerHTML = "Draw !";
    }
}