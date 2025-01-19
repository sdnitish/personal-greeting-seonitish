
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
  const [name, setName] = useState("");
  return (
    <div>
        {/* Do not remove the main div */}
        <input type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} />
         name? <h2>Hello {name}!</h2> 
    </div>
  )
}

export default App
