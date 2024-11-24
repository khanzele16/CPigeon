import { ChevronDown } from "lucide-react";
import "./App.css";

const marque_text = [
  "$CPIGEON",
  "$CPIGEON",
  "$CPIGEON",
  "$CPIGEON",
  "$CPIGEON",
  "$CPIGEON",
  "$CPIGEON",
  "$CPIGEON",
  "$CPIGEON",
  "$CPIGEON",
  "$CPIGEON",
  "$CPIGEON",
  "$CPIGEON",
  "$CPIGEON",
  "$CPIGEON",
  "$CPIGEON",
];

function App() {
  return (
    <div id="main" className="App">
      <header>
        <a href="#main">
          <p>MAIN</p>
        </a>
        <a href="#about">
          <p>ABOUT $CPIGEON</p>
        </a>
        <a href="#join">
          <p>JOIN US</p>
        </a>
      </header>
      <div className="App-div">
        <div className="App-div-1">
          <div className="App-div-1-marque">
            <ul className="App-div-1-marque-list">
              {marque_text.map((el, index) => (
                <li key={index}>{el}</li>
              ))}
            </ul>
          </div>
          <div className="App-div-1-main">
            <div className="App-div-1-main-text">
              <p id="hello-crusty">
                Hello, I'm <span style={{ color: "#FFFA5B" }}>CRUSTY!</span>
              </p>
              <p id="one-of-the">
                — one of the
                <br />
                fastest growing
              </p>
              <p style={{ color: "#FFFA5B" }} id="memtoken">
                memecoin
              </p>
            </div>
            <img src="./pigeon_1.gif" alt="" />
          </div>
          <div className="App-div-1-scroll">
            <ChevronDown size={60} />
            <p>Scroll and Read</p>
          </div>
        </div>
        <div id="about" className="App-div-2">
          <div className="App-div-2-main">
            <img src="./pigeon_2.gif" alt="" />
            <div className="App-div-2-main-text">
              <div className="App-div-2-main-text-question">
                <p id="question-1">?</p>
                <p id="question-2">?</p>
                <p id="question-3">?</p>
                <p id="question-4">?</p>
              </div>
              <ul className="App-div-2-main-texts">
                <h3 style={{ textTransform: "uppercase" }}>Who is $CPIGEON</h3>
                <li>$CPIGEON — Chill Pigeon.</li>
                <li>His real name is Crusty.</li>
                <li>Token was created recently,</li>
                <li>But we already did many things</li>
                <li>And it’s just memtoken :-))</li>
              </ul>
            </div>
          </div>
          <div className="App-div-2-scroll">
            <ChevronDown size={60} />
            <p>Scroll and Join</p>
          </div>
        </div>
        <div id="join" className="App-div-3">
          <h2>JOIN THE $CPIGEON MOVEMENT?</h2>
          <div className="App-div-3-main">
            <img src="./pigeon_3.gif" alt="" />
            <div className="App-div-3-main-text">
              <h4>Follow us for updates in...</h4>
              <ul className="App-div-3-main-text-list-1">
                <a href="https://t.me/chill_pigeon">
                  <li>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/5968/5968804.png"
                      alt=""
                    />
                  </li>
                </a>
                <a href="https://x.com/chillpigeon_sol">
                  <li>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/5969/5969020.png"
                      alt=""
                    />
                  </li>
                </a>
              </ul>
              <h4>$CPEGION’s creators:</h4>
              <ul className="App-div-3-main-text-list-2">
                <a href="https://t.me/khanzele">
                  <li>
                    <img
                      src="./khanzele.jpg"
                      alt=""
                    />
                  </li>
                </a>
                <a href="https://t.me/magyla">
                  <li>
                    <img
                      src="./magyla.jpg"
                      alt=""
                    />
                  </li>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
//** 1. Telegram | 2. X */
//** 1. Telegram (Влада) | 2. Telegram (magyla) */
