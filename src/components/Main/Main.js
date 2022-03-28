import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Main.scss";

const Main = () => {
  let navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("auth");
    if (!auth) navigate("/login");
    return () => {};
  }, []);

  return <div>123</div>;
};

export default Main;
