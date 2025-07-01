import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./routes/nav/nav.jsx";
import Main from "./routes/main/main.jsx";
import Body from "./routes/body/body.jsx"
import Footer from "./routes/footer/footer.jsx"


function App() {
  return (
    <>
    <div className="hero-section">
      <div className="background-fader"></div>
      <Nav />
      <Main />
    </div>
    <div className="body-section">
     <Body />
    </div>
    <Footer />
    </>
  );
}

export default App;




