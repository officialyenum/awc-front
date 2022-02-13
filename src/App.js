import TopBar from "./components/TopBar/TopBar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import About from "./pages/About/About";
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";
import Settings from "./pages/Settings/Settings";
import { Routes, Route } from "react-router-dom";
function App() {
  const user = false;
  return (
    <>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="post/:slug" element={<Single />} />
        <Route path="write" element={user ? <Write /> : <Login />} />
        <Route path="settings" element={user ? <Settings /> : <Login />} />
        <Route path="login" element={user ? <Home /> : <Login />} />
        <Route path="register" element={user ? <Home /> : <Register />} />
      </Routes>
    </>
  );
}

export default App;
