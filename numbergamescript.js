//make a points system!!!
var score=0;
function vis() {
  document.getElementById("startGame").style.visibility = "visible";
}

function toggle(id) {
  var e = document.getElementById(id);
  if (e.style.visibility=="visible") e.style.visibility = "hidden";
  else e.style.visibility = "visible";
}

function submitAnswer (id){
  var e = document.getElementById(id).value;
//  var score=0;
  var scoreboard=document.getElementById("score");
//  if (e == "x") alert("correct");
  
  //make a case thingy for each id and then make different if/else for them
  switch (id) {
    case "givenAnswerSuperEasy":
//      if (e == "x") {alert("Correct!"); score+=1; scoreboard.innerHTML=score;}
    case "givenAnswerWinifyougetthis":
      if (e == "b") alert("You win!!!");  
    break;
    default:
      if (e == "x") {alert("Correct!"); score+=1; scoreboard.innerHTML=score; alert(score);}
    break;
  }
}