import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import HomePage from "./components/Pages/HomePage";
import Navigation from "./components/Header/Navigation.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />

      <Routes>
      <Route path="/" element={<HomePage />} />
      </Routes>

    </div>
  );
}

export default App;
