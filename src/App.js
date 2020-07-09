import React from "react";
import DragDrop from "./dragdrop";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: "linear-gradient(to right, lightBlue , lightPink)",
      }}
    >
      <DragDrop></DragDrop>
    </div>
  );
}

export default App;
