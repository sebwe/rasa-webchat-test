import React from 'react';
import './App.css';
import { Widget } from "rasa-webchat";

const App = () => {
  return (
    <div className="App">
      <Widget
        title={"My chat"}
        socketUrl={"http://localhost:5005"}
        socketPath={"/socket.io/"}
      />
    </div>
  );
}

export default App;
