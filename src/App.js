import { useState } from 'react';
import './App.css';
import './index.css';
import About from './components/About';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light'); //Whether dark mode is enabled or not
  const [text, setText] = useState('🌙Enable Dark Mode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggle = () => {
    if (Mode === 'light') {
      setMode('dark');
      setText('🌄Enable Light Mode');
      document.body.style.backgroundColor = '#012442';
      
      // if(document.getElementById('myBox'))
      // {
      //   document.getElementById('myBox').style.backgroundColor = '#044d8c'
      // }

      showAlert("Dark Mode Has Been Enabled", "success");
      document.title = 'TextUtils - Dark Mode';
    } 
    else {
      setMode('light');
      setText('🌙Enable Dark Mode');
      document.body.style.backgroundColor = 'white';
      // if(document.getElementById('myBox')!==null){
      //   document.getElementById('myBox').style.backgroundColor = 'white';
      // }
      showAlert("Light Mode Has Been Enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
    <Router>
      <NavBar title="Blog" aboutText="About us" mode={Mode} toggleMode={toggle} modeInfo={text} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About mode={Mode}/>} />
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={Mode} showAlert={showAlert} />} />
        </Routes>
      </div>
    </Router>
    </>
    //<NavBar title="Blog" aboutText="About us" mode={Mode} toggleMode={toggle} modeInfo={text} />
    // <Alert alert={alert} />
    // <div className="container my-3">
    //   <TextForm heading="Enter the text to analyze below" showAlert={showAlert} />
    // </div>
    // </>
  );
}

export default App;