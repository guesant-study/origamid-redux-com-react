import React from "react";
import { connect } from "react-redux";

const App = (props) => {
  const { contador, incrementar } = props;
  return (
    <div>
      <h1>Total: {contador}</h1>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { contador: state };
};

const mapDispatchToProps = {
  incrementar: () => ({ type: "INCREMENTAR" }),
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
