import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import DetailScreen from "./screens/DetailScreen";
import HomeScreen from "./screens/HomeScreen";
import ReferenceScreen from "./screens/ReferenceScreen";

function App() {
  return (
    <div className="App col-container">
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/details/:id" element={<DetailScreen />} />
        <Route path="/reference" element={<ReferenceScreen />} />
      </Routes>
    </div>
  );
}

export default App;
