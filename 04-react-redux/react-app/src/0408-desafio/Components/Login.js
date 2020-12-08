import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/login";

const useForm = (state, setState) => ({
  value: state,
  onChange: ({ target }) => setState(target.value),
  style: {
    display: "block",
    marginBottom: "0.25rem",
  },
});

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(login({ username, password }));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Usuário"
          {...useForm(username, setUsername)}
        />
        <input
          type="password"
          placeholder="Senha"
          {...useForm(password, setPassword)}
        />

        <button>Enviar</button>
      </form>
    </div>
  );
};

export default Login;
