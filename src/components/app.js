import React, { Component } from 'react';

export default class App extends Component {
  render() {

    var squareLeft = 725;
    var squareLeftString = "725"
    var squareBottom = 25;
    var squareBottomString = "25"
    
    var allowInput = true;


    function checkKeycode(event) {
      var keyDownEvent = event || window.event,
      keycode = (keyDownEvent.which) ? keyDownEvent.which : keyDownEvent.keycode;

      if (keycode == 37 && allowInput == true) {
        if (squareLeft - 100 > 0) {
          squareLeft = squareLeft - 100
          squareLeftString = squareLeft.toString();
          document.getElementById("1").style.left = squareLeftString.concat("px");
        }
      }
      if (keycode == 38 && allowInput == true) {
        if (squareBottom + 100 < 800) {
          squareBottom = squareBottom + 100
          squareBottomString = squareBottom.toString();
          document.getElementById("1").style.bottom = squareBottomString.concat("px");
        }
      }
      if (keycode == 39 && allowInput == true) {
        if (squareLeft + 100 < 1450) {
          squareLeft = squareLeft + 100
          squareLeftString = squareLeft.toString();
          document.getElementById("1").style.left = squareLeftString.concat("px");
        }
      }
      if (keycode == 40 && allowInput == true) {
        if (squareBottom - 100 > 0) {
          squareBottom = squareBottom - 100
          squareBottomString = squareBottom.toString();
          document.getElementById("1").style.bottom = squareBottomString.concat("px");
        }
      }

      return false;
    }

    document.onkeydown = checkKeycode;

    return (
      <div id="0" className="back">
        <div><img id="1" className="frog" src="http://www.classicgaming.cc/classics/frogger/images/icons/icon-frogger-pixel-512x512.png"></img></div>
        <div id="17" className="goalOne box"></div>
        <div id="18" className="goalTwo box"></div>
        <div id="19" className="goalThree box"></div>
        <div id="20" className="goalFour box"></div>
        <div id="21" className="goalFive box"></div>
        <div id="22" className="street streetOne"></div>
        <div id="23" className="street streetTwo"></div>
        <div id="24" className="canal canalOne"></div>
        <div id="25" className="canal canalTwo"></div>
        <div id="26" className="canal canalThree"></div>
        <div><img id="2" className="car carOne" src="http://www.classicgaming.cc/classics/frogger/images/icons/icon-frogger-pixel-car-128x128.png"></img></div>
        <div><img id="3" className="car carTwo" src="http://www.classicgaming.cc/classics/frogger/images/icons/icon-frogger-pixel-car-128x128.png"></img></div>
        <div><img id="4" className="car carThree" src="http://www.classicgaming.cc/classics/frogger/images/icons/icon-frogger-pixel-car-128x128.png"></img></div>
        <div><img id="5" className="car carFour" src="http://www.classicgaming.cc/classics/frogger/images/icons/icon-frogger-pixel-car-128x128.png"></img></div>
        <div><img id="6" className="car carFive" src="http://www.classicgaming.cc/classics/frogger/images/icons/icon-frogger-pixel-racing-car-128x128.png"></img></div>
        <div><img id="7" className="car carSix" src="http://www.classicgaming.cc/classics/frogger/images/icons/icon-frogger-pixel-racing-car-128x128.png"></img></div>
        <div><img id="8" className="log logOne" src="http://www.classicgaming.cc/classics/frogger/images/icons/icon-frogger-pixel-log-128x128.png"></img></div>
        <div><img id="9" className="log logTwo" src="http://www.classicgaming.cc/classics/frogger/images/icons/icon-frogger-pixel-log-128x128.png"></img></div>
        <div><img id="10" className="log logThree" src="http://www.classicgaming.cc/classics/frogger/images/icons/icon-frogger-pixel-log-128x128.png"></img></div>
        <div><img id="11" className="log logFour" src="http://www.classicgaming.cc/classics/frogger/images/icons/icon-frogger-pixel-log-128x128.png"></img></div>
        <div><img id="12" className="log logFive" src="http://www.classicgaming.cc/classics/frogger/images/icons/icon-frogger-pixel-log-128x128.png"></img></div>
        <div><img id="13" className="log logSix" src="http://www.classicgaming.cc/classics/frogger/images/icons/icon-frogger-pixel-log-128x128.png"></img></div>
        <div><img id="14" className="log logSeven" src="http://www.classicgaming.cc/classics/frogger/images/icons/icon-frogger-pixel-log-128x128.png"></img></div>
        <div><img id="15" className="log logEight" src="http://www.classicgaming.cc/classics/frogger/images/icons/icon-frogger-pixel-log-128x128.png"></img></div>
        <div><img id="16" className="log logNine" src="http://www.classicgaming.cc/classics/frogger/images/icons/icon-frogger-pixel-log-128x128.png"></img></div>
      </div>
    );
  }
}