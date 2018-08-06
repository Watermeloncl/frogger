import React, { Component } from 'react';

export default class App extends Component {
  render() {

    var squareLeft = 725;
    var squareLeftString = "725"
    var squareRow = 1;
    var squareColumn = 8;
    var squareBottom = 25;
    var squareBottomString = "25"


    var carOneLeft = 800;
    var carTwoLeft = 1200;
    var carThreeLeft = 1300;
    var carFourLeft = 200;
    var carFiveLeft = 800;
    var carSixLeft = 300;
    var carSevenLeft = 100;
    var carEightLeft = 650;
    var carNineLeft = 1100;
    var carTenLeft = 200;
    var carElevenLeft = 750;
    var carTwelveLeft = 1000;
    var carThirteenLeft = 400;
    var carFourteenLeft = 800;
    var carFifteenLeft = 1300;
    
    
    var allowInput = true;
    var started = false;
    var dead = false;

    var speedCar = 20;
    var speedFastCar = 30;
    var speedVeryFastCar = 45;

    var goalOneMade = false;
    var goalTwoMade = false;
    var goalThreeMade = false;
    var goalFourMade = false;
    var goalFiveMade = false;

    var respawn;

    function killed() {
      if (dead == false) {
        dead = true;
        console.log("Hello");
        respawn = setTimeout(spawn, 1500);
      }
    }

    function spawn() {
      squareRow = 1;
      squareColumn = 8;
      squareLeft = 725;
      squareLeftString = "725"
      squareBottom = 25;
      squareBottomString = "25"
      started = true;
      document.getElementById("1").style.backgroundColor = "transparent";
      document.getElementById("1").style.zIndex = "10";
      document.getElementById("1").style.left = squareLeft + 'px';
      document.getElementById("1").style.bottom = squareBottom + 'px';
      dead = false;
    }

    function checkForWin() {
      if (squareRow == 8) {
        if (squareColumn == 2 && goalOneMade == false) {
          goalOneMade = true;
          document.getElementById("17").style.backgroundColor = "rgb(0, 255, 0)";
          spawn();
        } else if (squareColumn == 5 && goalTwoMade == false) {
          goalTwoMade = true;
          document.getElementById("18").style.backgroundColor = "rgb(0, 255, 0)";
          spawn();
        } else if (squareColumn == 8 && goalThreeMade == false) {
          goalThreeMade = true;
          document.getElementById("19").style.backgroundColor = "rgb(0, 255, 0)";
          spawn();
        } else if (squareColumn == 11 && goalFourMade == false) {
          goalFourMade = true;
          document.getElementById("20").style.backgroundColor = "rgb(0, 255, 0)";
          spawn();
        } else if (squareColumn == 14 && goalFiveMade == false) {
          goalFiveMade = true;
          document.getElementById("21").style.backgroundColor = "rgb(0, 255, 0)";
          spawn();
        }
        if (goalOneMade == true && goalTwoMade == true && goalThreeMade == true && goalFourMade == true && goalFiveMade == true) {
          allowInput = false;
          document.getElementById("29").style.zIndex = "5";
          document.getElementById("30").style.zIndex = "6";
          document.getElementById("31").style.zIndex = "6";
        }
      }
    }

    function restart() {
      allowInput = true;
      document.getElementById("29").style.zIndex = "-5";
      document.getElementById("30").style.zIndex = "-6";
      document.getElementById("31").style.zIndex = "-6";
      document.getElementById("17").style.backgroundColor = "red";
      document.getElementById("18").style.backgroundColor = "red";
      document.getElementById("19").style.backgroundColor = "red";
      document.getElementById("20").style.backgroundColor = "red";
      document.getElementById("21").style.backgroundColor = "red";
      goalOneMade = false;
      goalTwoMade = false;
      goalThreeMade = false;
      goalFourMade = false;
      goalFiveMade = false;
    }

    function start() {
      started = true
      carOneMove();
      carTwoMove();
      carThreeMove();
      carFourMove();
      carFiveMove();
      carSixMove();
      carSevenMove();
      carEightMove();
      carNineMove();
      carTenMove();
      carElevenMove();
      carTwelveMove();
      carThirteenMove();
      carFourteenMove();
      carFifteenMove();
      document.getElementById("27").style.zIndex = "-3";
      document.getElementById("28").style.zIndex = "-3";
    }

    function carOneMove() {
      var elem = document.getElementById("2");
      var id = setInterval(frame, 70);
      function frame() {
        if (carOneLeft <= -100) {
          carOneLeft = 1500;
          elem.style.left = carOneLeft + 'px'
        } else {
          carOneLeft = carOneLeft - speedCar;
          elem.style.left = carOneLeft + 'px'
        }
        if ((carOneLeft <= squareLeft + 50 && carOneLeft >= squareLeft && squareRow == 2 && dead == false) || (carOneLeft + 100 <= squareLeft + 50 && carOneLeft + 100 >= squareLeft && squareRow == 2 && dead == false)) {
          document.getElementById("1").style.backgroundColor = "red";
          document.getElementById("1").style.zIndex = "1";
          started = false;
          killed();
        }
      }
    }

    function carTwoMove() {
      var elem = document.getElementById("3");
      var id = setInterval(frame, 70);
      function frame() {
        if (carTwoLeft >= 1500) {
          carTwoLeft = -100;
          elem.style.left = carTwoLeft + 'px'
        } else {
          carTwoLeft = carTwoLeft + speedCar;
          elem.style.left = carTwoLeft + 'px'
        }
        if ((carTwoLeft + 100 <= squareLeft + 50 && carTwoLeft + 100 >= squareLeft && squareRow == 3 && dead == false) || (carTwoLeft <= squareLeft + 50 && carTwoLeft >= squareLeft && squareRow == 3 && dead == false)) {
          document.getElementById("1").style.backgroundColor = "red"
          document.getElementById("1").style.zIndex = "1";
          started = false;
          killed();
        }
      }
    }

    function carThreeMove() {
      var elem = document.getElementById("4");
      var id = setInterval(frame, 70);
      function frame() {
        if (carThreeLeft <= -100) {
          carThreeLeft = 1500;
          elem.style.left = carThreeLeft + 'px'
        } else {
          carThreeLeft = carThreeLeft - speedCar;
          elem.style.left = carThreeLeft + 'px'
        }
        if ((carThreeLeft <= squareLeft + 50 && carThreeLeft >= squareLeft && squareRow == 2 && dead == false) || (carThreeLeft + 100 <= squareLeft + 50 && carThreeLeft + 100 >= squareLeft && squareRow == 2 && dead == false)) {
          document.getElementById("1").style.backgroundColor = "red"
          document.getElementById("1").style.zIndex = "1";
          started = false;
          killed();
        }
      }
    }

    function carFourMove() {
      var elem = document.getElementById("5");
      var id = setInterval(frame, 70);
      function frame() {
        if (carFourLeft >= 1500) {
          carFourLeft = -100;
          elem.style.left = carFourLeft + 'px'
        } else {
          carFourLeft = carFourLeft + speedCar;
          elem.style.left = carFourLeft + 'px'
        }
        if ((carFourLeft + 100 <= squareLeft + 50 && carFourLeft + 100 >= squareLeft && squareRow == 3 && dead == false) || (carFourLeft <= squareLeft + 50 && carFourLeft >= squareLeft && squareRow == 3 && dead == false)) {
          document.getElementById("1").style.backgroundColor = "red"
          document.getElementById("1").style.zIndex = "1";
          started = false;
          killed();
        }
      }
    }

    function carFiveMove() {
      var elem = document.getElementById("6");
      var id = setInterval(frame, 70);
      function frame() {
        if (carFiveLeft >= 1500) {
          carFiveLeft = -100;
          elem.style.left = carFiveLeft + 'px'
        } else {
          carFiveLeft = carFiveLeft + speedCar;
          elem.style.left = carFiveLeft + 'px'
        }
        if ((carFiveLeft + 100 <= squareLeft + 50 && carFiveLeft + 100 >= squareLeft && squareRow == 3 && dead == false) || (carFiveLeft <= squareLeft + 50 && carFiveLeft >= squareLeft && squareRow == 3 && dead == false)) {
          document.getElementById("1").style.backgroundColor = "red"
          document.getElementById("1").style.zIndex = "1";
          started = false;
          killed();
        }
      }
    }

    function carSixMove() {
      var elem = document.getElementById("7");
      var id = setInterval(frame, 70);
      function frame() {
        if (carSixLeft <= -100) {
          carSixLeft = 1500;
          elem.style.left = carSixLeft + 'px'
        } else {
          carSixLeft = carSixLeft - speedCar;
          elem.style.left = carSixLeft + 'px'
        }
        if ((carSixLeft <= squareLeft + 50 && carSixLeft >= squareLeft && squareRow == 2 && dead == false) || (carSixLeft + 100 <= squareLeft + 50 && carSixLeft + 100 >= squareLeft && squareRow == 2 && dead == false)) {
          document.getElementById("1").style.backgroundColor = "red"
          document.getElementById("1").style.zIndex = "1";
          started = false;
          killed();
        }
      }
    }

    function carSevenMove() {
      var elem = document.getElementById("8");
      var id = setInterval(frame, 70);
      function frame() {
        if (carSevenLeft >= 1500) {
          carSevenLeft = -100;
          elem.style.left = carSevenLeft + 'px'
        } else {
          carSevenLeft = carSevenLeft + speedFastCar;
          elem.style.left = carSevenLeft + 'px'
        }
        if ((carSevenLeft <= squareLeft + 50 && carSevenLeft >= squareLeft && squareRow == 5 && dead == false) || (carSevenLeft + 100 <= squareLeft + 50 && carSevenLeft + 100 >= squareLeft && squareRow == 5 && dead == false)) {
          document.getElementById("1").style.backgroundColor = "red"
          document.getElementById("1").style.zIndex = "1";
          started = false;
          killed();
        }
      }
    }

    function carEightMove() {
      var elem = document.getElementById("9");
      var id = setInterval(frame, 70);
      function frame() {
        if (carEightLeft >= 1500) {
          carEightLeft = -100;
          elem.style.left = carEightLeft + 'px'
        } else {
          carEightLeft = carEightLeft + speedFastCar;
          elem.style.left = carEightLeft + 'px'
        }
        if ((carEightLeft <= squareLeft + 50 && carEightLeft >= squareLeft && squareRow == 5 && dead == false) || (carEightLeft + 100 <= squareLeft + 50 && carEightLeft + 100 >= squareLeft && squareRow == 5 && dead == false)) {
          document.getElementById("1").style.backgroundColor = "red"
          document.getElementById("1").style.zIndex = "1";
          started = false;
          killed();
        }
      }
    }

    function carNineMove() {
      var elem = document.getElementById("10");
      var id = setInterval(frame, 70);
      function frame() {
        if (carNineLeft >= 1500) {
          carNineLeft = -100;
          elem.style.left = carNineLeft + 'px'
        } else {
          carNineLeft = carNineLeft + speedFastCar;
          elem.style.left = carNineLeft + 'px'
        }
        if ((carNineLeft <= squareLeft + 50 && carNineLeft >= squareLeft && squareRow == 5 && dead == false) || (carNineLeft + 100 <= squareLeft + 50 && carNineLeft + 100 >= squareLeft && squareRow == 5 && dead == false)) {
          document.getElementById("1").style.backgroundColor = "red"
          document.getElementById("1").style.zIndex = "1";
          started = false;
          killed();
        }
      }
    }

    function carTenMove() {
      var elem = document.getElementById("11");
      var id = setInterval(frame, 70);
      function frame() {
        if (carTenLeft <= -100) {
          carTenLeft = 1500;
          elem.style.left = carTenLeft + 'px'
        } else {
          carTenLeft = carTenLeft - speedFastCar;
          elem.style.left = carTenLeft + 'px'
        }
        if ((carTenLeft <= squareLeft + 50 && carTenLeft >= squareLeft && squareRow == 6 && dead == false) || (carTenLeft + 100 <= squareLeft + 50 && carTenLeft + 100 >= squareLeft && squareRow == 6 && dead == false)) {
          document.getElementById("1").style.backgroundColor = "red"
          document.getElementById("1").style.zIndex = "1";
          started = false;
          killed();
        }
      }
    }

    function carElevenMove() {
      var elem = document.getElementById("12");
      var id = setInterval(frame, 70);
      function frame() {
        if (carElevenLeft <= -100) {
          carElevenLeft = 1500;
          elem.style.left = carElevenLeft + 'px'
        } else {
          carElevenLeft = carElevenLeft - speedFastCar;
          elem.style.left = carElevenLeft + 'px'
        }
        if ((carElevenLeft <= squareLeft + 50 && carElevenLeft >= squareLeft && squareRow == 6 && dead == false) || (carElevenLeft + 100 <= squareLeft + 50 && carElevenLeft + 100 >= squareLeft && squareRow == 6 && dead == false)) {
          document.getElementById("1").style.backgroundColor = "red"
          document.getElementById("1").style.zIndex = "1";
          started = false;
          killed();
        }
      }
    }

    function carTwelveMove() {
      var elem = document.getElementById("13");
      var id = setInterval(frame, 70);
      function frame() {
        if (carTwelveLeft <= -100) {
          carTwelveLeft = 1500;
          elem.style.left = carTwelveLeft + 'px'
        } else {
          carTwelveLeft = carTwelveLeft - speedFastCar;
          elem.style.left = carTwelveLeft + 'px'
        }
        if ((carTwelveLeft <= squareLeft + 50 && carTwelveLeft >= squareLeft && squareRow == 6 && dead == false) || (carTwelveLeft + 100 <= squareLeft + 50 && carTwelveLeft + 100 >= squareLeft && squareRow == 6 && dead == false)) {
          document.getElementById("1").style.backgroundColor = "red"
          document.getElementById("1").style.zIndex = "1";
          started = false;
          killed();
        }
      }
    }

    function carThirteenMove() {
      var elem = document.getElementById("14");
      var id = setInterval(frame, 70);
      function frame() {
        if (carThirteenLeft >= 1500) {
          carThirteenLeft = -100;
          elem.style.left = carThirteenLeft + 'px'
        } else {
          carThirteenLeft = carThirteenLeft + speedVeryFastCar;
          elem.style.left = carThirteenLeft + 'px'
        }
        if ((carThirteenLeft <= squareLeft + 50 && carThirteenLeft >= squareLeft && squareRow == 7 && dead == false) || (carThirteenLeft + 100 <= squareLeft + 50 && carThirteenLeft + 100 >= squareLeft && squareRow == 7 && dead == false)) {
          document.getElementById("1").style.backgroundColor = "red"
          document.getElementById("1").style.zIndex = "1";
          started = false;
          killed();
        }
      }
    }

    function carFourteenMove() {
      var elem = document.getElementById("15");
      var id = setInterval(frame, 70);
      function frame() {
        if (carFourteenLeft >= 1500) {
          carFourteenLeft = -100;
          elem.style.left = carFourteenLeft + 'px'
        } else {
          carFourteenLeft = carFourteenLeft + speedVeryFastCar;
          elem.style.left = carFourteenLeft + 'px'
        }
        if ((carFourteenLeft <= squareLeft + 50 && carFourteenLeft >= squareLeft && squareRow == 7 && dead == false) || (carFourteenLeft + 100 <= squareLeft + 50 && carFourteenLeft + 100 >= squareLeft && squareRow == 7 && dead == false)) {
          document.getElementById("1").style.backgroundColor = "red"
          document.getElementById("1").style.zIndex = "1";
          started = false;
          killed();
        }
      }
    }

    function carFifteenMove() {
      var elem = document.getElementById("16");
      var id = setInterval(frame, 70);
      function frame() {
        if (carFifteenLeft >= 1500) {
          carFifteenLeft = -100;
          elem.style.left = carFifteenLeft + 'px'
        } else {
          carFifteenLeft = carFifteenLeft + speedVeryFastCar;
          elem.style.left = carFifteenLeft + 'px'
        }
        if ((carFifteenLeft <= squareLeft + 50 && carFifteenLeft >= squareLeft && squareRow == 7 && dead == false) || (carFifteenLeft + 100 <= squareLeft + 50 && carFifteenLeft + 100 >= squareLeft && squareRow == 7 && dead == false)) {
          document.getElementById("1").style.backgroundColor = "red"
          document.getElementById("1").style.zIndex = "1";
          started = false;
          killed();
        }
      }
    }

    function checkKeycode(event) {
      if (started == true) {
        var keyDownEvent = event || window.event,
        keycode = (keyDownEvent.which) ? keyDownEvent.which : keyDownEvent.keycode;

        if (keycode == 37 && allowInput == true) {
          if ((squareRow != 8) || (squareColumn == 4) || (squareColumn == 7) || (squareColumn == 10) || (squareColumn == 13)) {
            if (squareLeft - 100 > 0) {
              squareLeft = squareLeft - 100
              squareColumn = squareColumn - 1;
              console.log(squareColumn)
              squareLeftString = squareLeft.toString();
              document.getElementById("1").style.left = squareLeftString.concat("px");
            }
          }
        }
        if (keycode == 38 && allowInput == true) {
          if (squareBottom + 100 < 800) {
            squareBottom = squareBottom + 100
            squareRow = squareRow + 1;
            squareBottomString = squareBottom.toString();
            document.getElementById("1").style.bottom = squareBottomString.concat("px");
            checkForWin()
          }
        }
        if (keycode == 39 && allowInput == true) {
          if ((squareRow != 8) || (squareColumn == 3) || (squareColumn == 6) || (squareColumn == 9) || (squareColumn == 12)) {
            if (squareLeft + 100 < 1450) {
              squareLeft = squareLeft + 100
              squareColumn = squareColumn + 1;
              console.log(squareColumn)
              squareLeftString = squareLeft.toString();
              document.getElementById("1").style.left = squareLeftString.concat("px");
            }
          }
        }
        if (keycode == 40 && allowInput == true) {
          if (squareBottom - 100 > 0) {
            squareBottom = squareBottom - 100
            squareRow = squareRow - 1;
            squareBottomString = squareBottom.toString();
            document.getElementById("1").style.bottom = squareBottomString.concat("px");
          }
        }
        return false;
      }
    }

    document.onkeydown = checkKeycode;

    return (
      <div id="0" className="back">
        <div id="-1" className="ground"></div>
        <div id="-2" className="sideCover"></div>
        <div><img id="1" className="frog" src="https://www.classicgaming.cc/classics/frogger/images/icons/icon-frogger-pixel-512x512.png"></img></div>
        <div id="17" className="goalOne box"></div>
        <div id="18" className="goalTwo box"></div>
        <div id="19" className="goalThree box"></div>
        <div id="20" className="goalFour box"></div>
        <div id="21" className="goalFive box"></div>
        <div id="22" className="street streetOne"></div>
        <div id="23" className="street streetTwo"></div>
        <div id="24" className="street streetThree"></div>
        <div id="25" className="street streetFour"></div>
        <div id="26" className="street streetFive"></div>
        <div><img id="2" className="car carOne" src="https://www.classicgaming.cc/classics/frogger/images/icons/icon-frogger-pixel-car-128x128.png"></img></div>
        <div><img id="3" className="car carTwo" src="https://www.classicgaming.cc/classics/frogger/images/icons/icon-frogger-pixel-car-128x128.png"></img></div>
        <div><img id="4" className="car carThree" src="https://www.classicgaming.cc/classics/frogger/images/icons/icon-frogger-pixel-car-128x128.png"></img></div>
        <div><img id="5" className="car carFour" src="https://www.classicgaming.cc/classics/frogger/images/icons/icon-frogger-pixel-car-128x128.png"></img></div>
        <div><img id="6" className="car carFive" src="https://www.classicgaming.cc/classics/frogger/images/icons/icon-frogger-pixel-car-128x128.png"></img></div>
        <div><img id="7" className="car carSix" src="https://www.classicgaming.cc/classics/frogger/images/icons/icon-frogger-pixel-car-128x128.png"></img></div>

        <div><img id="8" className="car carSeven" src="https://www.classicgaming.cc/classics/frogger/images/icons/icon-frogger-pixel-racing-car-128x128.png"></img></div>
        <div><img id="9" className="car carEight" src="https://www.classicgaming.cc/classics/frogger/images/icons/icon-frogger-pixel-racing-car-128x128.png"></img></div>
        <div><img id="10" className="car carNine" src="https://www.classicgaming.cc/classics/frogger/images/icons/icon-frogger-pixel-racing-car-128x128.png"></img></div>

        <div><img id="11" className="car carTen" src="https://www.classicgaming.cc/classics/frogger/images/icons/icon-frogger-pixel-car-128x128.png"></img></div>
        <div><img id="12" className="car carEleven" src="https://www.classicgaming.cc/classics/frogger/images/icons/icon-frogger-pixel-car-128x128.png"></img></div>
        <div><img id="13" className="car carTwelve" src="https://www.classicgaming.cc/classics/frogger/images/icons/icon-frogger-pixel-car-128x128.png"></img></div>

        <div><img id="14" className="car carThirteen" src="https://www.classicgaming.cc/classics/frogger/images/icons/icon-frogger-pixel-racing-car-128x128.png"></img></div>
        <div><img id="15" className="car carFourteen" src="https://www.classicgaming.cc/classics/frogger/images/icons/icon-frogger-pixel-racing-car-128x128.png"></img></div>
        <div><img id="16" className="car carFifteen" src="https://www.classicgaming.cc/classics/frogger/images/icons/icon-frogger-pixel-racing-car-128x128.png"></img></div>

        <div id="27" className="startFrame"></div>
        <button onClick={() =>start()} id="28" className="startButton">Start!</button>

        <div id="29" className="endFrame"></div>
        <div id="30" className="endText">You Win!</div>
        <button onClick={() =>restart()} id="31" className="restartButton">Restart?</button>
      </div>
    );
  }
}