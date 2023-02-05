import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ChemicalCard } from './ChemicalCard.jsx'
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import "primeflex/primeflex.css";                                  //easy CSS flex


// Card: https://www.primefaces.org/primereact/card/
// Grid system responsive at bottom of: https://www.primefaces.org/primeflex/gridsystem
// Update list of components: https://beta.reactjs.org/reference/react/useState#examples-objects

function App() {
  const [count, setCount] = useState(0)
  const [state, setState] = useState(false)

  return (
    <div className="App">
      <h1>Happy hormone boosters</h1>
      <div class="grid">
          <div class="col-12 lg:col-6"><ChemicalCard chemical="Dopamin" description='The reward chemical' activities={['Completing a task', 'Doing self-care activities', 'Eating food', 'Celebrating little wins']} color='PapayaWhip'/></div>
          <div class="col-12 lg:col-6"><ChemicalCard chemical="Oxytocin" description='The love hormone' activities={['Playing with a dog', 'Playing with a baby', 'Holding hands', 'Hugging your family', 'Giving compliments']} color='LightCyan'/></div>
          <div class="col-12 lg:col-6"><ChemicalCard chemical="Serotonin" description='The mood stabilizer' activities={['Meditating', 'Running', 'Sun exposure', 'Walk in nature', 'Swimming', 'Cycling']} color='HoneyDew'/></div>
          <div class="col-12 lg:col-6"><ChemicalCard chemical="Endorphin" description='The pain killer' activities={['Laughter exercises', 'Essential oils', 'Watch a comedy', 'Dark chocolate', 'Exercising']} color='LightYellow'/></div>
      </div>

    </div>
  )
}

export default App
