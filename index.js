var pc = "";
var client = "";
var lvl = 1;
var round = 0;


$(document).keypress(function() {
  lvl=1;
  $("button").removeClass("pressed");
  start();
});


$(".btn").mousedown(function(event) {
  $(event.target).addClass("pressed");
  var btnNum = $(event.target).attr('name');
  playFunc(btnNum);
  client=client+btnNum;
  round=round+1
});

$(".btn").mouseup(function(event) {
    $(event.target).removeClass("pressed");
    if (round < lvl) {
    }else{
      if (client == pc) {
            round = 0
            lvl = lvl + 1;
            client = "";
            start();
      } else {
          playFunc('5');
          $("h1").text("Game Over!");
          client = "";
          round = 0;
          lvl=1;
          pc = "";
      }
}
}
);



function start() {
  console.log("pc"+pc+"client"+client+"round"+round+"LVL"+lvl);
  $("h1").text("level " + lvl);
  var randomNum = Math.floor(Math.random() * 4) + 1;
  $("." + randomNum).addClass("pressed");
  playFunc(randomNum);
  pc = pc + randomNum;
  }

function playFunc(btnNum) {
  var idAudio = new Audio('sounds/' + btnNum + '.mp3');
  idAudio.play();
}

function clickmethod() {

}
