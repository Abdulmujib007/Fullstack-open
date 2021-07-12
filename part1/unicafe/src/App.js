
import React, { useState } from 'react'
import Header from './components/Header'
import Button from './components/Button'
import Display from './components/Display'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const header = 'give feedback'
  const handleGoodClick = () => setGood(good + 1)
  const handleNeutralClick = () => setNeutral(neutral + 1)
  const handlebadClick = () => setBad(bad + 1)

  return (
    <div>
      <Header header= {header}/>
      <Button handleClick={handleGoodClick} text='Good' />
      <Button handleClick={handleNeutralClick} text='Neutral' />
      <Button handleClick= {handlebadClick} text= 'Bad' />
      <Header header = 'statistics'/>
      <Display name = 'Good' count ={good}/>
      <Display name = 'Neutral' count = {neutral} />  
      <Display name = 'Bad' count = {bad} />  
    </div>
  )
}

export default App