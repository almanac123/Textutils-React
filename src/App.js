import "./App.css";
import React, { useState } from "react";
// import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
  
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [color, setColor] = useState("success");
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setColor("primary");
      document.body.style.backgroundColor = "#16103e";
      showAlert("dark mode has been enabled", "success");
      document.title = 'Textutils-Dark Mode'
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled", "success");
      setColor("warning");
      document.title = 'Textutils-Light Mode'

    }
  };
  // const redMode = () => {
  //   if (mode === "light" || "dark") {
  //     setMode('danger')
  //     document.body.style.backgroundColor = "red";
  //     setColor("success");
  //     showAlert("red mode has been enabled", "success");
  //   }
  //   else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     setColor("light");
  //     showAlert("light mode has been enabled", "success");
  //   }
  // };
  return (
    <>
      {/* <Router> */}
        <Navbar
          title="Textutils2 "
          mode={mode}
          toggleMode={toggleMode}
        // redMode={redMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/"> */}
              <TextForm
                showAlert={showAlert}
                heading="Enter text to analyse"
                mode={mode}
                color={color}
              />
            {/* </Route>
          </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
