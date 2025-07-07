import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './component/Navbar';
import Notepad from './component/Notepad';
import Alert from './component/Alert';
import About from './component/About';
import Feature from './component/Feature';
import Project from './component/Project';



import './App.css';

function App() {
  const [mode, setMode] = useState(true);
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const enabaleMode = () => {
    if (mode) {
      setMode(false);
      document.body.style.background = 'radial-gradient(#6161Fa, #4242F5)';
      showAlert("Light mode has been enabled", "success");
    } else {
      setMode(true);
      document.body.style.background = '#282c34';
      showAlert("Dark mode has been enabled", "success");
    }
  };

  const handleCloseAlert = () => {
    setAlert(null);
  };

  return (
    <Router>
      <Alert alert={alert} onClose={handleCloseAlert} />
      <Navbar mode={mode} enabaleMode={enabaleMode} />
      <Routes>
        <Route path="/Home" element={<Notepad mode={mode} showAlert={showAlert} />} />
        <Route path='/Feature' element={<Feature />}/>
        <Route path='/Project' element={<Project />}/>
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
