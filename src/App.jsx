import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import '../node_modules/bootstrap-icons/icons'
import { Route, Routes } from "react-router-dom";
import RegisterForm from "./Components/Register/Register";
import LoginForm from "./Components/Login/Login";
import CourseView from "./Components/CourseView/CourseView";
import Questions from "./Components/CourseView/Questions";
// import Blog from './Components/Blog/Blog'
// import MemberShip from './Components/MemberShip/MemberShip'

function App() {
  return (
    <>
      <Routes>
        <Route path="/CourseView" element={<CourseView />} />
        <Route path="/Quiz" element={<Questions />} />
      </Routes>

      <Routes>
        <Route path="/Register" element={<RegisterForm />}></Route>
        <Route path="/Login" element={<LoginForm />}></Route>
      </Routes>
    </>
  );
}

export default App;
