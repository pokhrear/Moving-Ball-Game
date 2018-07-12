var myVar;
var score = 100;



function animateDiv(){
  myVar = setInterval(function(){
    move();}, 2000);

    score+=10;
    document.getElementById("globalscore").innerHTML="Your Global Score :  " + score;
  }

  function move() {
    var randx = Math.random()*900;
    var randy =Math.random()*450;
    document.getElementById("aa").style.left= randx +'px';
    document.getElementById("aa").style.top = randy +'px';
  }
