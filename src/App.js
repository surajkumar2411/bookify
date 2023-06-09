import { Routes, Route } from "react-router-dom";

//Components
import MyNavbar from "./components/navbar";


//pages
import RegisterPage from "./pages/register";
import LoginPage from "./pages/login";
import ListingPage from "./pages/List";
import HomePage from "./pages/Home"

// css
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <MyNavbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/book/list" element={<ListingPage />} />

      </Routes>
    </div>
  );
}

export default App;
