import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Auth from "./views/Auth";
import Profile from "./views/Profile";
import Detail from "./views/Detail";
import { GlobalContext } from "./context/GlobalContext";
import { useContext } from "react";

function App() {
  const { authUser } = useContext(GlobalContext);
  const token = authUser.token;


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={!token? <Auth /> : <Navigate to="/" />} />
        <Route path="/detail/:id" element={token ? <Detail /> : <Navigate to="/login" />} />
        <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} />
      </Routes>
    </>
  );
}

export default App;
