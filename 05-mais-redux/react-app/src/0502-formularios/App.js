import React from "react";
import { useDispatch } from "react-redux";
import { adicionarData } from "./store/date";

const useForm = (state, setState) => ({
  value: state,
  onChange: ({ target }) => setState(target.value),
});

const App = () => {
  const [partida, setPartida] = React.useState("");
  const [retorno, setRetorno] = React.useState("");

  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(adicionarData({ partida, retorno }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="partida">Partida</label>
        <input id="partida" type="date" {...useForm(partida, setPartida)} />
      </p>
      <p>
        <label htmlFor="retorno">Retorno</label>
        <input id="retorno" type="date" {...useForm(retorno, setRetorno)} />
      </p>
      <button>Buscar</button>
    </form>
  );
};

export default App;
