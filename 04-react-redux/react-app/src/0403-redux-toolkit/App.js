import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementar, reduzir } from "./store/contador";
import { abrir, fechar } from "./store/modal";

const App = () => {
  const { contador, modal } = useSelector((state) => state);
  const dispatch = useDispatch();
  return (
    <div>
      {modal && <h1>Total: {contador}</h1>}
      <button onClick={() => dispatch(incrementar())}>Incrementar</button>
      <button onClick={() => dispatch(reduzir())}>Reduzir</button>
      <hr />
      <button onClick={() => dispatch(abrir())}>Abrir</button>
      <button onClick={() => dispatch(fechar())}>Fechar</button>
    </div>
  );
};

export default App;
