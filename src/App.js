
import Navbar from './component/Navbar';
import Notepad from './component/Notepad';

import './App.css';
import { useState } from 'react';



function App() {

  const [mode, setMode] = useState(true);

  const enabaleMode = () => {
    if(mode){
      setMode(false);
      document.body.style.background = 'radial-gradient(#6161Fa, #4242F5 )';
    }else{
      setMode(true);
      document.body.style.background = '#282c34';
    }
  }

  return (
    <>
    <Navbar mode={mode} enabaleMode={enabaleMode}/>
    <Notepad mode={mode}/>
    </>
  );
}

export default App;
