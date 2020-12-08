//Assumes input is 1=rock 2=paper 3=sissors
//Outputs [1=win 2=tie 3=loss, computer rps choice]
async function rps(input) {
  //generate cpu attack choice
  com = Math.trunc(Math.random() * 3 + 1);

  comImg = document.getElementById('com');
  playerImg = document.getElementById('player');
  //sets computer image
  switch (com) {
    case 1:
      comImg.src = 'images/rr.png';
      break;
    case 2:
      comImg.src = 'images/rp.png';
      break;
    case 3:
      comImg.src = 'images/rs.png';
      break;
  }
  //sets player image, waits 2 seconds, then resets images to gifs.
  switch (input) {
    case 1:
      playerImg.src = 'images/lr.png';
      await sleep(2000);
      comImg.src = 'images/right.gif';
      playerImg.src = 'images/left.gif';
      break;
    case 2:
      playerImg.src = 'images/lp.png';
      await sleep(2000);
      comImg.src = 'images/right.gif';
      playerImg.src = 'images/left.gif';
      break;
    case 3:
      playerImg.src = 'images/ls.png';
      await sleep(2000);
      comImg.src = 'images/right.gif';
      playerImg.src = 'images/left.gif';
      break;
  }
  //RPS game logic.
  //Returns [Outcome(1=win | 2=tie | 3=loss), Cpu Choice(1=rock | 2=paper | 3=scissors)]
  switch (input) {
    case 1:
      if (com == 1) {
        return [2, com];
      } else if (com == 2) {
        scoreKeep(false);
        return [3, com];
      } else {
        scoreKeep(true);
        return [1, com];
      }
    case 2:
      if (com == 1) {
        scoreKeep(true);
        return [1, com];
      } else if (com == 2) {
        return [2, com];
      } else {
        scoreKeep(false);
        return [3, com];
      }
    case 3:
      if (com == 1) {
        scoreKeep(false);
        return [3, com];
      } else if (com == 2) {
        scoreKeep(true);
        return [1, com];
      } else {
        return [2, com];
      }
    default:
      console.log("This shouldn't have happened!");
      break;
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

var maxScore = 1;
var playerScore = 0;
var cpuScore = 0;
// first value adjusts score true=playerScore false=cpuScore
// second value defines if the score should be reset
// third value sets max score
function scoreKeep(scoreAdj, reset = false, mScore = maxScore) {
  maxScore = mScore;
  if (scoreAdj == true) {
    playerScore += 1;
  } else {
    cpuScore += 1;
  }
  if (reset) {
    playerScore = 0;
    cpuScore = 0;
  }
  //Sets HTML to score
  document.getElementById('comScore').innerHTML = 'Com: ' + cpuScore;
  document.getElementById('pScore').innerHTML = 'Player: ' + playerScore;
}
resultImg = document.getElementById('result');
while (true) {
  if (playerScore == maxScore) {
    resultImg.src = 'images/win.gif';
  } else if (cpuScore == maxScore) {
    console.log('ree');
  }
}
