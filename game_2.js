window.onload = initAll;

var timer;
var thisx = 0;
var thisy = 0;
var myScore = 0;
var audio = new Audio("media/sound.mp3");
var win_audio = new Audio("media/win.mp3");
var pause_boolean = false;

function initAll(){
    document.getElementById("start").onclick = startAni;
    document.getElementById("pause").onclick = pauseAni;
    document.getElementById("instruct").onclick = instructions;
    document.getElementById("myImage").onclick = showScore;
    document.getElementById("twelve").onclick = description;
    document.getElementById("start").disabled = false;
    document.getElementById("pause").disabled = true;
    pause_boolean = true;
}

function startAni(){
    timer = setTimeout("startAni()", 1000);
    thisx = Math.random()*window.innerWidth - 50;
    thisy = Math.random()*window.innerHeight - 350;
    document.getElementById("myImage").style.position = 'relative';
    document.getElementById("myImage").style.transition = '2s';
    document.getElementById("myImage").style.left = thisx + 'px';
    document.getElementById("myImage").style.top = thisy + 'px';
    document.getElementById("thisText").innerHTML = myScore;
    pause_boolean = false;
    document.getElementById("start").disabled = true;
    document.getElementById("pause").disabled = false;
    document.body.style.backgroundImage = "url('images/sun.gif')";
}

function pauseAni(){
    clearTimeout(timer);
    pause_boolean = true;
    document.getElementById("start").disabled = false;
    document.getElementById("pause").disabled = true;
}

function showScore(){
    if (pause_boolean == false){
        audio.play();
        myScore++;
        document.getElementById("thisText").innerHTML = myScore;
        if (myScore === 10) {
            pauseAni();
            win_audio.play();
            document.body.style.backgroundImage = "url('images/win.gif')";
            setTimeout(function() {
                document.body.style.backgroundImage = "url('images/sun.gif')";
              }, 2000);
            myScore=0;
        }
    }
}

function instructions() {
    var instructions = document.getElementById("text_instruct");
    if (instructions.style.display === "block") {
      instructions.style.display = "none";
    } else {
      instructions.style.display = "block";
    }
  }

function description() {
  var textSection = document.getElementById("description");
  if (textSection.style.display === "block") {
    textSection.style.display = "none";
  } else {
    textSection.style.display = "block";
  }
}
