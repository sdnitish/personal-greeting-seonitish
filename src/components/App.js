
import React, { useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [name, setName] = useState("");
  return (
    <div>
      {/* Do not remove the main div */}
      <p>Enter your name:</p>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        data-testid="name"
      />
      {
        name ? (
          <p data-testid="greet-text">Hello, {name} !</p>
        ) : null
      }
    </div>
  );
};

export default App;

