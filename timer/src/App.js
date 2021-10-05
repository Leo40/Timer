import Body from './components/Body';
import Footer from './components/Footer';
import './App.css';
import React, { useState } from 'react';

function App() {

  const [seconds, setSeconds] = useState(3);
  const [minutes, setMinutes] = useState(50);
  const [flag, setFlag] = useState(false);

  return (
    <>
      <Body seconds={seconds} setSeconds={setSeconds} minutes={minutes} setMinutes={setMinutes} flag={flag} setFlag={setFlag}/>
      <Footer />
    </>
  );
}

export default App;
