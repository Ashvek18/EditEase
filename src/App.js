import React, { useState } from 'react'
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode,setmode]=useState('light');
  const [alert,setalert]=useState('null');

  const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null);
    },1000);
  }

  const togglemode=()=>{
    if(mode=== 'light'){
      setmode('dark')
      document.body.style.backgroundColor='black';
      document.body.style.color='white';
      showalert(" Dark mode has been enabled","success");
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white';
      document.body.style.color='#212529';
      showalert(" Light mode has been enabled","success");
    }
  }
  return (
    <>
<Navbar mode={mode} togglemode={togglemode}/>
<Alert alert={alert}/>
<div className="container my-3">
          
<TextForm showalert={showalert} heading="Enter your text to analyze:"/>
<About />
</div>  
    </>
  );
}

export default App;
