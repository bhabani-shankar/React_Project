import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextArea from './Components/TextArea';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled","success");
    }
  }
  return (
    <>
    <Router>
    <Navbar title="Home" content="React Basics" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container'>
      <Routes>
        <Route path="/" element={<TextArea heading="Enter the text:" showAlert={showAlert} mode={mode}/>} />
        <Route path="/about" element={<About/>} />
        </Routes>
    
    </div>
    {/* <div className="container">
      <About/>
    </div> */}
    </Router>
    </>
  );
}

export default App;
