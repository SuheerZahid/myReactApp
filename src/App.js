import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';
import React, { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "Suheer - Dark Mode";
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "#252525";
      showAlert("Light Mode has been enabled", "success");
      document.title = "Suheer - Light Mode";
    }
  }


  return (
    <>
      {/* <Navbar title="Suheer" aboutText="About Us" /> */}
      {/* <Navbar /> */}
      {/* <Router> */}
      <Navbar title="Suheer" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch> */}
        {/* <Route exact path="/about">
              <About />
            </Route> */}

        {/* <Route exact path="/"> */}
        <Textform showAlert={showAlert} heading="Enter the text to analyze" />
        {/* </Route>
          </Switch> */}
      </div>

      {/* <About /> */}
    {/* </Router> */}

    </>
  );
}

export default App;
