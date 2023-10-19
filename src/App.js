import Navbar from "./components/navbar/Navbar";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  );
}
