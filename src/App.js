import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import MainPage from "./components/MainPage";
import "./App.css";

function App() {
  const [showLanding, setShowLanding] = useState(false);

  const timeover = () => {
    setTimeout(() => {
      setShowLanding(false);
    }, 3000);
  };

  return (
    <div className="App">
      {showLanding ? <LandingPage /> : <MainPage />}
      {timeover()}
    </div>
  );
}

export default App;
