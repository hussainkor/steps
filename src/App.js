import React, { useState } from 'react';
import './index.css';

const message = [
  'Learn React *',
  'Apply for Jobs#',
  'Yay! I got a job',
  'Invest your new Income!',
  'Yes started the Investing journey'
]

function App() {
  return <div>
    <Steps />
  </div>
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step <= message.length - 1) {
      setStep((s) => s + 1);
    }
  }

  return <>
    <button onClick={() => setIsOpen((is) => !is)} className='open-close-btn'>{isOpen ? 'Close' : 'Open'}</button>
    {isOpen && <div className='steps'>
      <div className='numbers'>
        {message.map((name, i) => {
          return <div className={step >= i + 1 ? 'active' : ''} key={i}>{i + 1}</div>
        })}
      </div>
      <p className='message'><span className='stepper'>Step {step}:</span> {message[step - 1]}</p>

      <div className='buttons'>
        {step > 1 && <button onClick={handlePrevious}>Previous</button>}
        {step < message.length && <button onClick={handleNext}>Next</button>}
      </div>
    </div>
    }</>
}

export default App;