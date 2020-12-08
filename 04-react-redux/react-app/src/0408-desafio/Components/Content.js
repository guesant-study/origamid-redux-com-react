import React from "react";
import { useSelector } from "react-redux";
import Login from "./Login";
import Photos from "./Photos";

const Content = () => {
  const { user, token } = useSelector((state) => state.login);

  if (user.loading || token.loading) return <div>Carregando..</div>;
  if (user.data) {
    return <Photos />;
  } else {
    return <Login />;
  }
};

export default Content;
