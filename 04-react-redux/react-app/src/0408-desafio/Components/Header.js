import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/login";

const Header = () => {
  const { user, token } = useSelector((state) => state.login);
  const dispatch = useDispatch();

  function handleLogOut() {
    dispatch(logout());
  }

  const loading = user.loading || token.loading;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>Mini Dogs</h1>
      <button disabled={!user.data || loading} onClick={handleLogOut}>
        {loading ? "Carregando..." : "LogOut"}
      </button>
    </div>
  );
};

export default Header;
