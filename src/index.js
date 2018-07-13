import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import "./index.html";

function App() {
  return (
    <div className="App">
      <h1>Push the button to see some magic happen!</h1>
      <h3></h3>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
var randomlinks = new Array()

randomlinks[0] = "https://www.youtube.com/"
randomlinks[1] = "http://google.com"
randomlinks[2] = "http://iamirishgreen.blogspot.com/"
randomlinks[3] = "http://cnn.com"
randomlinks[4] = "http://weavesilk.com/"
randomlinks[5] = "https://www.polkadotgame.com/"
randomlinks[6] = "https://www.fireboynwatergirl.com/"
randomlinks[7] = "https://n-blox.com/"
randomlinks[8] = "https://www.websudoku.com/?level=4"
randomlinks[9] = "https://elgoog.im/"
randomlinks[10] = "https://playsnake.org/"
randomlinks[11] = "http://surviv.io/"
randomlinks[12] = "https://skribbl.io/"
randomlinks[13] = "http://agar.io/#ffa"
randomlinks[14] = "http://moomoo.io"
randomlinks[15] = "https://ih1.redbubble.net/image.216441511.5583/st%2Csmall%2C215x235-pad%2C210x230%2Cf8f8f8.lite-1.jpg"

function randomlink() {
  window.location = randomlinks[Math.floor(Math.random() * randomlinks.length)]
}