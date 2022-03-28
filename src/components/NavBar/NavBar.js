import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./NavBar.scss";

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="nav">
        <Link className="itmo-h1" to={"/"}>
          ITMO UNIVERSITY
        </Link>
        <br />

        <h1 className="person">Аман Даниил Владимирович</h1>

        <br />

        <NavLink
          className={({ isActive }) => (isActive ? "nav-link-active" : "nav-link")}
          to={"subject"}
        >
          Дисциплины
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "nav-link-active" : "nav-link")}
          to={"tester"}
        >
          Тестирование
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "nav-link-active" : "nav-link")}
          to={"academicPerformance"}
        >
          Ведомость
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "nav-link-active" : "nav-link")}
          to={"/logout"}
        >
          Выход
        </NavLink>
      </div>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default NavBar;
