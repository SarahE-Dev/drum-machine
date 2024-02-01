import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import {Container} from 'react-bootstrap'
import { useEffect } from 'react'
import { useState } from 'react'

const drumpad = [
  {
    keyCode: 81,
    text: "Q",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  } ,
  {
    keyCode: 87,
    text: 'W',
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyCode: 69,
    text: "E",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyCode: 65,
    text: "A",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    text: "S",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode: 68,
    text: "D",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode: 90,
    text: "Z",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCode: 88,
    text: "X",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyCode: 67,
    text: "C",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
  

  
]


function App() {
  const [display, setDisplay] = useState('')
  useEffect(()=>{
    document.addEventListener('keydown', (e)=>{
      
      playSound(e.key.toUpperCase())
    })
  })
  const playSound=(selector)=>{
    const audio = document.getElementById(selector)
    audio.play()
    setDisplay(selector)
    
  }

  return (
    <div>
        <Container id="drum-machine">
          <div className="container" id="display" ></div>
            {display}
            <div className="drumpads" style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}}>
            {drumpad.map((drum)=><div key={drum.src} onClick={()=>playSound(drum.text)} className='drum-pad' style={{fontSize: 30, border: '3px solid black', padding: '30px'}} id={drum.text + 'Key'}>{drum.text}
            <audio id={drum.text} className='clip' src={drum.src}></audio>
            </div>)}
            </div>
          
          <div className="container">
         </div>
         </Container>   
          
        
      </div>
  )
}

export default App


