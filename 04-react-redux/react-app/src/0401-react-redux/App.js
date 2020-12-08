import React from "react";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Total: {state}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENTAR" });
        }}
      >
        Incrementar
      </button>
    </div>
  );
};

export default App;
