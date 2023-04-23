import React, { useRef, useState } from 'react'
import '../styles/App.css';
const App = () => {
  const startTime = useRef(Date.now());
  const intervalRef = useRef(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [laps, setLaps] = useState([]);
  const handlestart=()=>{
    clearInterval(intervalRef.current);
    intervalRef.current=setInterval(() => {
      setCurrentTime(Date.now()-startTime.current)
    }, 10);
  }
 return (
    <div id="main">
      <section>
        <h1 className='seconds-elapsed'>{(currentTime/1000).toFixed(3)}</h1>
       <section className='buttons'>
          <button className="start-btn" onClick={()=>handlestart()}>START</button>
          <button className="stop-btn" onClick={()=>clearInterval(intervalRef.current)}>STOP</button>
          <button className="lap-btn" onClick={()=>setLaps([...laps,currentTime/1000])}>LAP</button>
          <button className="reset-btn" onClick={()=>{startTime.current=Date.now(),setCurrentTime(Date.now()-startTime.current)}}>RESET</button>
        </section>
      </section>
      <section className='lap-section'>
        <h2>Laps</h2>
        <section className='laps'>
          {laps.map(lap=><p>{lap}</p>)}
        </section>
      </section>
    </div>
  )
}


export default App;
