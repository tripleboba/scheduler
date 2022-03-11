import React, {useState} from "react";

export default function useVisualMode(initial) {
  
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(mode, replace = false) {
    setMode(mode);
    if (replace) setHistory(history => [...history.slice(0, -1), mode]);
    else setHistory(history => ([...history, mode]));
  };

  function back() {
    if (history.length === 1) return;
    setHistory(history.slice(0, -1));
    setMode(history[history.length - 2]);
  };

  return {mode, transition, back};
}