import React from 'react'
import ChildComponent from './ChildComponent'
import './firstComponentStyles.css'

function FirstComponent() {
let lastName = 'Ogg'
const func1 = () => {
  return 10*2
}

  return (
    <div>
      <h1 style={{color: 'red', backgroundColor: 'green'}}>First</h1>
      <ChildComponent/>
      <p className='parStyle'>Hello</p>
      <p>{func1()}</p>
      <p>{lastName}</p>
      <button id='btn1'>click me</button>
    </div>);
}

export default FirstComponent
