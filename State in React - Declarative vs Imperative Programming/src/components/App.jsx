import React from "react";

let isDone = false;

function strike() {
  isDone = true;
}

function unstrike() {
  isDone = false;
}

export default function App() {
  return (
    <div>
      <p>Buy Milk</p>
      <button onClick={strike}>Strike</button>
      <button onClick={unstrike}>Unstrike</button>
    </div>
  )
}