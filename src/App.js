import { Route, Routes } from "react-router-dom";
import "./App.css";
import ForgetPassword from "./components/Auth/ForgetPassword/ForgetPassword";
import Login from "./components/Auth/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Main from "./components/Main/Main";
import Tester from "./components/Tester/Tester";
import NavBar from "./components/NavBar/NavBar";
import LogOut from "./components/Auth/LogOut/LogOut";
import Subject from "./components/Subject/Subject";
import AcademicPerformance from "./components/AcademicPerformance/AcademicPerformance";

function App() {
  return (
    <Routes>
      <Route index path="/login" element={<Login />} />
      <Route path="/forgetPass" element={<ForgetPassword />} />
      <Route path="/logout" element={<LogOut />} />
      <Route path="/" element={<NavBar />}>
        <Route index element={<Main />} />
        <Route path="tester" element={<Tester />} />
        <Route path="subject" element={<Subject />} />
        <Route path="academicPerformance" element={<AcademicPerformance />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
