import React from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import Content from "./Components/Content";
import Header from "./Components/Header";
import { autoLogin } from "./store/login";

const App = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(autoLogin());
  }, [dispatch]);
  return (
    <div className="container App">
      <Header />
      <Content />
    </div>
  );
};

export default App;
