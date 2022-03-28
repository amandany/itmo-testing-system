import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.clear();
    navigate("/login");
    return () => {};
  }, []);

  return <></>;
};

export default LogOut;
