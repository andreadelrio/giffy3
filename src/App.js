import React from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";
import Route from "wouter";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <ListOfGifs keyword="keyboard" />
      </section>
    </div>
  );
}

export default App;
