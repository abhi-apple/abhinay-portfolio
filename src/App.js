import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import MyInfo from "./pages/MyInfo/MyInfo";
import Projects from "./pages/Projects/Projects";
import Experience from "./pages/Experience/Experience";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MyInfo />}></Route>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/projects" element={<Projects />}></Route>
        <Route exact path="/experience" element={<Experience />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
