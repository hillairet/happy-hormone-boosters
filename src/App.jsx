import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { ChemicalCard } from "./ChemicalCard.jsx";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css"; //easy CSS flex

import { ActivityList } from "./ActivityList";
import data from "./static.json";

// Card: https://www.primefaces.org/primereact/card/
// Grid system responsive at bottom of: https://www.primefaces.org/primeflex/gridsystem
// Update list of components: https://beta.reactjs.org/reference/react/useState#examples-objects

function App() {
  const [count, setCount] = useState(0);
  const [state, setState] = useState(false);

  return (
    <div className="App">
      <h1>Happy hormone boosters</h1>
      <div class="grid">
        {data.map((chem) => (
          <div class="col-12 lg:col-6">
            <ChemicalCard {...chem} >
              <ActivityList activities={chem.activities} />
            </ChemicalCard>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
