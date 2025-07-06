import Navbar from './component/Navbar';
import Notepad from './component/Notepad';
import Alert from './component/Alert';

import './App.css';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState(true);
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => {
      setAlert(null)
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
    <>
      <Alert alert={alert} onClose={handleCloseAlert} />
      <Navbar mode={mode} enabaleMode={enabaleMode} />
      <Notepad mode={mode} showAlert={showAlert}/>
    </>
  );
}

export default App;
