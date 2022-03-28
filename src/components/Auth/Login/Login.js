import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  let navigate = useNavigate();
  const SubmitForm = (e) => {
    e.preventDefault();
    console.log(e.target[0].value, e.target[1].value);
    localStorage.setItem('auth', `${e.target[0].value};${e.target[1].value}`);
    navigate('/')
  };

  return (
    <div className="Login">
      <form
        className="form"
        onSubmit={(event) => {
          SubmitForm(event);
        }}
      >
        <h1 className="form-header">Авторизация</h1>
        <label className="form-label">
          <input placeholder="Логин" type="login" required name="login" />
        </label>
        <label className="form-label">
          <input placeholder="Пароль" type="password" name="password" autoComplete="on" required />
        </label>
        <input className="form-input" type="submit" value="Войти" />
        <hr />
        <Link to={"/forgetPass"} className="btn-forget">
          Забыл/а пароль
        </Link>
      </form>
    </div>
  );
};

export default Login;
