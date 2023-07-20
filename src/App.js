import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";

// this is old version for switch installation         npm install react-router-dom@5

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //wheter dark mode is enable or not
  const [alert, setAlert] = useState("null");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    // setTimeout(() => {
    //   setAlert(null);
    // }, 1500);
  };

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#042743";
      showAlert("Dark mode hase enabled", "success");
      document.title = "Textutils-DarkMode";

      // setInterval(() => {
      //   document.title = "Textutils is Amazind Mode";
      // }, 2000);

      // setInterval(() => {
      //   document.title = " Install Textutils Now";
      // }, 2500);
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light mode hase enabled", "success");
      document.title = "Textutils-LightMode";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="textutlis2"
          about="About us"
          mode={mode}
          togglemode={togglemode}
        />
        <Alert alert={alert} />

        <div className="container my-3">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>


            {/* this is for exact command
            users ---> component 1
            users//home ---> component 2 */}

            <Route exact path="/">
              <Textform
                showAlert={showAlert}
                heading="enter the text to analyze"
                mode={mode}
              />
            </Route>
          </Switch>
        </div>

        {/* <About /> */}
      </Router>
    </>
  );
}

export default App;
